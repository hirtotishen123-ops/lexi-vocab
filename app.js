(function(){

  var CHUNK_SIZE = 13;       // new words introduced per day
  var EXERCISE_CAP = 8;      // max questions per exercise per day
  var REVIEW_WORDS_PER_DAY = 5; // previously-learned words mixed into today's practice
  var MIN_EXERCISES_PER_DAY = 2;
  var TOTAL_WORDS = ALL_WORDS.length;

  function shuffle(arr){
    var a = arr.slice();
    for (var i=a.length-1;i>0;i--){
      var j = Math.floor(Math.random()*(i+1));
      var t=a[i]; a[i]=a[j]; a[j]=t;
    }
    return a;
  }
  function sample(arr, n, exclude){
    var pool = arr.filter(function(x){ return x !== exclude; });
    return shuffle(pool).slice(0, n);
  }

  function buildDays(words, chunkSize){
    var days = [];
    var dayId = 1;
    for (var i=0; i<words.length; i+=chunkSize, dayId++){
      days.push({ id: dayId, words: words.slice(i, i+chunkSize) });
    }
    return days;
  }

  var DAYS = buildDays(ALL_WORDS, CHUNK_SIZE);

  var STORE_KEY = "lexi-progress-v1";
  var state = loadState();

  function freshSession(){ return { fillblank:null, matching:null, quiz:null, typing:null }; }

  function loadState(){
    try {
      var raw = localStorage.getItem(STORE_KEY);
      if (raw) return JSON.parse(raw);
    } catch(e) {}
    return { completedDays: [], streak: 0, lastDate: null, wordsLearned: 0 };
  }
  function saveState(){
    try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch(e) {}
  }
  function resetProgress(){
    if (!confirm('לאפס את כל ההתקדמות? פעולה זו לא ניתנת לביטול.')) return;
    state = { completedDays: [], streak: 0, lastDate: null, wordsLearned: 0 };
    saveState();
    session = freshSession();
    renderHome();
    goto('home');
  }
  window.resetProgress = resetProgress;

  function currentDayObj(){
    for (var i=0;i<DAYS.length;i++){
      if (state.completedDays.indexOf(DAYS[i].id) === -1) return DAYS[i];
    }
    return null; // finished every day
  }

  /* ---------------- review words (spaced practice) ---------------- */
  function allPreviouslyLearnedWords(excludeDayId){
    var words = [];
    state.completedDays.forEach(function(id){
      if (id === excludeDayId) return;
      var d = DAYS[id-1];
      if (d) words = words.concat(d.words);
    });
    return words;
  }
  function getReviewWords(day){
    var pool = allPreviouslyLearnedWords(day.id);
    return shuffle(pool).slice(0, Math.min(REVIEW_WORDS_PER_DAY, pool.length));
  }

  // Builds the actual word-object pool used by one exercise type, mixing
  // today's new words with a handful of previously-learned words.
  function getExercisePool(day, type){
    var reviewWords = getReviewWords(day);
    var combined;
    if (type === 'fillblank' || type === 'typing'){
      combined = day.words.filter(function(w){ return !w.rec; })
        .concat(reviewWords.filter(function(w){ return !w.rec; }));
    } else {
      combined = day.words.concat(reviewWords);
    }
    return shuffle(combined).slice(0, Math.min(EXERCISE_CAP, combined.length));
  }

  var session = freshSession();

  /* ---------------- sounds ---------------- */
  var audioCtx = null;
  function getAudioCtx(){
    if (!audioCtx){
      var Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return null;
      audioCtx = new Ctx();
    }
    if (audioCtx.state === 'suspended') audioCtx.resume();
    return audioCtx;
  }
  function playNote(ctx, freq, start, duration, peak, waveType){
    var osc = ctx.createOscillator();
    var gain = ctx.createGain();
    osc.type = waveType || 'sine';
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0, start);
    gain.gain.linearRampToValueAtTime(peak, start + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(start);
    osc.stop(start + duration + 0.02);
  }
  function playCorrectSound(){
    try {
      var ctx = getAudioCtx();
      if (!ctx) return;
      var t = ctx.currentTime;
      playNote(ctx, 784.0, t, 0.09, 0.07);
      playNote(ctx, 1046.5, t + 0.08, 0.16, 0.08);
    } catch(e) {}
  }
  function playWrongSound(){
    try {
      var ctx = getAudioCtx();
      if (!ctx) return;
      var t = ctx.currentTime;
      playNote(ctx, 190, t, 0.22, 0.08, 'sawtooth');
    } catch(e) {}
  }
  function playDayCompleteSound(){
    try {
      var ctx = getAudioCtx();
      if (!ctx) return;
      var t = ctx.currentTime;
      playNote(ctx, 659.3, t, 0.1, 0.07);
      playNote(ctx, 830.6, t + 0.1, 0.1, 0.07);
      playNote(ctx, 987.8, t + 0.2, 0.22, 0.08);
    } catch(e) {}
  }

  /* ---------------- long-press to reveal Hebrew ---------------- */
  var popupEl = null;
  function showHebrewPopup(text){
    if (!popupEl) popupEl = document.getElementById('he-popup');
    if (!popupEl) return;
    popupEl.textContent = text;
    popupEl.classList.add('visible');
    clearTimeout(popupEl._hideTimer);
    popupEl._hideTimer = setTimeout(function(){ popupEl.classList.remove('visible'); }, 1600);
  }
  function attachLongPress(el, textFn){
    var timer = null;
    var longPressed = false;
    function start(){
      longPressed = false;
      timer = setTimeout(function(){
        longPressed = true;
        if (navigator.vibrate) { try { navigator.vibrate(15); } catch(e){} }
        showHebrewPopup(textFn());
      }, 480);
    }
    function cancel(){ clearTimeout(timer); }
    el.addEventListener('mousedown', start);
    el.addEventListener('touchstart', start, {passive:true});
    el.addEventListener('mouseup', cancel);
    el.addEventListener('mouseleave', cancel);
    el.addEventListener('touchend', cancel);
    el.addEventListener('touchmove', cancel);
    el.addEventListener('click', function(e){
      if (longPressed){ e.stopPropagation(); e.preventDefault(); longPressed = false; }
    }, true);
  }

  /* ---------------- navigation ---------------- */
  function goto(name){
    document.querySelectorAll('.screen').forEach(function(s){ s.classList.remove('active'); });
    document.getElementById('screen-'+name).classList.add('active');
    document.getElementById('app').scrollTop = 0;
    window.scrollTo(0,0);
    if (name === 'home') renderHome();
    if (name === 'intro') renderIntro();
    if (name === 'hub') renderHub();
    if (name === 'fillblank') startFillblank();
    if (name === 'matching') startMatching();
    if (name === 'quiz') startQuiz();
    if (name === 'typing') startTyping();
    if (name === 'summary') renderSummary();
    if (name === 'stats') renderStats();
  }
  window.goto = goto;

  window.startDay = function(dayId){ session.started = dayId; goto('intro'); };

  function exerciseDoneCount(){
    var n = 0;
    ['fillblank','matching','quiz','typing'].forEach(function(k){ if (session[k]) n++; });
    return n;
  }
  window.tryFinishHub = function(){
    if (exerciseDoneCount() < MIN_EXERCISES_PER_DAY) return;
    goto('summary');
  };

  /* ---------------- HOME ---------------- */
  function renderHome(){
    var day = currentDayObj();
    var card = document.getElementById('home-day-card');
    if (!day){
      card.innerHTML =
        '<div class="day-card">' +
          '<div class="day-eyebrow">כל הכבוד!</div>' +
          '<div class="day-title">סיימת את כל ' + TOTAL_WORDS + ' המילים</div>' +
          '<p class="day-sub">עברת על כל הרשימות A עד D. אפשר לחזור ולתרגל שוב מההתחלה בכל זמן.</p>' +
          '<button class="btn btn-primary" style="margin-top:14px;" onclick="goto(\'stats\')">לצפייה בסטטיסטיקה</button>' +
        '</div>';
    } else {
      var started = session.started === day.id;
      var label = started ? 'להמשיך מאיפה שעצרת' : 'להתחיל את היום';
      var reviewNote = day.id > 1 ? ('<p class="day-sub" style="margin-top:6px;">ונתרגל גם כמה מילים ישנות מהימים הקודמים.</p>') : '';
      card.innerHTML =
        '<div class="day-card">' +
          '<div class="day-eyebrow">יום ' + day.id + ' · ' + day.words.length + ' מילים חדשות</div>' +
          '<div class="day-title">בואו נלמד מילים</div>' +
          '<p class="day-sub">נכיר ' + day.words.length + ' מילים חדשות, ואז נתרגל אותן בכמה דרכים שונות.</p>' +
          reviewNote +
          '<button class="btn btn-primary" style="margin-top:14px;" onclick="startDay(' + day.id + ')">' + label + '</button>' +
        '</div>';
    }

    var stats = document.getElementById('home-stats');
    stats.innerHTML =
      '<div class="stat-chip"><div class="n">' + state.streak + '</div><div class="l">ימים ברצף</div></div>' +
      '<div class="stat-chip"><div class="n">' + state.completedDays.length + '</div><div class="l">ימים הושלמו</div></div>' +
      '<div class="stat-chip"><div class="n">' + state.wordsLearned + '</div><div class="l">מילים נלמדו</div></div>';

    document.getElementById('progress-text').textContent = state.wordsLearned + ' / ' + TOTAL_WORDS;
    document.getElementById('progress-fill').style.width = Math.min(100, (state.wordsLearned/TOTAL_WORDS*100)) + '%';
  }

  /* ---------------- INTRO (word cards) ---------------- */
  var introWords = [];
  var introIdx = 0;
  function renderIntro(){
    var day = currentDayObj();
    var reviewWords = day.id > 1 ? getReviewWords(day) : [];
    introWords = day.words.map(function(w){ return { w:w, isReview:false }; })
      .concat(reviewWords.map(function(w){ return { w:w, isReview:true }; }));
    introIdx = 0;
    paintIntro();
  }
  function paintIntro(){
    var item = introWords[introIdx];
    var w = item.w;
    document.getElementById('intro-counter').textContent = 'כרטיס ' + (introIdx+1) + ' מתוך ' + introWords.length;
    document.getElementById('intro-section-label').textContent = item.isReview ? 'לחזרה מהימים הקודמים' : 'מילה חדשה';
    var familyHtml = w.family ? ('<div class="word-family">נגזרות: <span class="en">' + w.family.en + '</span> (' + w.family.pos + ') — ' + w.family.he + '</div>') : '';
    document.getElementById('intro-card').innerHTML =
      '<div class="word-top-row">' +
        '<span class="pos-tag">' + w.pos + '</span>' +
        '<span class="rec-tag ' + (w.rec?'rec':'') + '">' + (w.rec ? 'להכרה' : 'להכרה + הפקה') + '</span>' +
      '</div>' +
      '<div class="word-en">' + w.en + '</div>' +
      '<div class="word-he">' + w.he + '</div>' +
      '<div class="word-def">' + w.def + '</div>' +
      '<div class="word-example">' + w.example.replace('___', '<b>' + w.en + '</b>') + '</div>' +
      familyHtml;
    var dots = '';
    for (var i=0;i<introWords.length;i++){
      dots += '<span class="dot ' + (i<introIdx?'done':(i===introIdx?'current':'')) + '"></span>';
    }
    document.getElementById('intro-dots').innerHTML = dots;
    document.getElementById('intro-prev').disabled = (introIdx===0);
    var nextBtn = document.getElementById('intro-next');
    nextBtn.textContent = (introIdx === introWords.length-1) ? '✓' : '‹';
  }
  function introStep(dir){
    if (dir>0 && introIdx===introWords.length-1){ goto('hub'); return; }
    introIdx = Math.max(0, Math.min(introWords.length-1, introIdx+dir));
    paintIntro();
  }
  window.introStep = introStep;

  /* ---------------- HUB ---------------- */
  function renderHub(){
    var day = currentDayObj();
    var tiles = [
      { key:'fillblank', title:'השלמת משפטים', sub:'בחרו מילה ממחסן המילים', icon:'Aa', color:'amber' },
      { key:'typing', title:'הקלדה מהעברית', sub:'כתבו את המילה באנגלית לבד', icon:'✎', color:'violet' },
      { key:'matching', title:'התאמה להגדרה', sub:'התאימו מילה להגדרה באנגלית', icon:'⇄', color:'rose' },
      { key:'quiz', title:'חידון מהיר', sub:'עברית ↔ אנגלית, שאלה אחר שאלה', icon:'?', color:'' }
    ];
    var html = '';
    tiles.forEach(function(t){
      var pool = getExercisePool(day, t.key);
      if (pool.length === 0) return;
      var result = session[t.key];
      var done = result !== null;
      html += '<div class="ex-tile ' + (done?'done':'') + '" onclick="goto(\'' + t.key + '\')">' +
        '<div class="ex-icon ' + t.color + '">' + t.icon + '</div>' +
        '<div class="ex-body"><div class="ex-title">' + t.title + '</div><div class="ex-sub">' + t.sub + '</div></div>' +
        '<div class="ex-status ' + (done?'done':'') + '">' + (done ? ('✓ ' + result.correct + '/' + result.total) : 'עדיין לא') + '</div>' +
      '</div>';
    });
    document.getElementById('hub-tiles').innerHTML = html;

    var done = exerciseDoneCount();
    var finishBtn = document.getElementById('hub-finish-btn');
    var note = document.getElementById('hub-gate-note');
    if (done >= MIN_EXERCISES_PER_DAY){
      finishBtn.disabled = false;
      note.textContent = '';
    } else {
      finishBtn.disabled = true;
      note.textContent = 'השלימו עוד ' + (MIN_EXERCISES_PER_DAY - done) + ' תרגול/ים כדי לסיים את היום (' + done + '/' + MIN_EXERCISES_PER_DAY + ')';
    }
  }

  function wordFeedbackHtml(w){
    return 'התשובה הנכונה: <span class="en">' + w.en + '</span> — <span class="he-word">' + w.he + '</span><br>' + w.def;
  }

  /* ---------------- FILL IN THE BLANK ---------------- */
  var fb = {};
  function startFillblank(){
    var day = currentDayObj();
    fb = { words: getExercisePool(day, 'fillblank'), idx: 0, correct: 0, locked: false };
    paintFillblank();
  }
  function paintFillblank(){
    var w = fb.words[fb.idx];
    var prog = '';
    for (var i=0;i<fb.words.length;i++) prog += '<i class="' + (i<fb.idx?'done':(i===fb.idx?'current':'')) + '"></i>';
    document.getElementById('fb-progress').innerHTML = prog;

    var parts = (w.practice || w.example).split('___');
    document.getElementById('fb-sentence').innerHTML = '<span class="sentence-text">' + parts[0] + '<span class="blank-slot" id="fb-blank">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>' + parts[1] + '</span>';

    document.getElementById('fb-feedback').style.display = 'none';

    var options = sample(fb.words.map(function(x){return x.en;}), 3, w.en);
    options.push(w.en);
    options = shuffle(options);
    var bank = document.getElementById('fb-bank');
    bank.innerHTML = '';
    options.forEach(function(opt){
      var optWord = fb.words.find(function(x){return x.en===opt;}) || w;
      var chip = document.createElement('div');
      chip.className = 'chip';
      chip.textContent = opt;
      chip.onclick = function(){ answerFillblank(opt, w, chip); };
      attachLongPress(chip, function(){ return optWord.en + ' — ' + optWord.he; });
      bank.appendChild(chip);
    });
    fb.locked = false;
  }
  function answerFillblank(opt, w, chipEl){
    if (fb.locked) return;
    var blank = document.getElementById('fb-blank');
    if (opt === w.en){
      fb.locked = true;
      fb.correct++;
      playCorrectSound();
      chipEl.classList.add('correct');
      blank.textContent = w.en;
      blank.classList.add('filled');
      attachLongPress(blank, function(){ return w.en + ' — ' + w.he; });
      document.querySelectorAll('#fb-bank .chip').forEach(function(c){ c.classList.add('disabled'); });
      setTimeout(advanceFillblank, 650);
    } else {
      fb.locked = true;
      playWrongSound();
      chipEl.classList.add('wrong');
      document.querySelectorAll('#fb-bank .chip').forEach(function(c){
        c.classList.add('disabled');
        if (c.textContent.trim() === w.en) c.classList.add('correct');
      });
      blank.textContent = w.en;
      blank.classList.add('wrong');
      attachLongPress(blank, function(){ return w.en + ' — ' + w.he; });
      var fbk = document.getElementById('fb-feedback');
      document.getElementById('fb-feedback-text').innerHTML = wordFeedbackHtml(w);
      fbk.style.display = 'flex';
    }
  }
  function advanceFillblank(){
    fb.idx++;
    if (fb.idx >= fb.words.length){ finishFillblank(); } else { paintFillblank(); }
  }
  function continueFillblank(){ advanceFillblank(); }
  window.continueFillblank = continueFillblank;
  function finishFillblank(){
    session.fillblank = { correct: fb.correct, total: fb.words.length };
    document.getElementById('fb-score').textContent = fb.correct + '/' + fb.words.length;
    goto('fillblank-done');
  }

  /* ---------------- TYPING ---------------- */
  var tp = {};
  function startTyping(){
    var day = currentDayObj();
    tp = { words: getExercisePool(day, 'typing'), idx: 0, correct: 0, answered: false };
    paintTyping();
  }
  function paintTyping(){
    var w = tp.words[tp.idx];
    var prog = '';
    for (var i=0;i<tp.words.length;i++) prog += '<i class="' + (i<tp.idx?'done':(i===tp.idx?'current':'')) + '"></i>';
    document.getElementById('typing-progress').innerHTML = prog;
    document.getElementById('typing-card').innerHTML =
      '<div class="typing-kicker">איך כותבים את זה באנגלית?</div>' +
      '<div class="typing-he">' + w.he.split(' / ')[0].split(',')[0] + '</div>' +
      '<span class="typing-pos">' + w.pos + '</span>';
    var input = document.getElementById('typing-input');
    input.value = '';
    input.classList.remove('correct','wrong');
    input.disabled = false;
    document.getElementById('typing-feedback').textContent = '';
    document.getElementById('typing-feedback').className = 'typing-feedback';
    tp.answered = false;
    setTimeout(function(){ input.focus(); }, 50);
  }
  function checkTyping(){
    if (tp.answered) return;
    var w = tp.words[tp.idx];
    var input = document.getElementById('typing-input');
    var val = input.value.trim().toLowerCase();
    if (!val) return;
    tp.answered = true;
    var feedback = document.getElementById('typing-feedback');
    if (val === w.en.toLowerCase()){
      tp.correct++;
      playCorrectSound();
      input.classList.add('correct');
      feedback.textContent = 'נכון!';
      feedback.className = 'typing-feedback correct';
    } else {
      playWrongSound();
      input.classList.add('wrong');
      feedback.innerHTML = 'התשובה הנכונה: <span class="en" style="font-weight:600;">' + w.en + '</span> — ' + w.he;
      feedback.className = 'typing-feedback wrong';
    }
    input.disabled = true;
    setTimeout(function(){
      tp.idx++;
      if (tp.idx >= tp.words.length){ finishTyping(); } else { paintTyping(); }
    }, 1300);
  }
  function finishTyping(){
    session.typing = { correct: tp.correct, total: tp.words.length };
    document.getElementById('typing-score').textContent = tp.correct + '/' + tp.words.length;
    goto('typing-done');
  }
  document.getElementById('typing-check-btn').addEventListener('click', checkTyping);
  document.getElementById('typing-input').addEventListener('keydown', function(e){
    if (e.key === 'Enter'){ e.preventDefault(); checkTyping(); }
  });

  /* ---------------- MATCHING ---------------- */
  var mt = {};
  function startMatching(){
    var day = currentDayObj();
    mt = { words: getExercisePool(day, 'matching'), matchedCount: 0, selWord: null, selDef: null };
    paintMatching();
  }
  function paintMatching(){
    var leftOrder = shuffle(mt.words);
    var rightOrder = shuffle(mt.words);
    var grid = document.getElementById('match-grid');
    grid.innerHTML = '';
    leftOrder.forEach(function(w){
      var el = document.createElement('div');
      el.className = 'match-item word';
      el.textContent = w.en;
      el.dataset.en = w.en;
      el.onclick = function(){ selectWord(w.en, el); };
      attachLongPress(el, function(){ return w.en + ' — ' + w.he; });
      grid.appendChild(el);
    });
    rightOrder.forEach(function(w){
      var el = document.createElement('div');
      el.className = 'match-item def';
      el.textContent = w.def;
      el.dataset.en = w.en;
      el.onclick = function(){ selectDef(w.en, el); };
      grid.appendChild(el);
    });
  }
  function selectWord(en, el){
    if (el.classList.contains('matched')) return;
    document.querySelectorAll('.match-item.word').forEach(function(x){ x.classList.remove('selected'); });
    el.classList.add('selected');
    mt.selWord = { en: en, el: el };
    tryMatch();
  }
  function selectDef(en, el){
    if (el.classList.contains('matched')) return;
    document.querySelectorAll('.match-item.def').forEach(function(x){ x.classList.remove('selected'); });
    el.classList.add('selected');
    mt.selDef = { en: en, el: el };
    tryMatch();
  }
  function tryMatch(){
    if (!mt.selWord || !mt.selDef) return;
    if (mt.selWord.en === mt.selDef.en){
      playCorrectSound();
      mt.selWord.el.classList.add('matched');
      mt.selDef.el.classList.add('matched');
      mt.selWord.el.classList.remove('selected');
      mt.selDef.el.classList.remove('selected');
      mt.matchedCount++;
      mt.selWord = null; mt.selDef = null;
      if (mt.matchedCount >= mt.words.length){
        setTimeout(finishMatching, 400);
      }
    } else {
      playWrongSound();
      var w = mt.selWord.el, d = mt.selDef.el;
      w.classList.add('shake'); d.classList.add('shake');
      setTimeout(function(){
        w.classList.remove('shake','selected'); d.classList.remove('shake','selected');
        mt.selWord = null; mt.selDef = null;
      }, 400);
    }
  }
  function finishMatching(){
    session.matching = { correct: mt.matchedCount, total: mt.words.length };
    document.getElementById('match-score').textContent = mt.matchedCount + '/' + mt.words.length;
    goto('matching-done');
  }

  /* ---------------- QUIZ ---------------- */
  var qz = {};
  function startQuiz(){
    var day = currentDayObj();
    var words = getExercisePool(day, 'quiz');
    var questions = words.map(function(w, i){
      var heToEn = (i % 2 === 0);
      var distractors = sample(words.filter(function(x){return x.en!==w.en;}), 3, null);
      if (heToEn){
        var opts = shuffle(distractors.concat([w]));
        return { kicker:'איך אומרים את זה באנגלית?', prompt: w.he, options: opts, answer: w.en, isEn:true, word:w };
      } else {
        var opts2 = shuffle(distractors.concat([w]));
        return { kicker:'מה המשמעות של המילה?', prompt: w.en, promptEn:true, options: opts2, answer: w.he, isEn:false, word:w };
      }
    });
    qz = { questions: questions, idx: 0, correct: 0, locked:false };
    paintQuiz();
  }
  function paintQuiz(){
    var q = qz.questions[qz.idx];
    var prog = '';
    for (var i=0;i<qz.questions.length;i++) prog += '<i class="' + (i<qz.idx?'done':(i===qz.idx?'current':'')) + '"></i>';
    document.getElementById('quiz-progress').innerHTML = prog;
    document.getElementById('quiz-kicker').textContent = q.kicker;
    document.getElementById('quiz-prompt').innerHTML = q.promptEn ? '<span class="en">' + q.prompt + '</span>' : q.prompt;
    if (q.promptEn){
      attachLongPress(document.querySelector('#quiz-prompt .en'), function(){ return q.word.en + ' — ' + q.word.he; });
    }
    document.getElementById('quiz-feedback').style.display = 'none';
    var optsEl = document.getElementById('quiz-options');
    optsEl.innerHTML = '';
    q.options.forEach(function(optWord){
      var text = q.isEn ? optWord.en : optWord.he;
      var el = document.createElement('div');
      el.className = 'q-opt' + (q.isEn ? ' en' : '');
      el.textContent = text;
      el.onclick = function(){ answerQuiz(text, q, el); };
      if (q.isEn) attachLongPress(el, function(){ return optWord.en + ' — ' + optWord.he; });
      optsEl.appendChild(el);
    });
    qz.locked = false;
  }
  function answerQuiz(opt, q, el){
    if (qz.locked) return;
    qz.locked = true;
    var correct = (opt === q.answer);
    document.querySelectorAll('#quiz-options .q-opt').forEach(function(o){
      o.classList.add('disabled');
      if (o.textContent === q.answer) o.classList.add('correct');
      else if (o === el) o.classList.add('wrong');
    });
    if (correct){
      qz.correct++;
      playCorrectSound();
      setTimeout(advanceQuiz, 650);
    } else {
      playWrongSound();
      document.getElementById('quiz-feedback-text').innerHTML = wordFeedbackHtml(q.word);
      document.getElementById('quiz-feedback').style.display = 'flex';
    }
  }
  function advanceQuiz(){
    qz.idx++;
    if (qz.idx >= qz.questions.length) finishQuiz(); else paintQuiz();
  }
  function continueQuiz(){ advanceQuiz(); }
  window.continueQuiz = continueQuiz;
  function finishQuiz(){
    session.quiz = { correct: qz.correct, total: qz.questions.length };
    document.getElementById('quiz-score').textContent = qz.correct + '/' + qz.questions.length;
    goto('quiz-done');
  }

  /* ---------------- SUMMARY ---------------- */
  function renderSummary(){
    var parts = ['fillblank','typing','matching','quiz'];
    var labels = { fillblank:'השלמת משפטים', typing:'הקלדה מהעברית', matching:'התאמה להגדרה', quiz:'חידון מהיר' };
    var totalCorrect = 0, totalAll = 0;
    var listHtml = '';
    parts.forEach(function(k){
      var r = session[k];
      if (r){ totalCorrect += r.correct; totalAll += r.total; }
      listHtml += '<div class="summary-row"><span>' + labels[k] + '</span><span class="v">' + (r ? (r.correct+'/'+r.total) : '—') + '</span></div>';
    });
    var day = currentDayObj();
    listHtml += '<div class="summary-row"><span>מילים חדשות היום</span><span class="v">' + day.words.length + '</span></div>';
    document.getElementById('summary-list').innerHTML = listHtml;
    var pct = totalAll ? Math.round(totalCorrect/totalAll*100) : 0;
    document.getElementById('summary-pct').textContent = pct + '%';
    document.getElementById('summary-ring').style.setProperty('--pct', pct);
  }

  function finishDay(){
    playDayCompleteSound();
    var day = currentDayObj();
    var today = new Date().toDateString();
    if (state.lastDate !== today){
      state.streak = state.streak + 1;
      state.lastDate = today;
    }
    state.completedDays.push(day.id);
    state.wordsLearned += day.words.length;
    saveState();
    session = freshSession();
    goto('home');
  }
  window.finishDay = finishDay;

  /* ---------------- STATS ---------------- */
  function renderStats(){
    document.getElementById('stats-progress-text').textContent = state.wordsLearned + ' / ' + TOTAL_WORDS;
    document.getElementById('stats-progress-fill').style.width = Math.min(100, (state.wordsLearned/TOTAL_WORDS*100)) + '%';

    var strip = '';
    for (var i=13;i>=0;i--){
      var filled = i < state.streak;
      strip += '<div class="streak-day ' + (filled?'filled':'') + '">' + (14-i) + '</div>';
    }
    document.getElementById('streak-strip').innerHTML = strip;

    var list = '';
    if (state.completedDays.length === 0){
      list = '<p style="color:var(--muted-ink); font-size:13px;">עדיין לא הושלם אף יום.</p>';
    } else {
      state.completedDays.forEach(function(id){
        list += '<div class="summary-row"><span>יום ' + id + '</span><span class="v">הושלם ✓</span></div>';
      });
    }
    document.getElementById('stats-days-list').innerHTML = list;
  }

  renderHome();
})();
