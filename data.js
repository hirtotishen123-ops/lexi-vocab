var ALL_WORDS = [
    {
        "en":  "addition",
        "pos":  "n",
        "he":  "תוספת",
        "def":  "something that is added to something else",
        "example":  "The new chapter is a welcome ___ to the book.",
        "practice":  "He got extra pay as an ___ to his salary.",
        "rec":  false,
        "family":  {
                       "en":  "additional",
                       "pos":  "adj",
                       "he":  "נוסף"
                   }
    },
    {
        "en":  "advance",
        "pos":  "n",
        "he":  "התקדמות",
        "def":  "forward movement, or progress in something",
        "example":  "Scientists have made great ___ in medicine this year.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "advanced",
        "pos":  "adj",
        "he":  "מתקדם",
        "def":  "at a high or complex level",
        "example":  "She signed up for the ___ English course.",
        "practice":  "Our factory just installed ___ new equipment.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "advertising",
        "pos":  "n",
        "he":  "פרסום",
        "def":  "the business of telling the public about products",
        "example":  "The company spends a fortune on ___ every year.",
        "practice":  "Good ___ can make a small brand famous overnight.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "among other things",
        "pos":  "",
        "he":  "בין היתר",
        "def":  "used to mention one example from a list, without naming them all",
        "example":  "The museum has, ___, a huge collection of ancient coins.",
        "practice":  "She enjoys reading, cooking, and, ___, painting in her free time.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "analysis",
        "pos":  "n",
        "he":  "ניתוח",
        "def":  "a detailed examination of something",
        "example":  "The report gives a full ___ of the results.",
        "practice":  "Her ___ of the data changed how we see the problem.",
        "rec":  false,
        "family":  {
                       "en":  "analyze / analyst",
                       "pos":  "v / n",
                       "he":  "לנתח / אנליסט"
                   }
    },
    {
        "en":  "appear",
        "pos":  "v",
        "he":  "להופיע, להיראות",
        "def":  "to become visible, or to seem to be",
        "example":  "Dark clouds began to ___ in the sky.",
        "practice":  "She didn\u0027t ___ worried at all before the test.",
        "rec":  false,
        "family":  {
                       "en":  "appearance",
                       "pos":  "n",
                       "he":  "הופעה, מראה"
                   }
    },
    {
        "en":  "approach",
        "pos":  "v, n",
        "he":  "לגשת אל / גישה",
        "def":  "a way of dealing with a situation or problem",
        "example":  "The teacher tried a new ___ to explaining grammar.",
        "practice":  "He decided to ___ the problem differently this time.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "as",
        "pos":  "conj",
        "he":  "כאשר / בעוד ש- / כפי ש-",
        "def":  "used to talk about two things happening at the same time, or to compare",
        "example":  "___ she walked into the room, everyone stopped talking.",
        "practice":  "He hummed a tune ___ he worked in the garden.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "at least",
        "pos":  "",
        "he":  "לפחות",
        "def":  "not less than a stated number or amount",
        "example":  "You should drink ___ eight glasses of water a day.",
        "practice":  "It will take ___ two hours to finish the project.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "average",
        "pos":  "adj",
        "he":  "ממוצע",
        "def":  "typical; the usual amount or level",
        "example":  "The ___ score on the test was 80.",
        "practice":  "An ___ person sleeps about eight hours a night.",
        "rec":  false,
        "family":  {
                       "en":  "on average",
                       "pos":  "phrase",
                       "he":  "בממוצע"
                   }
    },
    {
        "en":  "be responsible for sth/doing sth",
        "pos":  "",
        "he":  "להיות אחראי על משהו / לעשות משהו",
        "def":  "to have the duty of taking care of something or making sure it happens",
        "example":  "Each student is ___ for bringing their own equipment.",
        "practice":  "The manager is ___ for training all the new employees.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "before",
        "pos":  "prep",
        "he":  "לפני",
        "def":  "earlier than a particular time or event",
        "example":  "Wash your hands ___ you eat.",
        "practice":  "Please finish your homework ___ dinner.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "besides",
        "pos":  "prep, adv",
        "he":  "חוץ מ-, מלבד",
        "def":  "in addition to; apart from",
        "example":  "___ math, he also loves physics.",
        "practice":  "___ being funny, she is also very kind.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "can",
        "pos":  "v",
        "he":  "יכול / מסוגל; לפעמים קורה ש-",
        "def":  "to be able to do something, or used to say something sometimes happens",
        "example":  "The weather here ___ change very quickly in the mountains.",
        "practice":  "Learning a new language ___ take a lot of patience.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "challenge",
        "pos":  "v, n",
        "he":  "אתגר / לערער על",
        "def":  "a task that tests your ability, or to question if something is right",
        "example":  "Learning 900 words before the exam is a real ___.",
        "practice":  "No one dared to ___ the referee\u0027s decision.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "chance",
        "pos":  "n",
        "he":  "סיכוי",
        "def":  "a possibility that something will happen",
        "example":  "There\u0027s a good ___ it will rain tomorrow.",
        "practice":  "Don\u0027t miss your ___ to ask the teacher a question.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "change",
        "pos":  "v, n",
        "he":  "שינוי / להשתנות",
        "def":  "to become different, or a difference that happens",
        "example":  "Moving to a new city can ___ your whole life.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "characteristic",
        "pos":  "n, adj",
        "he":  "מאפיין / אופייני",
        "def":  "a typical quality or feature of someone or something",
        "example":  "Curiosity is a key ___ of great scientists.",
        "practice":  "Patience is an important ___ for a good teacher.",
        "rec":  false,
        "family":  {
                       "en":  "characterize",
                       "pos":  "v",
                       "he":  "לאפיין"
                   }
    },
    {
        "en":  "claim",
        "pos":  "v",
        "he":  "לטעון",
        "def":  "to say that something is true without proof",
        "example":  "The company\u0027s ad made a bold ___ about its results.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "come after/first/last, etc",
        "pos":  "",
        "he":  "לבוא אחרי/ראשון/אחרון וכו\u0027 (בסדר)",
        "def":  "to have a particular position in an order or sequence",
        "example":  "In the alphabet, the letter B comes ___ A.",
        "practice":  "She always wants to ___ first in every competition.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "common",
        "pos":  "adj",
        "he":  "נפוץ, משותף",
        "def":  "happening often, or shared by many people",
        "example":  "It\u0027s ___ for students to feel nervous before an exam.",
        "practice":  "Headaches are a ___ side effect of stress.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "complicated",
        "pos":  "adj",
        "he":  "מסובך",
        "def":  "difficult to understand because it has many parts",
        "example":  "The instructions were so ___ that nobody understood them.",
        "practice":  "The plot of the movie was too ___ to follow.",
        "rec":  false,
        "family":  {
                       "en":  "complicate",
                       "pos":  "v",
                       "he":  "לסבך"
                   }
    },
    {
        "en":  "concern",
        "pos":  "v, n",
        "he":  "לדאוג / דאגה",
        "def":  "to worry someone, or something that relates to them",
        "example":  "Her parents expressed ___ about her low grades.",
        "practice":  "The teacher raised a ___ about phones in class.",
        "rec":  false,
        "family":  {
                       "en":  "concerned, concerning",
                       "pos":  "adj, prep",
                       "he":  "מודאג / בנוגע ל-"
                   }
    },
    {
        "en":  "conditions",
        "pos":  "n",
        "he":  "תנאים",
        "def":  "the circumstances someone lives, works, or acts in",
        "example":  "Workers complained about the unsafe ___ in the factory.",
        "practice":  "The hikers checked the weather ___ before leaving.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "conduct",
        "pos":  "v",
        "he":  "לבצע, לערוך",
        "def":  "to organize and carry out an activity",
        "example":  "Researchers plan to ___ a new study next year.",
        "practice":  "The school will ___ a fire drill this afternoon.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "consequence",
        "pos":  "n",
        "he":  "תוצאה, השלכה",
        "def":  "a result of a particular action or situation",
        "example":  "Missing the deadline had serious ___ for the whole team.",
        "rec":  false,
        "family":  {
                       "en":  "consequently",
                       "pos":  "adv",
                       "he":  "כתוצאה מכך"
                   }
    },
    {
        "en":  "considerable",
        "pos":  "adj",
        "he":  "ניכר, משמעותי",
        "def":  "fairly large or important",
        "example":  "She has made ___ progress since September.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "cope",
        "pos":  "v",
        "he":  "להתמודד",
        "def":  "to deal successfully with a difficult situation",
        "example":  "It can be hard to ___ with so much homework.",
        "practice":  "He learned to ___ with stress before big exams.",
        "rec":  false,
        "family":  {
                       "en":  "cope with sth",
                       "pos":  "phrase",
                       "he":  "להתמודד עם משהו"
                   }
    },
    {
        "en":  "critic",
        "pos":  "n",
        "he":  "מבקר",
        "def":  "someone who reviews books, films, or art, or expresses disapproval",
        "example":  "The film ___ gave the movie a poor review.",
        "practice":  "A harsh ___ once called the novel boring.",
        "rec":  false,
        "family":  {
                       "en":  "criticize / criticism",
                       "pos":  "v / n",
                       "he":  "לבקר / ביקורת"
                   }
    },
    {
        "en":  "current",
        "pos":  "adj",
        "he":  "נוכחי, עדכני",
        "def":  "happening or existing now",
        "example":  "She checked the ___ weather before leaving home.",
        "rec":  true,
        "family":  {
                       "en":  "currently",
                       "pos":  "adv",
                       "he":  "כיום, כרגע"
                   }
    },
    {
        "en":  "decrease",
        "pos":  "v, n",
        "he":  "לרדת, לקטון / ירידה",
        "def":  "to become smaller in size, number, or amount",
        "example":  "Sales tend to ___ during the summer months.",
        "practice":  "There was a sharp ___ in the number of visitors this year.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "delayed",
        "pos":  "adj",
        "he":  "מעוכב, מושהה",
        "def":  "made to happen later than planned",
        "example":  "Our flight was ___ because of the storm.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "deliberately",
        "pos":  "adv",
        "he":  "בכוונה",
        "def":  "done on purpose, not by accident",
        "example":  "He ___ arrived late to avoid the meeting.",
        "rec":  true,
        "family":  {
                       "en":  "deliberate",
                       "pos":  "adj",
                       "he":  "מכוון, מכוון מראש"
                   }
    },
    {
        "en":  "demonstrate",
        "pos":  "v",
        "he":  "להדגים / להפגין",
        "def":  "to show clearly how something works or is true",
        "example":  "The teacher will ___ how the experiment works.",
        "practice":  "Thousands gathered to ___ against the new law.",
        "rec":  false,
        "family":  {
                       "en":  "demonstration",
                       "pos":  "n",
                       "he":  "הדגמה / הפגנה"
                   }
    },
    {
        "en":  "design",
        "pos":  "n",
        "he":  "עיצוב",
        "def":  "a plan or drawing showing how something will look or work",
        "example":  "The ___ of the new phone impressed everyone.",
        "practice":  "She studied the ___ of ancient Greek buildings.",
        "rec":  false,
        "family":  {
                       "en":  "designer",
                       "pos":  "n",
                       "he":  "מעצב/ת"
                   }
    },
    {
        "en":  "destruction",
        "pos":  "n",
        "he":  "הרס",
        "def":  "the act of destroying something completely",
        "example":  "The hurricane caused massive ___ along the coast.",
        "practice":  "Years of war left the city in total ___.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "development",
        "pos":  "n",
        "he":  "התפתחות, פיתוח",
        "def":  "the process of growing, improving, or becoming more advanced",
        "example":  "The company invested heavily in product ___.",
        "practice":  "Doctors are following the latest ___ in the treatment.",
        "rec":  false,
        "family":  {
                       "en":  "developing / developed",
                       "pos":  "adj / adj",
                       "he":  "מתפתח / מפותח"
                   }
    },
    {
        "en":  "disagreement",
        "pos":  "n",
        "he":  "אי-הסכמה, חילוקי דעות",
        "def":  "a situation when people have different opinions about something",
        "example":  "There was a ___ about who should lead the project.",
        "practice":  "The siblings had a small ___ over the TV remote.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "disaster",
        "pos":  "n",
        "he":  "אסון",
        "def":  "an event that causes great damage or suffering",
        "example":  "The earthquake was the worst natural ___ in decades.",
        "practice":  "Forgetting his lines on stage felt like a total ___ to him.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "discovery",
        "pos":  "n",
        "he":  "תגלית, גילוי",
        "def":  "something found or learned for the first time",
        "example":  "The scientist\u0027s ___ changed how we understand the disease.",
        "practice":  "Finding the old letters in the attic was a surprising ___.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "dislike",
        "pos":  "n, v",
        "he":  "סלידה, אי-חיבה / לא לחבב",
        "def":  "a feeling of not liking someone or something",
        "example":  "She didn\u0027t hide her ___ for loud music.",
        "practice":  "He couldn\u0027t ___ her, even after the argument.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "do",
        "pos":  "aux v",
        "he":  "כן... (למבע הדגשה)",
        "def":  "used before a verb to add emphasis",
        "example":  "I ___ understand why you\u0027re upset.",
        "practice":  "They ___ enjoy hiking, even in the rain.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "doubt",
        "pos":  "v",
        "he":  "לפקפק, להטיל ספק",
        "def":  "to feel unsure that something is true",
        "example":  "I ___ he will finish the project on time.",
        "practice":  "She began to ___ her own decision after the meeting.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "drop",
        "pos":  "v, n",
        "he":  "לרדת, ליפול / ירידה, טיפה",
        "def":  "to fall or become lower in level or amount",
        "example":  "Temperatures will ___ sharply tonight.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "educate",
        "pos":  "v",
        "he":  "לחנך, ללמד",
        "def":  "to teach people so they gain knowledge or skills",
        "example":  "The program aims to ___ teenagers about healthy eating.",
        "practice":  "Parents should ___ their children about online safety.",
        "rec":  false,
        "family":  {
                       "en":  "educated / educator",
                       "pos":  "adj / n",
                       "he":  "משכיל / מחנך"
                   }
    },
    {
        "en":  "efficient",
        "pos":  "adj",
        "he":  "יעיל",
        "def":  "working well without wasting time or energy",
        "example":  "The new system is far more ___ than the old one.",
        "practice":  "An ___ worker finishes tasks quickly and carefully.",
        "rec":  false,
        "family":  {
                       "en":  "efficiency / efficiently",
                       "pos":  "n / adv",
                       "he":  "יעילות / ביעילות"
                   }
    },
    {
        "en":  "emphasis",
        "pos":  "n",
        "he":  "דגש",
        "def":  "special importance given to something",
        "example":  "The course places great ___ on speaking practice.",
        "practice":  "Her speech put ___ on the need for teamwork.",
        "rec":  false,
        "family":  {
                       "en":  "emphasize",
                       "pos":  "v",
                       "he":  "להדגיש"
                   }
    },
    {
        "en":  "enjoyable",
        "pos":  "adj",
        "he":  "מהנה",
        "def":  "giving pleasure or satisfaction",
        "example":  "We had a really ___ afternoon at the beach.",
        "practice":  "The teacher made the lesson surprisingly ___.",
        "rec":  false,
        "family":  {
                       "en":  "enjoyment",
                       "pos":  "n",
                       "he":  "הנאה"
                   }
    },
    {
        "en":  "essay",
        "pos":  "n",
        "he":  "חיבור, מאמר",
        "def":  "a short piece of writing on a particular subject",
        "example":  "She wrote an ___ about climate change for homework.",
        "practice":  "His ___ on social media won first prize.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "essentially",
        "pos":  "adv",
        "he":  "בעיקרו של דבר, במהותו",
        "def":  "used to describe the basic or most important quality of something",
        "example":  "The two plans are ___ the same.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "even if",
        "pos":  "",
        "he":  "גם אם",
        "def":  "used to say something is true whatever happens",
        "example":  "___ it rains, the match will go on.",
        "practice":  "She\u0027ll go to the party ___ she\u0027s tired.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "even though",
        "pos":  "",
        "he":  "למרות ש, אף על פי ש",
        "def":  "used to introduce a fact that makes the main statement surprising",
        "example":  "___ he studied hard, he failed the test.",
        "practice":  "She walked to school ___ it was raining.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "event",
        "pos":  "n",
        "he":  "אירוע",
        "def":  "something that happens, especially something important",
        "example":  "The wedding was the biggest ___ of the year.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "exactly",
        "pos":  "adv",
        "he":  "בדיוק",
        "def":  "used to emphasize that something is precise or correct",
        "example":  "That\u0027s ___ what I meant.",
        "practice":  "The train arrived ___ on time.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "except that",
        "pos":  "",
        "he":  "פרט לכך ש, חוץ מזה ש",
        "def":  "used to add a fact that limits what was just said",
        "example":  "The plan was perfect, ___ no one had a car.",
        "practice":  "I liked the movie, ___ it was too long.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "exist",
        "pos":  "v",
        "he":  "להתקיים",
        "def":  "to be real or present",
        "example":  "Many rare species still ___ in the rainforest.",
        "practice":  "Does life ___ on other planets?",
        "rec":  false,
        "family":  {
                       "en":  "existence / existing",
                       "pos":  "n / adj",
                       "he":  "קיום / קיים"
                   }
    },
    {
        "en":  "extraordinary",
        "pos":  "adj",
        "he":  "יוצא דופן, מדהים",
        "def":  "very unusual or remarkable",
        "example":  "She showed ___ courage during the crisis.",
        "practice":  "The view from the mountain was absolutely ___.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "feature",
        "pos":  "n",
        "he":  "מאפיין, תכונה",
        "def":  "a typical or important part of something",
        "example":  "The new phone has an amazing camera ___.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "feedback",
        "pos":  "n",
        "he":  "משוב",
        "def":  "comments about how good or useful something is",
        "example":  "The teacher gave helpful ___ on my essay.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "figure",
        "pos":  "n",
        "he":  "דמות, מספר / להבין",
        "def":  "a number, a person\u0027s shape, or (figure out) to understand",
        "example":  "He tried to ___ out why the machine stopped working.",
        "rec":  true,
        "family":  {
                       "en":  "figure out sth",
                       "pos":  "",
                       "he":  "להבין, לפתור"
                   }
    },
    {
        "en":  "financial",
        "pos":  "adj",
        "he":  "כספי, פיננסי",
        "def":  "relating to money",
        "example":  "The family faced serious ___ problems last year.",
        "rec":  true,
        "family":  {
                       "en":  "finance",
                       "pos":  "n, v",
                       "he":  "כספים, מימון / לממן"
                   }
    },
    {
        "en":  "finding/findings",
        "pos":  "n",
        "he":  "ממצא, ממצאים",
        "def":  "information discovered as a result of research",
        "example":  "The study\u0027s ___ surprised many scientists.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "flexible",
        "pos":  "adj",
        "he":  "גמיש",
        "def":  "able to change or adapt easily",
        "example":  "My new job has ___ working hours.",
        "practice":  "Yoga helps keep your body ___.",
        "rec":  false,
        "family":  {
                       "en":  "flexibility",
                       "pos":  "n",
                       "he":  "גמישות"
                   }
    },
    {
        "en":  "flood",
        "pos":  "v, n",
        "he":  "להציף / שיטפון",
        "def":  "to cover with water, or a large amount of water covering land",
        "example":  "Heavy rain caused the river to ___ the village.",
        "practice":  "The ___ destroyed dozens of homes along the river.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "flu",
        "pos":  "n",
        "he":  "שפעת",
        "def":  "a common illness that causes fever and body aches",
        "example":  "He stayed home with the ___ all week.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "focus on/upon sb/sth",
        "pos":  "",
        "he":  "להתמקד ב-",
        "def":  "to give most of your attention to one thing",
        "example":  "Let\u0027s ___ on finishing the project first.",
        "practice":  "Documentaries often ___ on wildlife in Africa.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "focus",
        "pos":  "n",
        "he":  "מיקוד, התמקדות",
        "def":  "special attention given to one thing",
        "example":  "The meeting\u0027s main ___ was next year\u0027s budget.",
        "practice":  "Her ___ in training is speed, not strength.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "frequent",
        "pos":  "adj",
        "he":  "תדיר, שכיח",
        "def":  "happening often",
        "example":  "He is a ___ visitor to the museum.",
        "practice":  "___ breaks can help you study more effectively.",
        "rec":  false,
        "family":  {
                       "en":  "frequency",
                       "pos":  "n",
                       "he":  "תדירות"
                   }
    },
    {
        "en":  "fresh",
        "pos":  "adj",
        "he":  "טרי, רענן",
        "def":  "newly made or very recent",
        "example":  "We bought ___ vegetables at the market.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "frighten",
        "pos":  "v",
        "he":  "להפחיד",
        "def":  "to make someone feel afraid",
        "example":  "The loud thunder began to ___ the dog.",
        "practice":  "Horror movies ___ her, but she still loves them.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "from",
        "pos":  "prep",
        "he":  "מ-, מאת",
        "def":  "used to show the starting point of something",
        "example":  "She traveled ___ Haifa to Eilat by bus.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "gain",
        "pos":  "v, n",
        "he":  "להשיג, לצבור / רווח",
        "def":  "to obtain or get more of something",
        "example":  "He hopes to ___ more experience this summer.",
        "practice":  "The company reported a small ___ in profits.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "generate",
        "pos":  "v",
        "he":  "לייצר, ליצור",
        "def":  "to produce or cause something to exist",
        "example":  "Solar panels ___ clean electricity.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "guidance",
        "pos":  "n",
        "he":  "הכוונה",
        "def":  "help or advice about how to do something",
        "example":  "Students received career ___ from their teacher.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "hopefully",
        "pos":  "adv",
        "he":  "אני מקווה ש, בתקווה",
        "def":  "used to say that you hope something will happen",
        "example":  "___, the weather will be nice for the trip.",
        "practice":  "She finished the exam and, ___, passed.",
        "rec":  false,
        "family":  {
                       "en":  "hopeful",
                       "pos":  "adj",
                       "he":  "מקווה, אופטימי"
                   }
    },
    {
        "en":  "ideal",
        "pos":  "adj",
        "he":  "אידיאלי, מושלם",
        "def":  "the best possible for a particular situation",
        "example":  "This quiet beach is the ___ place to relax.",
        "practice":  "Summer is the ___ season for traveling in Europe.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "illness",
        "pos":  "n",
        "he":  "מחלה",
        "def":  "a disease or period of bad health",
        "example":  "She missed school because of a sudden ___.",
        "practice":  "Mental ___ is often misunderstood by the public.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "illustrate",
        "pos":  "v",
        "he":  "להמחיש, לאייר",
        "def":  "to make something clear by using examples or pictures",
        "example":  "The chart helps ___ the company\u0027s growth.",
        "practice":  "She used a real story to ___ her point.",
        "rec":  false,
        "family":  {
                       "en":  "illustration",
                       "pos":  "n",
                       "he":  "איור, המחשה"
                   }
    },
    {
        "en":  "image",
        "pos":  "n",
        "he":  "תמונה, דימוי",
        "def":  "a picture, or the way someone is seen by others",
        "example":  "The satellite captured a clear ___ of the storm.",
        "practice":  "The company worked hard to improve its public ___.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "in",
        "pos":  "prep",
        "he":  "ב-, במצב של",
        "def":  "used to show a state, condition, or feeling",
        "example":  "She was ___ shock after hearing the news.",
        "practice":  "He has been ___ love with music since childhood.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "in … terms / in terms of sth",
        "pos":  "",
        "he":  "מבחינת, במונחים של",
        "def":  "used to show which part of a subject you are talking about",
        "example":  "___ terms of price, this phone is the best choice.",
        "practice":  "The trip was great, ___ terms of the food at least.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "in actual fact",
        "pos":  "",
        "he":  "למעשה, האמת היא ש",
        "def":  "used to say what is really true",
        "example":  "___, the test was easier than we expected.",
        "practice":  "He seemed calm, but ___ he was terrified.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "in connection with sth",
        "pos":  "",
        "he":  "בקשר ל-, בהקשר ל-",
        "def":  "relating to a particular subject or situation",
        "example":  "Police questioned him ___ connection with the robbery.",
        "practice":  "She wrote an email ___ connection with the job application.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "in that case",
        "pos":  "",
        "he":  "אם כך, במקרה כזה",
        "def":  "used to refer to a situation just mentioned",
        "example":  "You\u0027re tired? ___, let\u0027s rest for a while.",
        "practice":  "He\u0027s not coming? ___, we\u0027ll start without him.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "in the meantime",
        "pos":  "",
        "he":  "בינתיים",
        "def":  "during the period between two events",
        "example":  "Dinner will be ready soon; ___, set the table.",
        "practice":  "The bus was late, so ___ we grabbed a coffee.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "initial",
        "pos":  "adj",
        "he":  "ראשוני, התחלתי",
        "def":  "happening at the beginning",
        "example":  "Her ___ reaction to the plan was positive.",
        "rec":  true,
        "family":  {
                       "en":  "initially",
                       "pos":  "adv",
                       "he":  "בתחילה"
                   }
    },
    {
        "en":  "instruction",
        "pos":  "n",
        "he":  "הוראה, הנחיה",
        "def":  "information telling someone how to do something",
        "example":  "Please read the ___ before using the device.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "intelligence",
        "pos":  "n",
        "he":  "אינטליגנציה, תבונה",
        "def":  "the ability to learn, understand, and think",
        "example":  "Dolphins are known for their high ___.",
        "practice":  "The test measures several kinds of ___.",
        "rec":  false,
        "family":  {
                       "en":  "intelligent",
                       "pos":  "adj",
                       "he":  "אינטליגנטי, חכם"
                   }
    },
    {
        "en":  "interest",
        "pos":  "n, v",
        "he":  "עניין / לעניין",
        "def":  "a feeling of wanting to know or learn about something",
        "example":  "She has always shown ___ in astronomy.",
        "practice":  "The teacher tried to ___ the students in history.",
        "rec":  false,
        "family":  {
                       "en":  "interested in sth",
                       "pos":  "",
                       "he":  "מעוניין ב-"
                   }
    },
    {
        "en":  "introduce",
        "pos":  "v",
        "he":  "להציג, להכניס (דבר חדש)",
        "def":  "to bring something into use for the first time",
        "example":  "The school plans to ___ a new uniform policy.",
        "practice":  "The teacher will ___ the topic before the lesson.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "invest",
        "pos":  "v",
        "he":  "להשקיע",
        "def":  "to put money into something to make a profit",
        "example":  "Many people ___ in the stock market.",
        "practice":  "The city will ___ in new public parks.",
        "rec":  false,
        "family":  {
                       "en":  "investor / investment",
                       "pos":  "n / n",
                       "he":  "משקיע / השקעה"
                   }
    },
    {
        "en":  "investigate",
        "pos":  "v",
        "he":  "לחקור",
        "def":  "to examine something carefully to find out the truth",
        "example":  "Police are working to ___ the accident.",
        "practice":  "Scientists will ___ the cause of the illness.",
        "rec":  false,
        "family":  {
                       "en":  "investigation / investigator",
                       "pos":  "n / n",
                       "he":  "חקירה / חוקר"
                   }
    },
    {
        "en":  "just about",
        "pos":  "",
        "he":  "כמעט, בערך",
        "def":  "almost, or very close to",
        "example":  "We\u0027ve ___ finished packing for the trip.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "just about",
        "pos":  "",
        "he":  "כמעט, בערך",
        "def":  "almost, or very close to",
        "example":  "The movie is ___ to start.",
        "practice":  "She has ___ enough money saved for the trip.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "keep on doing sth",
        "pos":  "",
        "he":  "להמשיך לעשות משהו",
        "def":  "to continue doing something, often repeatedly",
        "example":  "He decided to ___ practicing every day.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "kind of",
        "pos":  "",
        "he":  "סוג של, במידה מסוימת",
        "def":  "used to mean \u0027somewhat\u0027 or \u0027in a way\u0027",
        "example":  "The ending was ___ sad, but also hopeful.",
        "practice":  "I\u0027m ___ nervous about the interview tomorrow.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "knowledge",
        "pos":  "n",
        "he":  "ידע",
        "def":  "information and understanding gained through learning or experience",
        "example":  "He has deep ___ of ancient history.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "lack",
        "pos":  "v",
        "he":  "לחסר ב-, להיות חסר",
        "def":  "to not have something, or not have enough of it",
        "example":  "The team seemed to ___ confidence in the final match.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "landscape",
        "pos":  "n",
        "he":  "נוף",
        "def":  "the appearance of an area of land",
        "example":  "The painting showed a beautiful mountain ___.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "likely",
        "pos":  "adj, adv",
        "he":  "סביר, צפוי",
        "def":  "probable, or expected to happen",
        "example":  "It\u0027s ___ to rain later this evening.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "limited",
        "pos":  "adj",
        "he":  "מוגבל",
        "def":  "restricted in amount, size, or scope",
        "example":  "Tickets for the concert are ___.",
        "practice":  "She has ___ experience with computers.",
        "rec":  false,
        "family":  {
                       "en":  "limitation",
                       "pos":  "n",
                       "he":  "מגבלה"
                   }
    },
    {
        "en":  "little",
        "pos":  "adj",
        "he":  "מעט, קטן",
        "def":  "small in amount or size",
        "example":  "We have very ___ time left before the test.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "look at sth",
        "pos":  "",
        "he":  "להסתכל על, לבחון",
        "def":  "to examine or consider something",
        "example":  "Let\u0027s ___ at the results more closely.",
        "practice":  "The doctor wants to ___ at the X-ray first.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "low",
        "pos":  "adv",
        "he":  "נמוך, ברמה נמוכה",
        "def":  "at or to a small amount or level",
        "example":  "The plane flew ___ over the fields.",
        "practice":  "Prices in that store are surprisingly ___.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "material",
        "pos":  "n",
        "he":  "חומר, חומרים",
        "def":  "information or objects used for a purpose, such as study",
        "example":  "The teacher gave us extra ___ for the exam.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "mean",
        "pos":  "v",
        "he":  "להתכוון, לשמש משמעות",
        "def":  "to have a particular meaning or intention",
        "example":  "What do these strange symbols ___?",
        "rec":  true,
        "family":  {
                       "en":  "meaning",
                       "pos":  "n",
                       "he":  "משמעות"
                   }
    },
    {
        "en":  "means",
        "pos":  "n",
        "he":  "אמצעי, דרך",
        "def":  "a method or way of doing something",
        "example":  "Riding a bike is a cheap ___ of transport.",
        "practice":  "They found a ___ to reduce the factory\u0027s waste.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "measure",
        "pos":  "n",
        "he":  "אמצעי, צעד",
        "def":  "an action taken to achieve a particular result",
        "example":  "The school introduced new safety ___ after the accident.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "mention",
        "pos":  "v, n",
        "he":  "להזכיר / אזכור",
        "def":  "to speak or write about something briefly",
        "example":  "She didn\u0027t ___ the exam during dinner.",
        "practice":  "The article made no ___ of the new policy.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "miss",
        "pos":  "v",
        "he":  "לפספס, להחמיץ",
        "def":  "to fail to do, see, hit, or catch something",
        "example":  "He didn\u0027t want to ___ the school trip.",
        "practice":  "She tried not to ___ any important details.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "misunderstand",
        "pos":  "v",
        "he":  "להבין לא נכון",
        "def":  "to fail to understand someone or something correctly",
        "example":  "Please don\u0027t ___ my intentions; I was only trying to help.",
        "practice":  "She often seems to ___ written instructions.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "more or less",
        "pos":  "",
        "he":  "פחות או יותר",
        "def":  "approximately; almost completely",
        "example":  "The project is ___ finished now.",
        "practice":  "We paid ___ the same price for both tickets.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "must",
        "pos":  "v",
        "he":  "חייב / בטח ש (היגיון)",
        "def":  "used to show something is necessary, or very probably true",
        "example":  "You ___ be tired after such a long trip.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "naturally",
        "pos":  "adv",
        "he":  "באופן טבעי, כמובן",
        "def":  "as would be expected; in a natural way",
        "example":  "___, everyone was excited about the holiday.",
        "practice":  "She speaks French ___, without even trying.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "nature",
        "pos":  "n",
        "he":  "טבע, אופי",
        "def":  "the basic character of a person or thing, or the natural world",
        "example":  "Curiosity is part of human ___.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "necessarily",
        "pos":  "adv",
        "he":  "בהכרח",
        "def":  "used to say something is not always true or required",
        "example":  "Expensive doesn\u0027t ___ mean better quality.",
        "practice":  "Winning the match doesn\u0027t ___ guarantee the championship.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "nevertheless",
        "pos":  "adv",
        "he":  "אף על פי כן, ובכל זאת",
        "def":  "despite what was just said",
        "example":  "It was raining; ___, they went for a walk.",
        "practice":  "The test was hard; ___, most students passed.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "not at all",
        "pos":  "",
        "he":  "בכלל לא",
        "def":  "used to emphasize a strong \u0027no\u0027",
        "example":  "I\u0027m ___ worried about the results.",
        "practice":  "\"Did the hike tire you out?\" \"___, it was easy.\"",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "not only",
        "pos":  "",
        "he":  "לא רק",
        "def":  "used to introduce the first of two facts, often with \u0027but also\u0027",
        "example":  "She is ___ smart but also very kind.",
        "practice":  "___ did he win the race, he broke the record.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "notice",
        "pos":  "n",
        "he":  "הודעה, התראה",
        "def":  "a written or spoken announcement, often warning of something",
        "example":  "The school posted a ___ about the trip cancellation.",
        "practice":  "He quit his job without giving any ___.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "objective",
        "pos":  "n",
        "he":  "מטרה, יעד",
        "def":  "something you plan to achieve",
        "example":  "Our main ___ this year is to improve grades.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "occasional",
        "pos":  "adj",
        "he":  "מזדמן, מדי פעם",
        "def":  "happening sometimes, but not often or regularly",
        "example":  "He enjoys an ___ cup of coffee in the morning.",
        "practice":  "We get ___ rain showers even in the summer here.",
        "rec":  false,
        "family":  {
                       "en":  "occasionally",
                       "pos":  "adv",
                       "he":  "מדי פעם, לעיתים"
                   }
    },
    {
        "en":  "official",
        "pos":  "adj",
        "he":  "רשמי",
        "def":  "approved by someone in authority, or relating to a position of authority",
        "example":  "The results became ___ after the final count.",
        "practice":  "She received an ___ letter from the ministry.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "on the one hand ... on the other hand",
        "pos":  "",
        "he":  "מצד אחד... מצד שני",
        "def":  "used to show two different or opposite sides of an argument",
        "example":  "___ hand, it\u0027s expensive, but on the other hand, it saves time.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "once",
        "pos":  "conj",
        "he":  "ברגע ש, כאשר",
        "def":  "as soon as, or after something happens",
        "example":  "___ you finish your homework, you can go out.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "others",
        "pos":  "pron",
        "he":  "אחרים",
        "def":  "other people in general",
        "example":  "She always thinks about ___ before herself.",
        "practice":  "Some students finished early; ___ needed more time.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "otherwise",
        "pos":  "conj, adv",
        "he":  "אחרת",
        "def":  "if not; under other circumstances",
        "example":  "Wear a coat, ___ you\u0027ll get cold.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "out of date",
        "pos":  "",
        "he":  "מיושן, לא עדכני",
        "def":  "no longer useful, valid, or modern",
        "example":  "This textbook is ___ and needs replacing.",
        "rec":  true,
        "family":  {
                       "en":  "old-fashioned",
                       "pos":  "",
                       "he":  "מיושן, שמרני"
                   }
    },
    {
        "en":  "participate",
        "pos":  "v",
        "he":  "להשתתף",
        "def":  "to take part in an activity or event",
        "example":  "All students must ___ in the science fair.",
        "practice":  "She was happy to ___ in the charity run.",
        "rec":  false,
        "family":  {
                       "en":  "participant / participation",
                       "pos":  "n / n",
                       "he":  "משתתף / השתתפות"
                   }
    },
    {
        "en":  "particular",
        "pos":  "adj",
        "he":  "מסוים, ספציפי",
        "def":  "specific, or distinct from others",
        "example":  "Is there a ___ reason you chose this topic?",
        "practice":  "He was ___ about keeping his desk neat and clean.",
        "rec":  false,
        "family":  {
                       "en":  "particularly",
                       "pos":  "adv",
                       "he":  "בפרט, במיוחד"
                   }
    },
    {
        "en":  "past",
        "pos":  "adj",
        "he":  "קודם, שעבר",
        "def":  "belonging to an earlier time",
        "example":  "___ experience is not required for this job.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "perform",
        "pos":  "v",
        "he":  "לבצע, להופיע (על במה)",
        "def":  "to do an action, or to entertain an audience",
        "example":  "The band will ___ live at the festival tonight.",
        "rec":  true,
        "family":  {
                       "en":  "performance",
                       "pos":  "n",
                       "he":  "ביצוע, הופעה"
                   }
    },
    {
        "en":  "personality",
        "pos":  "n",
        "he":  "אישיות",
        "def":  "the qualities that make a person different from others",
        "example":  "She has a warm and friendly ___.",
        "practice":  "His strong ___ makes him a natural leader.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "personally",
        "pos":  "adv",
        "he":  "באופן אישי",
        "def":  "used to give your own opinion",
        "example":  "___, I think the movie was overrated.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "planet",
        "pos":  "n",
        "he":  "כוכב לכת",
        "def":  "a large object in space that moves around a star",
        "example":  "Mars is often called the red ___.",
        "practice":  "We must protect our ___ for future generations.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "planning",
        "pos":  "n",
        "he":  "תכנון",
        "def":  "the process of deciding how to do something in advance",
        "example":  "Good ___ made the trip run smoothly.",
        "practice":  "City ___ should include more green spaces.",
        "rec":  false,
        "family":  {
                       "en":  "planned",
                       "pos":  "adj",
                       "he":  "מתוכנן"
                   }
    },
    {
        "en":  "plant",
        "pos":  "v",
        "he":  "לשתול",
        "def":  "to put a seed or young plant into the ground to grow",
        "example":  "They ___ trees every year on Tu BiShvat.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "point of view",
        "pos":  "",
        "he":  "נקודת מבט",
        "def":  "a way of thinking about a situation",
        "example":  "From her ___, the decision made perfect sense.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "policy",
        "pos":  "n",
        "he":  "מדיניות",
        "def":  "a plan of action agreed by a government or organization",
        "example":  "The school changed its ___ on phone use.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "pollution",
        "pos":  "n",
        "he":  "זיהום",
        "def":  "harmful substances that damage air, water, or land",
        "example":  "Air ___ in big cities is a growing concern.",
        "rec":  true,
        "family":  {
                       "en":  "pollute",
                       "pos":  "v",
                       "he":  "לזהם"
                   }
    },
    {
        "en":  "popular",
        "pos":  "adj",
        "he":  "פופולרי, אהוד",
        "def":  "liked or supported by many people",
        "example":  "Basketball is extremely ___ among teenagers.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "population",
        "pos":  "n",
        "he":  "אוכלוסייה",
        "def":  "all the people living in a particular area",
        "example":  "The city\u0027s ___ has doubled in ten years.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "prevent",
        "pos":  "v",
        "he":  "למנוע",
        "def":  "to stop something from happening",
        "example":  "Wearing a helmet can ___ serious injury.",
        "rec":  true,
        "family":  {
                       "en":  "prevention",
                       "pos":  "n",
                       "he":  "מניעה"
                   }
    },
    {
        "en":  "priority",
        "pos":  "n",
        "he":  "עדיפות",
        "def":  "something that is considered more important than other things",
        "example":  "Safety is our top ___ during the trip.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "private",
        "pos":  "adj",
        "he":  "פרטי",
        "def":  "belonging to a person or company, not the government",
        "example":  "She attends a ___ school in Tel Aviv.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "probable",
        "pos":  "adj",
        "he":  "סביר, צפוי",
        "def":  "likely to happen or be true",
        "example":  "It\u0027s ___ that the game will be postponed due to rain.",
        "practice":  "A ___ cause of the delay was the traffic.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "produce",
        "pos":  "v",
        "he":  "לייצר, להפיק",
        "def":  "to make or create something, including films or shows",
        "example":  "The factory can ___ thousands of items a day.",
        "rec":  true,
        "family":  {
                       "en":  "producer",
                       "pos":  "n",
                       "he":  "מפיק/ה"
                   }
    },
    {
        "en":  "profession",
        "pos":  "n",
        "he":  "מקצוע",
        "def":  "a job that requires special training or skill",
        "example":  "Medicine is a highly respected ___.",
        "practice":  "She chose teaching as her ___ after college.",
        "rec":  false,
        "family":  {
                       "en":  "professional",
                       "pos":  "adj",
                       "he":  "מקצועי"
                   }
    },
    {
        "en":  "professor",
        "pos":  "n",
        "he":  "פרופסור",
        "def":  "a senior teacher at a university",
        "example":  "The ___ gave an interesting lecture on history.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "proof",
        "pos":  "n",
        "he":  "הוכחה",
        "def":  "evidence that shows something is true",
        "example":  "The photo was ___ that he had been there.",
        "practice":  "Scientists need strong ___ before accepting a new theory.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "proposed",
        "pos":  "adj",
        "he":  "מוצע",
        "def":  "suggested as a plan or idea",
        "example":  "The ___ changes will be discussed at the meeting.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "protest",
        "pos":  "n, v",
        "he":  "מחאה / למחות",
        "def":  "a strong statement or action showing disagreement",
        "example":  "Students organized a ___ against the new rule.",
        "practice":  "Workers decided to ___ against the unfair conditions.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "provided (that)",
        "pos":  "",
        "he":  "בתנאי ש",
        "def":  "used to say something will happen only if a condition is met",
        "example":  "You can go to the party, ___ you finish your homework.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "psychology",
        "pos":  "n",
        "he":  "פסיכולוגיה",
        "def":  "the scientific study of the mind and behavior",
        "example":  "She plans to study ___ at university.",
        "practice":  "Understanding ___ can help teachers manage their classrooms.",
        "rec":  false,
        "family":  {
                       "en":  "psychological / psychologist",
                       "pos":  "adj / n",
                       "he":  "פסיכולוגי / פסיכולוג/ית"
                   }
    },
    {
        "en":  "public",
        "pos":  "adj",
        "he":  "ציבורי",
        "def":  "relating to or open to people in general",
        "example":  "The library is a ___ building, free for everyone.",
        "rec":  true,
        "family":  {
                       "en":  "publicly",
                       "pos":  "adv",
                       "he":  "בפומבי, בציבור"
                   }
    },
    {
        "en":  "purpose",
        "pos":  "n",
        "he":  "מטרה, תכלית",
        "def":  "the reason for which something is done",
        "example":  "The ___ of the meeting was to plan the trip.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "quality",
        "pos":  "n",
        "he":  "איכות, תכונה",
        "def":  "how good something is, or a particular feature",
        "example":  "The hotel is known for its high ___ service.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "question",
        "pos":  "v",
        "he":  "לחקור, לתשאל",
        "def":  "to ask someone questions, or to express doubt about something",
        "example":  "The police began to ___ the witness.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "question",
        "pos":  "n",
        "he":  "שאלה, סוגיה",
        "def":  "an issue or problem to be discussed or solved",
        "example":  "Climate change raises a serious ___ for world leaders.",
        "practice":  "The real ___ is whether we have enough time.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "questionnaire",
        "pos":  "n",
        "he":  "שאלון",
        "def":  "a set of written questions used to collect information",
        "example":  "Please fill out this ___ about your shopping habits.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "react",
        "pos":  "v",
        "he":  "להגיב",
        "def":  "to behave or respond in a particular way because of something",
        "example":  "How did she ___ when she heard the news?",
        "practice":  "The audience began to ___ loudly to the speech.",
        "rec":  false,
        "family":  {
                       "en":  "reaction",
                       "pos":  "n",
                       "he":  "תגובה"
                   }
    },
    {
        "en":  "reasonable",
        "pos":  "adj",
        "he":  "סביר",
        "def":  "fair and sensible, or not too expensive",
        "example":  "The hotel offered ___ prices for the holiday season.",
        "rec":  true,
        "family":  {
                       "en":  "reasonably",
                       "pos":  "adv",
                       "he":  "באופן סביר, למדי"
                   }
    },
    {
        "en":  "recommend",
        "pos":  "v",
        "he":  "להמליץ",
        "def":  "to suggest that someone or something is good or suitable",
        "example":  "Can you ___ a good restaurant nearby?",
        "rec":  true,
        "family":  {
                       "en":  "recommendation",
                       "pos":  "n",
                       "he":  "המלצה"
                   }
    },
    {
        "en":  "recycle",
        "pos":  "v",
        "he":  "למחזר",
        "def":  "to treat used materials so they can be used again",
        "example":  "We ___ paper and plastic at home every week.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "regard",
        "pos":  "v, n",
        "he":  "להתייחס ל-, לראות כ- / התחשבות",
        "def":  "to think of someone or something in a particular way",
        "example":  "Many ___ her as the best player on the team.",
        "practice":  "He showed little ___ for other people\u0027s feelings.",
        "rec":  false,
        "family":  {
                       "en":  "regardless / regarding",
                       "pos":  "adv / prep",
                       "he":  "ללא קשר / בנוגע ל-"
                   }
    },
    {
        "en":  "region",
        "pos":  "n",
        "he":  "אזור",
        "def":  "a particular area of a country or the world",
        "example":  "This ___ is famous for its wine production.",
        "practice":  "Heavy snow is expected in the northern ___ this week.",
        "rec":  false,
        "family":  {
                       "en":  "regional",
                       "pos":  "adj",
                       "he":  "אזורי"
                   }
    },
    {
        "en":  "regular",
        "pos":  "adj",
        "he":  "קבוע, רגיל",
        "def":  "happening often with the same amount of time between each occurrence",
        "example":  "She goes for a ___ run every morning.",
        "practice":  "___ checkups can help detect problems early.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "relevant",
        "pos":  "adj",
        "he":  "רלוונטי, רלבנטי",
        "def":  "closely connected to the subject being discussed",
        "example":  "Please only include information ___ to the topic.",
        "practice":  "Her experience is highly ___ to this job.",
        "rec":  false,
        "family":  {
                       "en":  "relevance",
                       "pos":  "n",
                       "he":  "רלוונטיות"
                   }
    },
    {
        "en":  "reliable",
        "pos":  "adj",
        "he":  "אמין",
        "def":  "able to be trusted to do what is expected",
        "example":  "He is a ___ friend who always keeps his promises.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "rely on/upon sb/sth",
        "pos":  "",
        "he":  "להסתמך על, לסמוך על",
        "def":  "to trust or depend on someone or something",
        "example":  "You can always ___ on her to help.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "request",
        "pos":  "n, v",
        "he":  "בקשה / לבקש",
        "def":  "to ask for something politely or formally",
        "example":  "She made a ___ for extra time on the exam.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "research",
        "pos":  "v, n",
        "he":  "לחקור / מחקר",
        "def":  "a careful study to discover new information",
        "example":  "Scientists continue to ___ new treatments for cancer.",
        "practice":  "Her ___ focuses on ocean pollution.",
        "rec":  false,
        "family":  {
                       "en":  "researcher",
                       "pos":  "n",
                       "he":  "חוקר/ת"
                   }
    },
    {
        "en":  "result",
        "pos":  "n",
        "he":  "תוצאה",
        "def":  "something that happens because of something else",
        "example":  "The exam ___ will be published next week.",
        "practice":  "The team celebrated the ___ of the final match.",
        "rec":  false,
        "family":  {
                       "en":  "resulting",
                       "pos":  "adj",
                       "he":  "נובע, כתוצאה מכך"
                   }
    },
    {
        "en":  "review",
        "pos":  "v, n",
        "he":  "לבקר, לסקור / ביקורת, סקירה",
        "def":  "to examine something and give an opinion about it",
        "example":  "The critic will ___ the new film this week.",
        "practice":  "She read a positive ___ of the restaurant online.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "revise",
        "pos":  "v",
        "he":  "לתקן, לחזור על חומר",
        "def":  "to change something to improve it, or to study again before an exam",
        "example":  "Please ___ your essay before submitting it.",
        "practice":  "Students should ___ all the material before the final test.",
        "rec":  false,
        "family":  {
                       "en":  "revision",
                       "pos":  "n",
                       "he":  "תיקון, חזרה על חומר"
                   }
    },
    {
        "en":  "risk",
        "pos":  "n, v",
        "he":  "סיכון / להסתכן ב-",
        "def":  "the possibility of something bad happening",
        "example":  "Climbing without safety gear is a serious ___.",
        "practice":  "He decided to ___ his savings on the new business.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "run out of",
        "pos":  "",
        "he":  "להיגמר ל-, לאזול",
        "def":  "to have no more of something left",
        "example":  "We\u0027re about to ___ out of milk, so let\u0027s buy some.",
        "practice":  "They don\u0027t want to ___ out of time before the exam.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "rural",
        "pos":  "adj",
        "he":  "כפרי",
        "def":  "relating to the countryside, not cities",
        "example":  "They grew up in a quiet ___ village.",
        "practice":  "___ areas often have fewer medical services than cities.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "salary",
        "pos":  "n",
        "he":  "משכורת",
        "def":  "money paid regularly for doing a job",
        "example":  "She received a raise in her monthly ___.",
        "practice":  "Teachers deserve a higher ___ for their hard work.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "sample",
        "pos":  "n",
        "he":  "דוגמה, מדגם",
        "def":  "a small part of something used to show what the rest is like",
        "example":  "The doctor took a blood ___ for testing.",
        "practice":  "We received a free ___ of the new shampoo.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "seldom",
        "pos":  "adv",
        "he":  "לעיתים רחוקות",
        "def":  "not often; rarely",
        "example":  "He ___ eats fast food.",
        "practice":  "She ___ complains, even when things go wrong.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "sense",
        "pos":  "n",
        "he":  "חוש, תחושה, היגיון",
        "def":  "a feeling, or the ability to understand and judge well",
        "example":  "He has a great ___ of humor.",
        "practice":  "It makes ___ to leave early and avoid traffic.",
        "rec":  false,
        "family":  {
                       "en":  "sensible",
                       "pos":  "adj",
                       "he":  "הגיוני, שקול"
                   }
    },
    {
        "en":  "set up sth or set sth up",
        "pos":  "",
        "he":  "להקים, לארגן",
        "def":  "to start something, such as a business or a system",
        "example":  "They decided to ___ up a small company together.",
        "rec":  true,
        "family":  {
                       "en":  "set out sth, set sth out",
                       "pos":  "",
                       "he":  "להציג, לפרט (תוכנית וכדומה)"
                   }
    },
    {
        "en":  "significant",
        "pos":  "adj",
        "he":  "משמעותי",
        "def":  "large or important enough to be noticed",
        "example":  "There was a ___ improvement in her grades this year.",
        "practice":  "The new law made a ___ difference to small businesses.",
        "rec":  false,
        "family":  {
                       "en":  "significantly / significance",
                       "pos":  "adv / n",
                       "he":  "באופן משמעותי / משמעות"
                   }
    },
    {
        "en":  "skilled",
        "pos":  "adj",
        "he":  "מיומן",
        "def":  "having the ability to do something well, usually through training",
        "example":  "The clinic only hires ___ nurses.",
        "rec":  true,
        "family":  {
                       "en":  "skillful",
                       "pos":  "",
                       "he":  "מיומן, מוכשר"
                   }
    },
    {
        "en":  "slight",
        "pos":  "adj",
        "he":  "קל, קטן",
        "def":  "small in degree or amount",
        "example":  "There\u0027s been a ___ change in the schedule.",
        "rec":  true,
        "family":  {
                       "en":  "slightly",
                       "pos":  "adv",
                       "he":  "במקצת, מעט"
                   }
    },
    {
        "en":  "specialist",
        "pos":  "n",
        "he":  "מומחה",
        "def":  "a person with special knowledge or skill in a particular area",
        "example":  "She saw a ___ about her knee injury.",
        "practice":  "He became a ___ in renewable energy technology.",
        "rec":  false,
        "family":  {
                       "en":  "specialize",
                       "pos":  "v",
                       "he":  "להתמחות"
                   }
    },
    {
        "en":  "specific",
        "pos":  "adj",
        "he":  "ספציפי, מסוים",
        "def":  "clearly stated or particular, not general",
        "example":  "Can you give a more ___ example?",
        "rec":  true,
        "family":  {
                       "en":  "specifically / specify",
                       "pos":  "adv / v",
                       "he":  "באופן ספציפי / לציין במדויק"
                   }
    },
    {
        "en":  "still",
        "pos":  "adv",
        "he":  "בכל זאת, עדיין",
        "def":  "despite that; nevertheless",
        "example":  "It was raining, but they ___ went out for a walk.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "structure",
        "pos":  "n",
        "he":  "מבנה",
        "def":  "the way the parts of something are arranged or organized",
        "example":  "The ___ of the essay was clear and logical.",
        "practice":  "Engineers checked the ___ of the old bridge.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "study",
        "pos":  "v, n",
        "he":  "ללמוד, לחקור / לימוד, מחקר",
        "def":  "to spend time learning about a subject, or a piece of research",
        "example":  "She plans to ___ medicine at university.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "supposed",
        "pos":  "adj",
        "he":  "אמור",
        "def":  "expected or required to do something",
        "example":  "You were ___ to call me yesterday.",
        "practice":  "The train is ___ to arrive at noon.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "surface",
        "pos":  "n",
        "he":  "משטח, פני השטח",
        "def":  "the outside or top layer of something",
        "example":  "The lake\u0027s ___ was completely frozen.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "take advantage of sth",
        "pos":  "",
        "he":  "לנצל הזדמנות",
        "def":  "to make good use of a situation or opportunity",
        "example":  "She decided to ___ advantage of the sale.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "thanks to sb/sth",
        "pos":  "",
        "he":  "הודות ל-",
        "def":  "because of someone or something, usually with a positive result",
        "example":  "___ to her hard work, the project succeeded.",
        "practice":  "We arrived early, ___ to the light traffic.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "theory",
        "pos":  "n",
        "he":  "תיאוריה",
        "def":  "an idea that explains how or why something happens",
        "example":  "Darwin\u0027s ___ changed how we understand evolution.",
        "rec":  true,
        "family":  {
                       "en":  "theoretical",
                       "pos":  "adj",
                       "he":  "תיאורטי"
                   }
    },
    {
        "en":  "throw away/out sth or throw sth away/out",
        "pos":  "",
        "he":  "לזרוק",
        "def":  "to get rid of something you no longer want",
        "example":  "Don\u0027t ___ away those old photos; they\u0027re valuable.",
        "practice":  "He decided to ___ out the broken chair.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "transport",
        "pos":  "n, v",
        "he":  "תחבורה / להסיע",
        "def":  "a system or vehicle for moving people or goods",
        "example":  "Public ___ in the city has improved a lot.",
        "rec":  true,
        "family":  {
                       "en":  "transportation",
                       "pos":  "n",
                       "he":  "תחבורה"
                   }
    },
    {
        "en":  "trash",
        "pos":  "n",
        "he":  "זבל, אשפה",
        "def":  "waste material that is thrown away",
        "example":  "Please take out the ___ before you leave.",
        "practice":  "Volunteers collected ___ from the beach all morning.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "treatment",
        "pos":  "n",
        "he":  "טיפול, יחס",
        "def":  "medical care, or the way someone is dealt with",
        "example":  "The hospital offers a new ___ for the disease.",
        "practice":  "The workers complained about unfair ___ from management.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "unfortunately",
        "pos":  "adv",
        "he":  "לצערי, למרבה הצער",
        "def":  "used to say that something bad or disappointing has happened",
        "example":  "___, the concert was cancelled due to rain.",
        "rec":  true,
        "family":  {
                       "en":  "unfortunate",
                       "pos":  "adj",
                       "he":  "ביש מזל, מצער"
                   }
    },
    {
        "en":  "unhealthy",
        "pos":  "adj",
        "he":  "לא בריא",
        "def":  "not good for your health",
        "example":  "Eating too much fast food is ___.",
        "practice":  "Smoking is one of the most ___ habits a person can have.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "unique",
        "pos":  "adj",
        "he":  "ייחודי",
        "def":  "being the only one of its kind",
        "example":  "Every snowflake has a ___ shape.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "united",
        "pos":  "adj",
        "he":  "מאוחד",
        "def":  "joined together as one group",
        "example":  "The team felt ___ after their victory.",
        "practice":  "The ___ Nations works to maintain peace worldwide.",
        "rec":  false,
        "family":  {
                       "en":  "unity / unite",
                       "pos":  "n / v",
                       "he":  "אחדות / לאחד"
                   }
    },
    {
        "en":  "universe",
        "pos":  "n",
        "he":  "היקום",
        "def":  "all of space, including every star and planet",
        "example":  "Scientists are still exploring the mysteries of the ___.",
        "rec":  true,
        "family":  {
                       "en":  "universal",
                       "pos":  "adj",
                       "he":  "אוניברסלי, כללי"
                   }
    },
    {
        "en":  "unknown",
        "pos":  "adj",
        "he":  "לא ידוע",
        "def":  "not known or familiar",
        "example":  "The artist remained ___ until after his death.",
        "practice":  "Scientists discovered an ___ species of fish in the ocean.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "unlike",
        "pos":  "prep",
        "he":  "בניגוד ל-, שלא כמו",
        "def":  "different from, or in contrast to",
        "example":  "___ her sister, she loves spicy food.",
        "practice":  "___ last year, the exam was much easier this time.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "unlikely",
        "pos":  "adj",
        "he":  "לא סביר",
        "def":  "not probable; not expected to happen",
        "example":  "It\u0027s ___ that the trip will be cancelled.",
        "practice":  "A snow storm in July is extremely ___ here.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "urban",
        "pos":  "adj",
        "he":  "עירוני",
        "def":  "relating to a city or town",
        "example":  "___ areas tend to be more crowded than rural ones.",
        "practice":  "The study focused on ___ pollution levels.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "vary",
        "pos":  "v",
        "he":  "להשתנות",
        "def":  "to be different or change according to the situation",
        "example":  "Prices ___ depending on the season.",
        "rec":  true,
        "family":  {
                       "en":  "variation",
                       "pos":  "n",
                       "he":  "שינוי, גיוון"
                   }
    },
    {
        "en":  "view",
        "pos":  "n",
        "he":  "נוף, דעה",
        "def":  "what you can see from a place, or an opinion",
        "example":  "The hotel room had a stunning ___ of the sea.",
        "practice":  "She shared her ___ on the new school policy.",
        "rec":  false,
        "family":  {
                       "en":  "viewer",
                       "pos":  "n",
                       "he":  "צופה"
                   }
    },
    {
        "en":  "visible",
        "pos":  "adj",
        "he":  "נראה לעין",
        "def":  "able to be seen",
        "example":  "The mountain peak was barely ___ through the fog.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "vision",
        "pos":  "n",
        "he":  "חזון, ראייה",
        "def":  "an idea or hope for the future, or the ability to see",
        "example":  "The company has a clear ___ for the next decade.",
        "practice":  "Her ___ for the school included more art programs.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "volume",
        "pos":  "n",
        "he":  "נפח, עוצמת קול, כמות",
        "def":  "the amount of space something fills, or the loudness of sound",
        "example":  "Please turn down the ___ on the TV.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "whom",
        "pos":  "pron",
        "he":  "את מי, למי (צורת מושא)",
        "def":  "used instead of \u0027who\u0027 as the object of a verb or preposition",
        "example":  "The man ___ I met yesterday is my new teacher.",
        "practice":  "She didn\u0027t know ___ to ask for help.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "wildlife",
        "pos":  "n",
        "he":  "חיות בר",
        "def":  "wild animals living in their natural environment",
        "example":  "The national park protects local ___.",
        "practice":  "The oil spill harmed ___ along the coast.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "within",
        "pos":  "adv, prep",
        "he":  "בתוך, בתוך טווח של",
        "def":  "inside a particular period of time, distance, or limit",
        "example":  "The package should arrive ___ three days.",
        "practice":  "The store is ___ walking distance from our house.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "worthwhile",
        "pos":  "adj",
        "he":  "משתלם, שווה את זה",
        "def":  "worth the time, money, or effort spent",
        "example":  "Learning a new language is always ___.",
        "practice":  "The long hike was tiring but completely ___.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "would",
        "pos":  "v",
        "he":  "היה (צורת עבר של \u0027will\u0027, גם לתנאי/נימוס)",
        "def":  "used as the past form of \u0027will\u0027, or to make polite requests",
        "example":  "She said she ___ call me back later.",
        "practice":  "___ you mind closing the window, please?",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "above",
        "pos":  "adj",
        "he":  "הנ\"ל / לעיל",
        "def":  "mentioned or written earlier in the same text",
        "example":  "Please read the ___ paragraph before answering the questions.",
        "practice":  "The ___ information will help you complete the form correctly.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "account",
        "pos":  "n",
        "he":  "תיאור / דוח / חשבון בנק",
        "def":  "a report or description of an event, or a bank record of money",
        "example":  "She gave a detailed ___ of what happened during the trip.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "acquire",
        "pos":  "v",
        "he":  "לרכוש / להשיג",
        "def":  "to get or obtain something, often through effort",
        "example":  "The company plans to ___ a smaller tech startup this year.",
        "practice":  "She worked hard to ___ new skills during her internship.",
        "rec":  false,
        "family":  {
                       "en":  "acquisition",
                       "pos":  "n",
                       "he":  "רכישה"
                   }
    },
    {
        "en":  "age",
        "pos":  "n",
        "he":  "תקופה (היסטורית) / גיל",
        "def":  "a particular period in history, or how old someone is",
        "example":  "Many inventions changed the way people lived in the industrial ___.",
        "rec":  true,
        "family":  {
                       "en":  "aged",
                       "pos":  "adj",
                       "he":  "מבוגר / קשיש"
                   }
    },
    {
        "en":  "agriculture",
        "pos":  "n",
        "he":  "חקלאות",
        "def":  "the practice of farming, growing crops and raising animals",
        "example":  "___ is one of the main industries in rural areas.",
        "practice":  "Modern ___ relies heavily on machinery and technology.",
        "rec":  false,
        "family":  {
                       "en":  "agricultural",
                       "pos":  "adj",
                       "he":  "חקלאי"
                   }
    },
    {
        "en":  "all of a sudden",
        "pos":  "",
        "he":  "לפתע / פתאום",
        "def":  "suddenly and unexpectedly",
        "example":  "We were walking quietly when, ___, it started to rain.",
        "practice":  "___, the lights went out and the room went dark.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "altogether",
        "pos":  "adv",
        "he":  "לגמרי / בסך הכל",
        "def":  "completely, or counting everything together",
        "example":  "He decided to stop playing video games ___.",
        "practice":  "The school trip cost us three hundred dollars ___.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "anxious",
        "pos":  "adj",
        "he":  "חרד / מודאג",
        "def":  "feeling worried or nervous about something",
        "example":  "She felt ___ before her first job interview.",
        "practice":  "Many students are ___ about their final exams.",
        "rec":  false,
        "family":  {
                       "en":  "anxiety",
                       "pos":  "n",
                       "he":  "חרדה"
                   }
    },
    {
        "en":  "apparent",
        "pos":  "adj",
        "he":  "ניכר / ברור",
        "def":  "clearly seen or understood; obvious",
        "example":  "It was ___ that the team needed more practice.",
        "practice":  "Her disappointment was ___ to everyone in the room.",
        "rec":  false,
        "family":  {
                       "en":  "apparently",
                       "pos":  "adv",
                       "he":  "כנראה"
                   }
    },
    {
        "en":  "appropriate",
        "pos":  "adj",
        "he":  "מתאים / הולם",
        "def":  "suitable or right for a particular situation",
        "example":  "Please wear clothes that are ___ for the interview.",
        "practice":  "The teacher chose an ___ book for young readers.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "atmosphere",
        "pos":  "n",
        "he":  "אווירה / אטמוספרה",
        "def":  "the mood of a place, or the layer of gases around the Earth",
        "example":  "The small restaurant had a warm and friendly ___.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "automatically",
        "pos":  "adv",
        "he":  "אוטומטית",
        "def":  "done without thinking, or by a machine without human control",
        "example":  "The lights turn on ___ when someone enters the room.",
        "practice":  "He ___ reached for his phone every time it buzzed.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "bad",
        "pos":  "adj",
        "he":  "מקולקל / רקוב",
        "def":  "spoiled or rotten, especially food",
        "example":  "Throw away the milk — it has gone ___.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "be in charge",
        "pos":  "",
        "he":  "להיות אחראי",
        "def":  "to have control of or responsibility for something",
        "example":  "Who is ___ of organizing the school trip this year?",
        "practice":  "She is ___ of the marketing department at her company.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "be situated in/on/by, etc",
        "pos":  "",
        "he":  "להיות ממוקם ב-/על-/ליד וכו\u0027",
        "def":  "to be located in a particular place",
        "example":  "The hotel is ___ right on the beach.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "behind",
        "pos":  "behind",
        "he":  "מפגר / מאחור (בזמן)",
        "def":  "slower than planned, or not making expected progress",
        "example":  "He fell ___ in his studies after being sick for two weeks.",
        "practice":  "The construction project is three months ___ schedule.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "believe in sth",
        "pos":  "",
        "he":  "להאמין ב-",
        "def":  "to trust that something is true, good, or effective",
        "example":  "She really ___ hard work and discipline.",
        "practice":  "Doctors ___ the benefits of regular exercise.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "blame",
        "pos":  "n",
        "he":  "אשמה",
        "def":  "responsibility for something bad that happened",
        "example":  "He refused to accept the ___ for the mistake.",
        "practice":  "The coach put the ___ on poor team communication.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "block",
        "pos":  "v",
        "he":  "לחסום",
        "def":  "to stop something from moving or happening",
        "example":  "The teacher decided to ___ access to social media during class.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "brilliant",
        "pos":  "adj",
        "he":  "מבריק / גאוני",
        "def":  "extremely clever or excellent",
        "example":  "She came up with a ___ solution to the problem.",
        "practice":  "The scientist is known for his ___ mind.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "bring up sb or bring sb up",
        "pos":  "",
        "he":  "לגדל (ילד) / להעלות (נושא)",
        "def":  "to raise a child, or to mention a topic in conversation",
        "example":  "Her grandparents helped ___ her after her parents passed away.",
        "practice":  "He didn\u0027t want to ___ the subject of money at dinner.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "calculate",
        "pos":  "v",
        "he":  "לחשב",
        "def":  "to find a number or amount using math",
        "example":  "Scientists ___ the distance between the Earth and the Moon.",
        "practice":  "Please ___ the total cost of the trip before we book it.",
        "rec":  false,
        "family":  {
                       "en":  "calculator",
                       "pos":  "n",
                       "he":  "מחשבון"
                   }
    },
    {
        "en":  "clothing",
        "pos":  "n",
        "he":  "ביגוד / בגדים",
        "def":  "things people wear to cover their bodies",
        "example":  "The store sells winter ___ at a discount this month.",
        "practice":  "Warm ___ is essential for hiking in the mountains.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "competitive",
        "pos":  "adj",
        "he":  "תחרותי",
        "def":  "wanting strongly to win or succeed, or involving competition",
        "example":  "He has always been very ___ in sports.",
        "practice":  "The job market for engineers is extremely ___ today.",
        "rec":  false,
        "family":  {
                       "en":  "competitor",
                       "pos":  "n",
                       "he":  "מתחרה"
                   }
    },
    {
        "en":  "contemporary",
        "pos":  "adj",
        "he":  "בן זמננו / עכשווי",
        "def":  "belonging to the present time, or to the same time as something else",
        "example":  "The museum has an exhibition of ___ art.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "contest",
        "pos":  "n",
        "he":  "תחרות",
        "def":  "an event in which people compete to win",
        "example":  "She entered a writing ___ at her school.",
        "practice":  "The singing ___ attracted thousands of viewers online.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "continent",
        "pos":  "n",
        "he":  "יבשת",
        "def":  "one of the large land masses on Earth",
        "example":  "Africa is the second largest ___ in the world.",
        "practice":  "She has traveled to every ___ except Antarctica.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "copy",
        "pos":  "n",
        "he":  "עותק",
        "def":  "a single example of a book, newspaper, or document",
        "example":  "I bought a ___ of the novel at the airport.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "criterion",
        "pos":  "n",
        "he":  "קריטריון / אמת מידה",
        "def":  "a standard used to judge or decide something",
        "example":  "Experience is the main ___ for this job.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "cut down sth or cut sth down",
        "pos":  "",
        "he":  "לכרות (עץ) / לצמצם",
        "def":  "to reduce the amount of something, or chop down a tree",
        "example":  "The city decided to ___ several old trees for the new road.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "decade",
        "pos":  "n",
        "he":  "עשור",
        "def":  "a period of ten years",
        "example":  "The town has changed a lot in the last ___.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "declare",
        "pos":  "v",
        "he":  "להכריז / להצהיר",
        "def":  "to state something officially or clearly",
        "example":  "The government decided to ___ a public holiday.",
        "rec":  true,
        "family":  {
                       "en":  "declaration",
                       "pos":  "n",
                       "he":  "הצהרה"
                   }
    },
    {
        "en":  "degree",
        "pos":  "n",
        "he":  "תואר (אקדמי) / מידה",
        "def":  "a qualification given by a university, or a level of something",
        "example":  "She earned a ___ in computer science last year.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "deliver",
        "pos":  "v, n",
        "he":  "לספק / למסור / לשאת (נאום)",
        "def":  "to bring and give something to a place or person",
        "example":  "The company promises to ___ the package within two days.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "demanding",
        "pos":  "adj",
        "he":  "תובעני / מאתגר",
        "def":  "needing a lot of time, energy, or ability",
        "example":  "Being a doctor is a very ___ job.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "detect",
        "pos":  "v",
        "he":  "לגלות / לאתר",
        "def":  "to discover or notice something, often using special methods",
        "example":  "The new device can ___ even the smallest changes in temperature.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "determine",
        "pos":  "v",
        "he":  "לקבוע / להחליט",
        "def":  "to find out or decide something exactly",
        "example":  "Tests will ___ which treatment is best for the patient.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "differ",
        "pos":  "v",
        "he":  "לחלוק דעה / לא להסכים",
        "def":  "to have a different opinion from someone",
        "example":  "I\u0027m afraid I ___ with you on this matter.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "differ",
        "pos":  "v",
        "he":  "להיות שונה / להשתנות",
        "def":  "to be different from something else",
        "example":  "Prices for the same product can ___ a lot between stores.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "disappointed",
        "pos":  "adj",
        "he":  "מאוכזב",
        "def":  "unhappy because something did not meet expectations",
        "example":  "He was ___ when his team lost the final game.",
        "practice":  "She felt ___ after receiving a lower grade than expected.",
        "rec":  false,
        "family":  {
                       "en":  "disappointment",
                       "pos":  "n",
                       "he":  "אכזבה"
                   }
    },
    {
        "en":  "divide",
        "pos":  "v",
        "he":  "לחלק",
        "def":  "to separate into parts, or to do division in math",
        "example":  "Please ___ the pizza into eight equal slices.",
        "rec":  true,
        "family":  {
                       "en":  "division",
                       "pos":  "n",
                       "he":  "חילוק / חלוקה"
                   }
    },
    {
        "en":  "domestic",
        "pos":  "n",
        "he":  "פנים-ארצי / ביתי",
        "def":  "relating to one\u0027s own country, or to home and family life",
        "example":  "The airline added several new ___ flights this year.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "done",
        "pos":  "adj",
        "he":  "גמור / מוכן",
        "def":  "finished or completed; also cooked enough",
        "example":  "Is your homework ___ yet?",
        "practice":  "The chicken needs ten more minutes before it\u0027s ___.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "double",
        "pos":  "v, adv",
        "he":  "להכפיל / כפול",
        "def":  "to become or make something twice as much",
        "example":  "The company managed to ___ its profits last year.",
        "practice":  "If you don\u0027t study, your mistakes will ___ by the exam.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "economical",
        "pos":  "adj",
        "he":  "חסכוני",
        "def":  "using money, fuel, or time carefully without waste",
        "example":  "This small car is very ___ on fuel.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "editor",
        "pos":  "n",
        "he":  "עורך (תוכן/עיתון)",
        "def":  "a person who checks and prepares written material for publishing",
        "example":  "She works as an ___ for a popular magazine.",
        "practice":  "The ___ removed several paragraphs before the article was published.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "either way",
        "pos":  "",
        "he":  "כך או כך",
        "def":  "in either of two possible situations; it doesn\u0027t matter which",
        "example":  "___, we need to decide before tomorrow morning.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "element",
        "pos":  "n",
        "he":  "יסוד / מרכיב",
        "def":  "one part of something larger or more complex",
        "example":  "Trust is an important ___ of any friendship.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "emerge",
        "pos":  "v",
        "he":  "לצוץ / להופיע",
        "def":  "to appear or come out from somewhere",
        "example":  "New evidence began to ___ during the investigation.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "emotion",
        "pos":  "n",
        "he":  "רגש",
        "def":  "a strong feeling such as joy, anger, or sadness",
        "example":  "Fear is a powerful ___ that can affect decision-making.",
        "practice":  "The actor expressed deep ___ in his final scene.",
        "rec":  false,
        "family":  {
                       "en":  "emotional",
                       "pos":  "adj",
                       "he":  "רגשי"
                   }
    },
    {
        "en":  "exception",
        "pos":  "n",
        "he":  "יוצא מן הכלל / חריג",
        "def":  "someone or something that is not included in a general rule",
        "example":  "Most students passed the test, with only one ___.",
        "practice":  "The teacher made an ___ and let her hand in the essay late.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "exchange",
        "pos":  "v",
        "he":  "להחליף",
        "def":  "to give something and receive something else in return",
        "example":  "The two countries agreed to ___ cultural delegations.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "expected",
        "pos":  "adj",
        "he":  "צפוי",
        "def":  "thought likely to happen",
        "example":  "The results were exactly as ___.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "expedition",
        "pos":  "n",
        "he":  "משלחת / מסע חקר",
        "def":  "a journey made for a specific purpose, such as exploration",
        "example":  "The team joined an ___ to the South Pole.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "expense",
        "pos":  "n",
        "he":  "הוצאה (כספית)",
        "def":  "the cost of something; money spent",
        "example":  "Running a car involves a lot of ___.",
        "rec":  true,
        "family":  {
                       "en":  "at the expense of",
                       "pos":  "",
                       "he":  "על חשבון"
                   }
    },
    {
        "en":  "export",
        "pos":  "n, v",
        "he":  "לייצא / ייצוא",
        "def":  "to send goods to another country for sale",
        "example":  "The country plans to ___ more agricultural products this year.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "expression",
        "pos":  "n",
        "he":  "ביטוי",
        "def":  "a word or phrase, or the way feelings are shown",
        "example":  "She used an old English ___ that I didn\u0027t understand.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "extend",
        "pos":  "v",
        "he":  "להאריך",
        "def":  "to make something longer in time or distance",
        "example":  "The school decided to ___ the summer vacation by a week.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "extreme",
        "pos":  "adj",
        "he":  "קיצוני",
        "def":  "very great in degree; far from normal",
        "example":  "The desert can reach ___ temperatures during the day.",
        "practice":  "He took ___ measures to protect his privacy online.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "farther/further",
        "pos":  "adj, adv",
        "he":  "רחוק יותר / נוסף",
        "def":  "at a greater distance, or additional",
        "example":  "The next gas station is ten miles ___ down the road.",
        "practice":  "We need ___ information before making a final decision.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "fed up",
        "pos":  "",
        "he":  "נמאס לו / עייף נפשית מ-",
        "def":  "annoyed or bored because of a situation that has lasted too long",
        "example":  "I\u0027m so ___ with all this rain.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "fetch",
        "pos":  "v",
        "he":  "להביא (ולחזור)",
        "def":  "to go and get something and bring it back",
        "example":  "Can you ___ my bag from the car?",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "final",
        "pos":  "n",
        "he":  "גמר (תחרות)",
        "def":  "the last and deciding match in a competition",
        "example":  "Our team reached the ___ of the tournament.",
        "rec":  true,
        "family":  {
                       "en":  "semi-final",
                       "pos":  "n",
                       "he":  "חצי גמר"
                   }
    },
    {
        "en":  "fit",
        "pos":  "adj",
        "he":  "בכושר / מתאים",
        "def":  "physically healthy and strong, or suitable for a purpose",
        "example":  "She exercises every day to stay ___.",
        "practice":  "This jacket isn\u0027t ___ for cold weather.",
        "rec":  false,
        "family":  {
                       "en":  "fitness",
                       "pos":  "n",
                       "he":  "כושר גופני"
                   }
    },
    {
        "en":  "generation",
        "pos":  "n",
        "he":  "דור",
        "def":  "all the people born around the same time",
        "example":  "Each ___ faces its own unique challenges.",
        "practice":  "My grandmother represents an older ___ with different values.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "genuine",
        "pos":  "adj",
        "he":  "אמיתי / כן",
        "def":  "real and authentic, not fake",
        "example":  "He showed ___ interest in helping others.",
        "practice":  "Is this a ___ diamond or an imitation?",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "get rid of sth",
        "pos":  "",
        "he":  "להיפטר מ-",
        "def":  "to remove or throw away something unwanted",
        "example":  "It\u0027s time to ___ these old clothes.",
        "practice":  "She wanted to ___ the stress from her daily routine.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "get sth wrong",
        "pos":  "",
        "he":  "לטעות ב-",
        "def":  "to make a mistake about something; misunderstand",
        "example":  "I think you ___ my answer completely.",
        "practice":  "He always seems to ___ the directions to my house.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "get worse",
        "pos":  "",
        "he":  "להחמיר",
        "def":  "to become more bad or more serious",
        "example":  "The weather is expected to ___ tomorrow.",
        "practice":  "Her cough started to ___ during the night.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "give away sth or give sth away",
        "pos":  "",
        "he":  "לתת במתנה / לחשוף (סוד)",
        "def":  "to give something for free, or to reveal a secret",
        "example":  "The store decided to ___ free samples to customers.",
        "practice":  "Please don\u0027t ___ the ending of the movie!",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "go out",
        "pos":  "",
        "he":  "לצאת (לבילוי) / לכבות",
        "def":  "to leave home for entertainment, or to stop burning",
        "example":  "We usually ___ for dinner on Fridays.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "hidden",
        "pos":  "adj",
        "he":  "נסתר / מוסתר",
        "def":  "kept out of sight; not easily seen or found",
        "example":  "There is a ___ camera in the store for security.",
        "practice":  "The old house had a ___ room behind the bookshelf.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "highlight",
        "pos":  "v",
        "he":  "להדגיש",
        "def":  "to draw special attention to something important",
        "example":  "The report aims to ___ the need for better public transport.",
        "practice":  "The coach wanted to ___ the team\u0027s recent improvement.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "historian",
        "pos":  "n",
        "he":  "היסטוריון",
        "def":  "a person who studies and writes about history",
        "example":  "The ___ gave a lecture about ancient Rome.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "historic",
        "pos":  "adj",
        "he":  "היסטורי (בעל חשיבות)",
        "def":  "important enough to be remembered in history",
        "example":  "Signing the peace treaty was a ___ moment.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "identical",
        "pos":  "adj",
        "he":  "זהה",
        "def":  "exactly the same as something else",
        "example":  "The twins wore ___ outfits to the party.",
        "practice":  "Her answer was ___ to her classmate\u0027s, which worried the teacher.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "immigration",
        "pos":  "n",
        "he":  "הגירה",
        "def":  "the process of coming to live permanently in another country",
        "example":  "___ policies have become a major political issue.",
        "practice":  "The country saw a rise in ___ after the war.",
        "rec":  false,
        "family":  {
                       "en":  "immigrant",
                       "pos":  "n",
                       "he":  "מהגר"
                   }
    },
    {
        "en":  "import",
        "pos":  "v, n",
        "he":  "לייבא / ייבוא",
        "def":  "to bring goods into a country from abroad to sell",
        "example":  "The country has to ___ most of its oil.",
        "rec":  true,
        "family":  {
                       "en":  "import",
                       "pos":  "",
                       "he":  "ייבוא"
                   }
    },
    {
        "en":  "impress",
        "pos":  "v",
        "he":  "להרשים",
        "def":  "to make someone feel admiration or respect",
        "example":  "She tried to ___ the interviewers with her confidence.",
        "practice":  "His new invention managed to ___ the judges at the science fair.",
        "rec":  false,
        "family":  {
                       "en":  "impressive",
                       "pos":  "adj",
                       "he":  "מרשים"
                   }
    },
    {
        "en":  "impression",
        "pos":  "n",
        "he":  "רושם",
        "def":  "the effect or feeling that something makes on someone",
        "example":  "He made a great first ___ at the job interview.",
        "practice":  "The movie left a lasting ___ on the audience.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "incredible",
        "pos":  "adj",
        "he":  "לא ייאמן / מדהים",
        "def":  "very good, great, or hard to believe",
        "example":  "The view from the mountain top was ___.",
        "practice":  "It\u0027s ___ how fast technology changes every year.",
        "rec":  false,
        "family":  {
                       "en":  "incredibly",
                       "pos":  "adv",
                       "he":  "באופן מדהים"
                   }
    },
    {
        "en":  "indoors",
        "pos":  "adv, adj",
        "he":  "בפנים (בבית/במבנה)",
        "def":  "inside a building, not outside",
        "example":  "Because of the rain, the children played ___ all afternoon.",
        "practice":  "It\u0027s too cold today, so let\u0027s stay ___.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "infection",
        "pos":  "n",
        "he":  "זיהום / דלקת",
        "def":  "an illness caused by bacteria or a virus",
        "example":  "The wound became red because of an ___.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "input",
        "pos":  "n",
        "he":  "קלט / תרומה (רעיונית)",
        "def":  "information, ideas, or energy put into a system or discussion",
        "example":  "The manager asked for everyone\u0027s ___ before deciding.",
        "practice":  "The computer needs an ___ signal to work properly.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "inside",
        "pos":  "adv",
        "he":  "בפנים / בתוך (רגשית)",
        "def":  "in the inner part, or referring to one\u0027s inner feelings",
        "example":  "She smiled, but ___ she felt nervous.",
        "practice":  "He looked calm, though ___ he was terrified.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "interaction",
        "pos":  "n",
        "he":  "אינטראקציה / תקשורת הדדית",
        "def":  "communication or contact between people or things",
        "example":  "Social media has changed human ___ dramatically.",
        "practice":  "Good teamwork depends on clear ___ between members.",
        "rec":  false,
        "family":  {
                       "en":  "interact",
                       "pos":  "v",
                       "he":  "לקיים אינטראקציה"
                   }
    },
    {
        "en":  "interpret",
        "pos":  "v",
        "he":  "לתרגם (בעל פה) / לפרש",
        "def":  "to translate speech aloud, or explain the meaning of something",
        "example":  "She works as a translator who can ___ several languages.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "interrupt",
        "pos":  "v",
        "he":  "להפריע / לקטוע",
        "def":  "to stop someone while they are speaking or doing something",
        "example":  "Please don\u0027t ___ me while I\u0027m explaining the instructions.",
        "practice":  "A phone call managed to ___ the important meeting.",
        "rec":  false,
        "family":  {
                       "en":  "interruption",
                       "pos":  "n",
                       "he":  "הפרעה"
                   }
    },
    {
        "en":  "involvement",
        "pos":  "n",
        "he":  "מעורבות",
        "def":  "the fact of taking part in or being connected to something",
        "example":  "Her ___ in the project increased after she joined the team.",
        "practice":  "The police are investigating his ___ in the accident.",
        "rec":  false,
        "family":  {
                       "en":  "involved / involve",
                       "pos":  "adj / v",
                       "he":  "מעורב / לערב"
                   }
    },
    {
        "en":  "issue",
        "pos":  "n",
        "he":  "נושא / בעיה / גיליון",
        "def":  "an important topic for discussion, or a problem",
        "example":  "Climate change is a serious global ___.",
        "practice":  "We need to solve this technical ___ before launching the app.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "it looks like/as if/as though",
        "pos":  "",
        "he":  "נראה ש- / כאילו",
        "def":  "used to say that something appears to be true",
        "example":  "___ it\u0027s going to rain later today.",
        "practice":  "___ she already knew the answer before I told her.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "jam",
        "pos":  "n",
        "he":  "פקק (תנועה) / ריבה",
        "def":  "a situation in which traffic cannot move because of too many vehicles",
        "example":  "We were stuck in a terrible traffic ___ for two hours.",
        "rec":  true,
        "family":  {
                       "en":  "traffic jam",
                       "pos":  "",
                       "he":  "פקק תנועה"
                   }
    },
    {
        "en":  "journalist",
        "pos":  "n",
        "he":  "עיתונאי",
        "def":  "a person who writes news stories for newspapers, TV, or online media",
        "example":  "The ___ interviewed the mayor about the new policy.",
        "practice":  "She became a ___ after studying communications in college.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "judgment",
        "pos":  "n",
        "he":  "שיקול דעת",
        "def":  "the ability to make sensible decisions",
        "example":  "The pilot showed excellent ___ during the emergency landing.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "just as bad / good / tall  /clever, etc (as sb/sth)",
        "pos":  "",
        "he":  "בדיוק כמו (רע/טוב/גבוה/חכם וכו\u0027)",
        "def":  "equally bad, good, or similar in degree to someone or something else",
        "example":  "Her cooking is ___ as her mother\u0027s.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "justice",
        "pos":  "n",
        "he":  "צדק",
        "def":  "fairness in the way people are treated, often by law",
        "example":  "The victims demanded ___ after the trial.",
        "practice":  "He fought his whole life for social ___.",
        "rec":  false,
        "family":  {
                       "en":  "just",
                       "pos":  "adj",
                       "he":  "הוגן / צודק"
                   }
    },
    {
        "en":  "keen",
        "pos":  "adj",
        "he":  "להוט / נלהב",
        "def":  "very interested in or enthusiastic about something",
        "example":  "She is ___ on learning new languages.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "keep",
        "pos":  "v",
        "he":  "לעכב / להשהות",
        "def":  "to make someone late or cause them to wait",
        "example":  "Sorry to ___ you waiting so long.",
        "practice":  "Heavy traffic can ___ commuters stuck for hours.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "kit",
        "pos":  "n",
        "he":  "ערכה (כלים/ציוד)",
        "def":  "a set of tools or equipment for a particular purpose",
        "example":  "He packed a first-aid ___ before the hiking trip.",
        "practice":  "Every player needs a full sports ___ for the match.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "learn",
        "pos":  "v",
        "he":  "לשנן / ללמוד בעל פה",
        "def":  "to memorize something, like a poem or lines in a play",
        "example":  "The actors had to ___ their lines before opening night.",
        "practice":  "She managed to ___ the whole speech by heart.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "lecture",
        "pos":  "n, v",
        "he":  "הרצאה / להרצות",
        "def":  "a formal talk given to teach people about a subject",
        "example":  "The professor gave a ___ on Ancient Greek history.",
        "practice":  "He will ___ about climate change at the conference next week.",
        "rec":  false,
        "family":  {
                       "en":  "lecture",
                       "pos":  "",
                       "he":  "להרצות"
                   }
    },
    {
        "en":  "light",
        "pos":  "v",
        "he":  "להדליק / להאיר",
        "def":  "to make something start burning or shining",
        "example":  "She tried to ___ the candles before the guests arrived.",
        "practice":  "Please ___ the fire before it gets too cold outside.",
        "rec":  false,
        "family":  {
                       "en":  "in light of",
                       "pos":  "",
                       "he":  "לאור (העובדה ש-)"
                   }
    },
    {
        "en":  "living",
        "pos":  "n",
        "he":  "פרנסה / אורח חיים",
        "def":  "the money or way someone earns to support themselves",
        "example":  "She makes a ___ as a freelance photographer.",
        "practice":  "Farmers in this area earn a ___ from growing olives.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "logical",
        "pos":  "adj",
        "he":  "הגיוני",
        "def":  "based on clear reasoning; sensible",
        "example":  "It\u0027s only ___ to save money before a big trip.",
        "practice":  "His explanation seemed ___, so everyone agreed.",
        "rec":  false,
        "family":  {
                       "en":  "logic",
                       "pos":  "n",
                       "he":  "היגיון"
                   }
    },
    {
        "en":  "look forward to sth/doing sth",
        "pos":  "",
        "he":  "לצפות בכיליון עיניים ל- / לחכות ל-",
        "def":  "to feel excited about something that will happen",
        "example":  "We really ___ to seeing you next summer.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "lower",
        "pos":  "v",
        "he":  "להנמיך / להוריד",
        "def":  "to make something go down in height, level, or amount",
        "example":  "The company decided to ___ its prices during the sale.",
        "practice":  "Please ___ your voice — the baby is sleeping.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "make sense",
        "pos":  "",
        "he":  "להיות הגיוני",
        "def":  "to be clear, logical, or understandable",
        "example":  "Her explanation didn\u0027t ___ to anyone in the room.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "make up sth or make sth up",
        "pos":  "",
        "he":  "להמציא (סיפור) / להרכיב",
        "def":  "to invent something, often untrue, or to form something",
        "example":  "He decided to ___ an excuse for being late.",
        "practice":  "She had to ___ a story to explain the broken window.",
        "rec":  false,
        "family":  {
                       "en":  "made up of",
                       "pos":  "",
                       "he":  "מורכב מ-"
                   }
    },
    {
        "en":  "make up your mind or make your mind up",
        "pos":  "",
        "he":  "להחליט סופית",
        "def":  "to finally decide something after thinking about it",
        "example":  "You need to ___ before the deadline tomorrow.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "mend",
        "pos":  "v",
        "he":  "לתקן",
        "def":  "to repair something that is damaged or broken",
        "example":  "My grandmother can ___ almost any piece of clothing.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "mixture",
        "pos":  "n",
        "he":  "תערובת",
        "def":  "a combination of different things or substances",
        "example":  "The cake batter is a ___ of flour, sugar, and eggs.",
        "practice":  "Her feelings were a ___ of excitement and fear.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "monthly",
        "pos":  "adj",
        "he":  "חודשי",
        "def":  "happening or paid once every month",
        "example":  "The gym charges a ___ fee for membership.",
        "practice":  "She receives a ___ magazine about science and nature.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "mystery",
        "pos":  "n",
        "he":  "תעלומה",
        "def":  "something that is difficult to understand or explain",
        "example":  "The detective finally solved the ___.",
        "rec":  true,
        "family":  {
                       "en":  "mysterious",
                       "pos":  "adj",
                       "he":  "מסתורי"
                   }
    },
    {
        "en":  "name",
        "pos":  "v",
        "he":  "לנקוב בשם / לחשוף שם",
        "def":  "to officially state the name of someone or something",
        "example":  "Police refused to ___ the suspect before the trial.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "native",
        "pos":  "adj",
        "he":  "יליד / מולדת",
        "def":  "belonging to the place where someone was born",
        "example":  "English is not her ___ language.",
        "rec":  true,
        "family":  {
                       "en":  "native language",
                       "pos":  "",
                       "he":  "שפת אם"
                   }
    },
    {
        "en":  "neither … nor",
        "pos":  "",
        "he":  "לא... ולא...",
        "def":  "used to show that two things are both not true or not included",
        "example":  "She wanted ___ coffee nor tea, just water.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "nightmare",
        "pos":  "n",
        "he":  "סיוט",
        "def":  "a frightening dream, or a terrible experience",
        "example":  "The whole trip turned into a complete ___.",
        "practice":  "She woke up crying after a terrible ___.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "nonsense",
        "pos":  "n",
        "he":  "שטויות",
        "def":  "ideas or statements that have no meaning or make no sense",
        "example":  "Stop talking ___ and tell me the truth.",
        "practice":  "The teacher said the essay was full of ___.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "not believe / understand / hear / say, etc. a word",
        "pos":  "",
        "he":  "לא להאמין / להבין / לשמוע אף מילה",
        "def":  "to not believe, understand, or hear anything at all of what was said",
        "example":  "I couldn\u0027t ___ of what he was saying — he spoke too fast.",
        "practice":  "She didn\u0027t ___ about the accident until the next morning.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "not until",
        "pos":  "",
        "he":  "לא לפני / רק אחרי",
        "def":  "used to say that something will not happen before a certain time",
        "example":  "The store won\u0027t open ___ nine o\u0027clock.",
        "practice":  "He didn\u0027t realize his mistake ___ it was too late.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "occupation",
        "pos":  "n",
        "he":  "משלח יד / עיסוק",
        "def":  "a person\u0027s job or profession",
        "example":  "Please state your ___ on the application form.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "occupy",
        "pos":  "v",
        "he":  "לתפוס / לאכלס (זמן/מקום)",
        "def":  "to fill or take up a place, time, or position",
        "example":  "Reading books helps to ___ her free time.",
        "rec":  true,
        "family":  {
                       "en":  "occupied",
                       "pos":  "adj",
                       "he":  "תפוס / עסוק"
                   }
    },
    {
        "en":  "oil",
        "pos":  "n",
        "he":  "נפט / שמן",
        "def":  "a thick liquid used as fuel or for cooking",
        "example":  "Prices rose sharply after the ___ shortage last winter.",
        "practice":  "The mechanic checked the engine ___ before the long drive.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "on the whole",
        "pos":  "",
        "he":  "בסך הכל / באופן כללי",
        "def":  "considering everything; generally speaking",
        "example":  "___, the trip was a great success.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "open",
        "pos":  "v",
        "he":  "לפתוח (רשמית)",
        "def":  "to begin something officially, like an event or business",
        "example":  "The mayor will ___ the new library next week.",
        "practice":  "The company plans to ___ three new branches this year.",
        "rec":  false,
        "family":  {
                       "en":  "opening",
                       "pos":  "n",
                       "he":  "פתיחה"
                   }
    },
    {
        "en":  "operate",
        "pos":  "v",
        "he":  "לנתח (ניתוח) / להפעיל",
        "def":  "to perform surgery, or to make a machine work",
        "example":  "The surgeon had to ___ immediately to save his life.",
        "practice":  "Only trained staff are allowed to ___ this machine.",
        "rec":  false,
        "family":  {
                       "en":  "operation",
                       "pos":  "n",
                       "he":  "ניתוח / הפעלה"
                   }
    },
    {
        "en":  "organ",
        "pos":  "n",
        "he":  "איבר (בגוף)",
        "def":  "a part of the body that performs a specific function",
        "example":  "The heart is a vital ___ in the human body.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "organization",
        "pos":  "n",
        "he":  "ארגון / סידור",
        "def":  "a group of people working together, or the way things are arranged",
        "example":  "She works for a charity ___ that helps refugees.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "outstanding",
        "pos":  "adj",
        "he":  "מצטיין / בולט לטובה",
        "def":  "extremely good; much better than average",
        "example":  "He received an award for his ___ performance.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "part-time",
        "pos":  "",
        "he":  "חלקי (משרה)",
        "def":  "working or happening for only part of the usual time",
        "example":  "She found a ___ job at the local bookstore.",
        "practice":  "He studies full-time and works ___ on weekends.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "patient",
        "pos":  "adj",
        "he":  "סבלני",
        "def":  "able to wait or deal with problems calmly, without complaining",
        "example":  "The teacher remained ___ even when the students struggled.",
        "rec":  true,
        "family":  {
                       "en":  "patience",
                       "pos":  "n",
                       "he":  "סבלנות"
                   }
    },
    {
        "en":  "peculiar",
        "pos":  "adj",
        "he":  "משונה / מוזר",
        "def":  "strange or unusual",
        "example":  "There was a ___ smell coming from the kitchen.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "place",
        "pos":  "n",
        "he":  "מקום (באוניברסיטה/בתחרות)",
        "def":  "a position earned or offered, e.g. in a competition or school",
        "example":  "She won first ___ in the science competition.",
        "practice":  "He earned a ___ at a top university after the exam.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "point",
        "pos":  "n",
        "he":  "נקודה (בזמן/במקום)",
        "def":  "a specific moment or location in time or space",
        "example":  "At this ___ in the story, the hero finally returns home.",
        "practice":  "We reached a turning ___ in the negotiations.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "point",
        "pos":  "v",
        "he":  "להצביע / לכוון",
        "def":  "to hold something so it faces toward a person or thing",
        "example":  "He decided to ___ the camera at the mountains.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "position",
        "pos":  "n",
        "he":  "מצב / עמדה",
        "def":  "the situation someone is in, especially a difficult one",
        "example":  "She found herself in a difficult ___ after losing her job.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "potential",
        "pos":  "n",
        "he":  "פוטנציאל",
        "def":  "the ability or qualities needed for future success",
        "example":  "The coach believes the young player has great ___.",
        "rec":  true,
        "family":  {
                       "en":  "potentially",
                       "pos":  "adv",
                       "he":  "באופן פוטנציאלי"
                   }
    },
    {
        "en":  "preference",
        "pos":  "n",
        "he":  "העדפה",
        "def":  "a stronger liking for one thing over another",
        "example":  "What is your ___ — tea or coffee?",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "present",
        "pos":  "v",
        "he":  "להעניק / להציג (רשמית)",
        "def":  "to give something formally, or to show information to others",
        "example":  "The principal will ___ the awards at the ceremony.",
        "practice":  "She had to ___ her project in front of the whole class.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "pressure",
        "pos":  "n",
        "he":  "לחץ",
        "def":  "a feeling of stress, or physical force pushing on something",
        "example":  "He performs well even under a lot of ___.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "prime",
        "pos":  "adj",
        "he":  "ראשי / עיקרי",
        "def":  "main or most important",
        "example":  "Tourism is the ___ source of income for the island.",
        "practice":  "Good sleep is of ___ importance for students\u0027 concentration.",
        "rec":  false,
        "family":  {
                       "en":  "primary",
                       "pos":  "adj",
                       "he":  "ראשוני / יסודי"
                   }
    },
    {
        "en":  "principal",
        "pos":  "adj, n",
        "he":  "מנהל (בית ספר) / ראשי",
        "def":  "the head of a school, or the most important thing",
        "example":  "The ___ called a meeting to discuss the new schedule.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "promote",
        "pos":  "v",
        "he":  "לקדם (בעבודה)",
        "def":  "to raise someone to a higher position or rank",
        "example":  "The company decided to ___ her to team leader.",
        "practice":  "He worked hard for years before they decided to ___ him.",
        "rec":  false,
        "family":  {
                       "en":  "promotion",
                       "pos":  "n",
                       "he":  "קידום (בעבודה)"
                   }
    },
    {
        "en":  "put up with sth/sb",
        "pos":  "",
        "he":  "לסבול / להשלים עם",
        "def":  "to accept something unpleasant without complaining",
        "example":  "I can\u0027t ___ this noise any longer.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "reach",
        "pos":  "v, n",
        "he":  "להגיע אל / להושיט יד",
        "def":  "to stretch out and touch, or to arrive at a place",
        "example":  "She tried to ___ the top shelf but couldn\u0027t.",
        "practice":  "It took three hours to ___ the summit of the mountain.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "reason",
        "pos":  "n",
        "he":  "היגיון / שיקול דעת",
        "def":  "the ability to think sensibly and make fair judgments",
        "example":  "He lost all sense of ___ when he got angry.",
        "practice":  "Appeal to her ___, not her emotions, during the argument.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "record",
        "pos":  "v, n",
        "he":  "להקליט / לתעד",
        "def":  "to store sound, video, or information for later use",
        "example":  "The teacher asked students to ___ their presentations at home.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "reflect",
        "pos":  "v",
        "he":  "לשקף / להשתקף",
        "def":  "to show an image of something, as in a mirror",
        "example":  "The calm lake seemed to ___ the mountains perfectly.",
        "rec":  true,
        "family":  {
                       "en":  "reflection",
                       "pos":  "n",
                       "he":  "השתקפות"
                   }
    },
    {
        "en":  "register",
        "pos":  "n, v",
        "he":  "להירשם / רישום",
        "def":  "to officially record a name on a list, or an official list",
        "example":  "Students must ___ for the exam before the deadline.",
        "practice":  "She forgot to ___ her new address with the post office.",
        "rec":  false,
        "family":  {
                       "en":  "registration",
                       "pos":  "n",
                       "he":  "הרשמה"
                   }
    },
    {
        "en":  "regret",
        "pos":  "v, n",
        "he":  "להתחרט / חרטה",
        "def":  "to feel sorry about something you did or didn\u0027t do",
        "example":  "He came to ___ not studying harder for the exam.",
        "practice":  "She will always ___ missing her best friend\u0027s wedding.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "relate",
        "pos":  "v",
        "he":  "להתייחס / לקשר",
        "def":  "to show a connection between two or more things",
        "example":  "These symptoms ___ directly to lack of sleep.",
        "practice":  "Her thesis tries to ___ diet to mental health.",
        "rec":  false,
        "family":  {
                       "en":  "related / relationship / relative",
                       "pos":  "adj / n / adj",
                       "he":  "קשור / מערכת יחסים / יחסי"
                   }
    },
    {
        "en":  "relax",
        "pos":  "v",
        "he":  "להירגע",
        "def":  "to become less tense or worried; to rest",
        "example":  "After the exam, she just wanted to ___ at home.",
        "practice":  "He listens to music to ___ after a long day at work.",
        "rec":  false,
        "family":  {
                       "en":  "relaxed",
                       "pos":  "adj",
                       "he":  "רגוע"
                   }
    },
    {
        "en":  "remark",
        "pos":  "v, n",
        "he":  "הערה / להעיר",
        "def":  "to say something as a comment, or a comment itself",
        "example":  "She made an interesting ___ about the ending of the film.",
        "practice":  "He couldn\u0027t help but ___ on how much the city had changed.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "remote",
        "pos":  "adj",
        "he":  "מרוחק / נידח",
        "def":  "far away from other places; isolated",
        "example":  "The village is located in a ___ area of the mountains.",
        "practice":  "She works a ___ job from home three days a week.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "replace",
        "pos":  "v",
        "he":  "להחליף",
        "def":  "to put something new in the place of something else",
        "example":  "The company decided to ___ all its old computers.",
        "practice":  "He had to ___ the broken window after the storm.",
        "rec":  false,
        "family":  {
                       "en":  "replacement",
                       "pos":  "n",
                       "he":  "תחליף / החלפה"
                   }
    },
    {
        "en":  "rescue",
        "pos":  "v, n",
        "he":  "להציל / הצלה",
        "def":  "to save someone or something from danger",
        "example":  "Firefighters managed to ___ the family from the burning building.",
        "practice":  "The dog was lucky to be part of an animal ___ program.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "respect",
        "pos":  "v, n",
        "he":  "לכבד / כבוד",
        "def":  "to admire and value someone or something",
        "example":  "Students should ___ their teachers and classmates.",
        "rec":  true,
        "family":  {
                       "en":  "respectable",
                       "pos":  "",
                       "he":  "מכובד / הגון"
                   }
    },
    {
        "en":  "retire",
        "pos":  "v",
        "he":  "לפרוש (מעבודה)",
        "def":  "to stop working, usually because of age",
        "example":  "My grandfather decided to ___ after forty years of teaching.",
        "practice":  "She plans to ___ early and travel around the world.",
        "rec":  false,
        "family":  {
                       "en":  "retired / retirement",
                       "pos":  "adj / n",
                       "he":  "פרש / פרישה"
                   }
    },
    {
        "en":  "right",
        "pos":  "adj",
        "he":  "נכון (מוסרית)",
        "def":  "morally good or acceptable",
        "example":  "It just didn\u0027t feel ___ to leave without saying goodbye.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "role",
        "pos":  "n",
        "he":  "תפקיד",
        "def":  "the function or purpose someone or something has",
        "example":  "Parents play a key ___ in a child\u0027s education.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "room",
        "pos":  "n",
        "he":  "מקום / שטח",
        "def":  "available space for something",
        "example":  "There isn\u0027t enough ___ in the trunk for all the bags.",
        "practice":  "We need more ___ to grow as a company.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "rough",
        "pos":  "adj",
        "he":  "מחוספס / בערך (לא מדויק)",
        "def":  "approximate, not exact; also uneven or harsh",
        "example":  "Can you give me a ___ estimate of the total cost?",
        "rec":  true,
        "family":  {
                       "en":  "roughly",
                       "pos":  "adv",
                       "he":  "בערך"
                   }
    },
    {
        "en":  "rule",
        "pos":  "n",
        "he":  "חוק / כלל",
        "def":  "an official regulation that controls behavior",
        "example":  "The most important ___ is to always wear a seatbelt.",
        "practice":  "Breaking a safety ___ can lead to serious consequences.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "rule",
        "pos":  "v, n",
        "he":  "לשלוט / למשול",
        "def":  "to govern or have official power over a country or people",
        "example":  "The king continued to ___ for almost fifty years.",
        "rec":  true,
        "family":  {
                       "en":  "ruler",
                       "pos":  "n",
                       "he":  "שליט"
                   }
    },
    {
        "en":  "run",
        "pos":  "v",
        "he":  "לנהל (עסק)",
        "def":  "to manage or be in charge of a business or organization",
        "example":  "Her parents ___ a small bakery in the city center.",
        "practice":  "He dreams of one day being able to ___ his own company.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "rush",
        "pos":  "v, n",
        "he":  "למהר / בהלה",
        "def":  "to move or do something very quickly, often because of lack of time",
        "example":  "We had to ___ to catch the last train.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "satisfy",
        "pos":  "v",
        "he":  "לספק (את צרכיו) / להניח את דעתו",
        "def":  "to give someone what they need or want; to please",
        "example":  "The meal was large enough to ___ everyone at the table.",
        "practice":  "It\u0027s hard to ___ customers who expect perfection.",
        "rec":  false,
        "family":  {
                       "en":  "satisfaction / satisfactory / satisfied",
                       "pos":  "n / adj / adj",
                       "he":  "שביעות רצון / משביע רצון / מרוצה"
                   }
    },
    {
        "en":  "scale",
        "pos":  "n",
        "he":  "קנה מידה / היקף",
        "def":  "the size or extent of something, or a ratio used in maps",
        "example":  "The disaster was on a much larger ___ than expected.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "scene",
        "pos":  "n",
        "he":  "סצנה (בסרט/במחזה)",
        "def":  "a part of a play, film, or story where action happens",
        "example":  "The final ___ of the movie made everyone cry.",
        "rec":  true,
        "family":  {
                       "en":  "scenery",
                       "pos":  "n",
                       "he":  "נוף / תפאורה"
                   }
    },
    {
        "en":  "schedule",
        "pos":  "n",
        "he":  "לוח זמנים",
        "def":  "a plan of times when things are supposed to happen",
        "example":  "The train is running behind ___ today.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "sensitive",
        "pos":  "adj",
        "he":  "רגיש",
        "def":  "easily affected or hurt by things; quick to feel or react",
        "example":  "He is very ___ about criticism of his work.",
        "practice":  "This information is ___ and should not be shared.",
        "rec":  false,
        "family":  {
                       "en":  "sensitivity",
                       "pos":  "n",
                       "he":  "רגישות"
                   }
    },
    {
        "en":  "service",
        "pos":  "n",
        "he":  "שירות (ציבורי)",
        "def":  "work done for the public, such as by the army or government",
        "example":  "He decided to join the national ___ after high school.",
        "practice":  "The hospital provides emergency medical ___ around the clock.",
        "rec":  false,
        "family":  {
                       "en":  "serve",
                       "pos":  "v",
                       "he":  "לשרת"
                   }
    },
    {
        "en":  "set",
        "pos":  "v",
        "he":  "קבוע / מוגדר מראש",
        "def":  "fixed or arranged in advance; not changing",
        "example":  "We have a ___ time for dinner every evening.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "setting",
        "pos":  "n",
        "he":  "רקע / הגדרה (של סיפור)",
        "def":  "the place and time where a story or film happens",
        "example":  "The ___ of the novel is a small village in the 1800s.",
        "rec":  true,
        "family":  {
                       "en":  "set",
                       "pos":  "v",
                       "he":  "להציב / לקבוע"
                   }
    },
    {
        "en":  "shortly",
        "pos":  "adv",
        "he":  "בקרוב",
        "def":  "in a short time; soon",
        "example":  "The bus should arrive ___ after noon.",
        "practice":  "We will announce the results ___ after the meeting.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "shut (sth) down or shut down (sth)",
        "pos":  "",
        "he":  "לסגור (עסק/מערכת)",
        "def":  "to stop a business, machine, or system from operating",
        "example":  "The factory had to ___ after the fire.",
        "practice":  "They decided to ___ the website for maintenance tonight.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "similarity",
        "pos":  "n",
        "he":  "דמיון (בין דברים)",
        "def":  "the quality of being alike or similar",
        "example":  "There is a strange ___ between the two paintings.",
        "practice":  "Researchers noticed a ___ between the two diseases.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "slow (sb/sth) down / up or slow down/up (sb/sth)",
        "pos":  "",
        "he":  "להאט",
        "def":  "to make something or someone move or happen more slowly",
        "example":  "Heavy rain can ___ traffic on the highway.",
        "practice":  "An injury forced the runner to ___ during the race.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "so-called",
        "pos":  "",
        "he":  "מה שנקרא / כביכול",
        "def":  "used to describe something commonly called by a certain name, often doubtfully",
        "example":  "The ___ expert gave some very poor advice.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "society",
        "pos":  "n",
        "he":  "חברה (ציבור) / אגודה",
        "def":  "people living together in a community, or a club/organization",
        "example":  "She joined the school\u0027s debate ___ this year.",
        "rec":  true,
        "family":  {
                       "en":  "social",
                       "pos":  "adj",
                       "he":  "חברתי"
                   }
    },
    {
        "en":  "sooner or later",
        "pos":  "",
        "he":  "במוקדם או במאוחר",
        "def":  "eventually; at some point in the future",
        "example":  "___, you\u0027ll have to tell her the truth.",
        "practice":  "___, the old bridge will need to be repaired.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "spectacular",
        "pos":  "adj",
        "he":  "מרהיב / מרשים",
        "def":  "very impressive or dramatic to look at",
        "example":  "The fireworks display was absolutely ___.",
        "practice":  "They enjoyed a ___ view of the canyon from the top.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "speech",
        "pos":  "n",
        "he":  "נאום",
        "def":  "a formal talk given to an audience",
        "example":  "The president gave a moving ___ after the ceremony.",
        "practice":  "She was nervous before delivering her graduation ___.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "spoil",
        "pos":  "v",
        "he":  "לקלקל / לפנק יתר על המידה",
        "def":  "to ruin something, or to give someone too much of what they want",
        "example":  "Don\u0027t ___ the surprise by telling her now.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "start (sth) off or start off (sth)",
        "pos":  "",
        "he":  "להתחיל (ב-)",
        "def":  "to begin something in a particular way",
        "example":  "Let\u0027s ___ the meeting with a quick update from each team.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "style",
        "pos":  "n",
        "he":  "סגנון",
        "def":  "a particular way of doing, making, or presenting something",
        "example":  "Her writing ___ is clear and easy to follow.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "sum up (sth/sb) or sum (sth/sb) up",
        "pos":  "",
        "he":  "לסכם",
        "def":  "to briefly describe the main points of something",
        "example":  "Let me ___ the lesson in just two sentences.",
        "practice":  "The teacher asked us to ___ the article in our own words.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "summary",
        "pos":  "n",
        "he":  "סיכום",
        "def":  "a short statement giving the main points of something",
        "example":  "Please write a short ___ of the chapter you read.",
        "practice":  "The news report gave a brief ___ of the main events.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "support",
        "pos":  "v, n",
        "he":  "לתמוך / תמיכה",
        "def":  "to help or encourage someone, often financially or emotionally",
        "example":  "Her parents always ___ her career choices.",
        "practice":  "The charity relies on public ___ to continue its work.",
        "rec":  false,
        "family":  {
                       "en":  "supporter",
                       "pos":  "n",
                       "he":  "תומך"
                   }
    },
    {
        "en":  "survive",
        "pos":  "v",
        "he":  "לשרוד",
        "def":  "to continue to live or exist, especially after a difficult event",
        "example":  "Few animals can ___ in such extreme cold.",
        "practice":  "The small shop managed to ___ despite the economic crisis.",
        "rec":  false,
        "family":  {
                       "en":  "survival / survivor",
                       "pos":  "n / n",
                       "he":  "הישרדות / ניצול"
                   }
    },
    {
        "en":  "take into account sth",
        "pos":  "",
        "he":  "לקחת בחשבון",
        "def":  "to consider something when making a decision or judgment",
        "example":  "The judge decided to ___ his age before sentencing.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "take part",
        "pos":  "",
        "he":  "להשתתף",
        "def":  "to join in and be involved in an activity",
        "example":  "Hundreds of students will ___ in the marathon this year.",
        "practice":  "She was too shy to ___ in the class discussion.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "take place",
        "pos":  "",
        "he":  "להתרחש / להתקיים",
        "def":  "to happen, especially after being planned",
        "example":  "The wedding will ___ in a small garden in June.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "take the/this opportunity to do sth",
        "pos":  "",
        "he":  "לנצל את ההזדמנות כדי ל-",
        "def":  "to use a chance to do something",
        "example":  "I\u0027d like to ___ to thank everyone who helped us.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "take sb/sth seriously",
        "pos":  "",
        "he":  "להתייחס ברצינות ל-",
        "def":  "to treat someone or something as important and not a joke",
        "example":  "Please ___ this warning about the storm.",
        "practice":  "The coach began to ___ the young player after his first win.",
        "rec":  false,
        "family":  {
                       "en":  "seriously",
                       "pos":  "adv",
                       "he":  "ברצינות"
                   }
    },
    {
        "en":  "take/accept/claim responsibility for sth",
        "pos":  "",
        "he":  "לקחת/לקבל אחריות על-",
        "def":  "to agree that you are responsible for something",
        "example":  "He refused to ___ for the damage he caused.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "the headlines",
        "pos":  "",
        "he":  "הכותרות (בחדשות)",
        "def":  "the main news stories, especially the titles shown in the media",
        "example":  "The scandal made ___ across the country.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "the heart of sth",
        "pos":  "",
        "he":  "ליבת/עיקר הנושא",
        "def":  "the most important or central part of something",
        "example":  "Trust lies at ___ of every good relationship.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "the main thing",
        "pos":  "",
        "he":  "העיקר",
        "def":  "the most important point or fact",
        "example":  "You made a mistake, but ___ is that you learned from it.",
        "practice":  "Winning isn\u0027t everything — ___ is that we tried our best.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "the reality/realities of sth",
        "pos":  "",
        "he":  "המציאות (של-)",
        "def":  "the true facts of a situation, especially a difficult one",
        "example":  "Living abroad taught her ___ of being far from family.",
        "practice":  "The documentary shows ___ of life in a war zone.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "theme",
        "pos":  "n",
        "he":  "נושא (מרכזי)",
        "def":  "the main subject or idea of a book, film, or discussion",
        "example":  "Friendship is the central ___ of the novel.",
        "practice":  "The school party has a beach ___ this year.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "to",
        "pos":  "prep",
        "he":  "עד / ל- (טווח)",
        "def":  "used to show a range between two points or numbers",
        "example":  "Tickets cost anywhere from ten ___ fifty dollars.",
        "practice":  "The movie is suitable for children aged five ___ ten.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "to start with",
        "pos":  "",
        "he":  "מלכתחילה / קודם כל",
        "def":  "used to introduce the first point, or to say how something began",
        "example":  "___, let\u0027s review what we learned last week.",
        "practice":  "She didn\u0027t even want to go ___.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "treasure",
        "pos":  "n",
        "he":  "אוצר",
        "def":  "a collection of valuable things, such as gold or jewels",
        "example":  "The divers discovered sunken ___ near the old shipwreck.",
        "practice":  "Her grandmother\u0027s letters are a family ___.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "try",
        "pos":  "n",
        "he":  "ניסיון (לנסות)",
        "def":  "an attempt to do something",
        "example":  "It didn\u0027t work the first time, but she gave it another ___.",
        "practice":  "He failed twice, but decided to give it one more ___.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "turn",
        "pos":  "n",
        "he":  "תור (הזדמנות)",
        "def":  "a chance or opportunity to do something, usually in order",
        "example":  "Wait patiently — it will soon be your ___.",
        "practice":  "Each player gets a ___ to roll the dice.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "uncomfortable",
        "pos":  "adj",
        "he":  "לא נוח",
        "def":  "not physically comfortable, or causing unease",
        "example":  "The chairs in the waiting room were really ___.",
        "practice":  "He felt ___ speaking in front of a large audience.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "underneath",
        "pos":  "prep, adv",
        "he":  "מתחת ל-",
        "def":  "in or to a position below or under something",
        "example":  "The cat was hiding ___ the kitchen table.",
        "practice":  "She found her keys ___ a pile of papers.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "understand",
        "pos":  "v",
        "he":  "להבין (רגשית) / לגלות אהדה",
        "def":  "to know how someone feels, or to be sympathetic",
        "example":  "Good friends try to ___ each other\u0027s feelings.",
        "practice":  "A good teacher must ___ students who are struggling.",
        "rec":  false,
        "family":  {
                       "en":  "understanding",
                       "pos":  "n, adj",
                       "he":  "הבנה (רגשית) / מבין/אוהד"
                   }
    },
    {
        "en":  "undo",
        "pos":  "v",
        "he":  "לבטל (פעולה)",
        "def":  "to reverse an action, or to unfasten something",
        "example":  "Press this button to ___ your last change.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "unemployed",
        "pos":  "adj",
        "he":  "מובטל",
        "def":  "without a paid job, although able to work",
        "example":  "Many people became ___ during the economic crisis.",
        "practice":  "He has been ___ since the factory closed last year.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "unexpected",
        "pos":  "adj",
        "he":  "בלתי צפוי",
        "def":  "not expected; surprising",
        "example":  "The team\u0027s victory was completely ___.",
        "practice":  "We received an ___ visit from our relatives abroad.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "up-to-date",
        "pos":  "",
        "he":  "מעודכן",
        "def":  "modern; containing the latest information",
        "example":  "Make sure your software stays ___.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "urgent",
        "pos":  "adj",
        "he":  "דחוף",
        "def":  "needing immediate attention or action",
        "example":  "She received an ___ message from her boss late at night.",
        "practice":  "The hospital needed ___ supplies after the earthquake.",
        "rec":  false,
        "family":  {
                       "en":  "urgently",
                       "pos":  "adv",
                       "he":  "בדחיפות"
                   }
    },
    {
        "en":  "use up sth or use sth up",
        "pos":  "",
        "he":  "לנצל/לכלות (עד הסוף)",
        "def":  "to use all of something until none is left",
        "example":  "We managed to ___ all the printer paper in one week.",
        "practice":  "Don\u0027t ___ your energy before the final stretch of the race.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "virtual reality",
        "pos":  "",
        "he":  "מציאות מדומה",
        "def":  "a computer-created environment that feels real to the user",
        "example":  "The museum offers a ___ tour of ancient Rome.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "vowel",
        "pos":  "n",
        "he":  "תנועה (אות)",
        "def":  "a letter such as a, e, i, o, or u representing a vowel sound",
        "example":  "The word \u0027apple\u0027 has two ___ sounds.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "waste",
        "pos":  "v, adj",
        "he":  "לבזבז",
        "def":  "to use more of something than necessary, without good result",
        "example":  "Please don\u0027t ___ water while brushing your teeth.",
        "practice":  "He tends to ___ money on things he doesn\u0027t need.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "wealth",
        "pos":  "n",
        "he":  "עושר",
        "def":  "a large amount of money or valuable possessions",
        "example":  "The family built their ___ through decades of hard work.",
        "practice":  "The country\u0027s natural resources are a great source of ___.",
        "rec":  false,
        "family":  {
                       "en":  "wealthy",
                       "pos":  "adj",
                       "he":  "עשיר"
                   }
    },
    {
        "en":  "welcome",
        "pos":  "v, adj",
        "he":  "לברך את פני / רצוי",
        "def":  "to greet someone warmly, or something pleasing and wanted",
        "example":  "The manager was happy to ___ the new employees.",
        "practice":  "Any feedback on the project would be ___.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "wherever",
        "pos":  "adv",
        "he":  "בכל מקום ש- / לא משנה איפה",
        "def":  "in or to any place",
        "example":  "She said she would follow him ___ he went.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "(all) on your own",
        "pos":  "",
        "he":  "לבד / בכוחות עצמך",
        "def":  "without any help from other people",
        "example":  "She finished the whole project ___ without any help.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "(at) any minute; any minute now",
        "pos":  "",
        "he":  "בכל רגע / תיכף ומיד",
        "def":  "very soon, almost immediately",
        "example":  "The bus should arrive ___, so get ready.",
        "practice":  "Dad said he\u0027ll be home ___, so let\u0027s set the table.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "(be) in your twenties / 20s /thirties/30s, etc",
        "pos":  "",
        "he":  "להיות בשנות העשרים/השלושים וכו\u0027 לחייך",
        "def":  "to be between 20 and 29 (or 30-39, etc.) years old",
        "example":  "My older sister is ___ and just started her first job.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "absorb",
        "pos":  "v",
        "he":  "לספוג",
        "def":  "to take in a liquid, or to take in information or ideas",
        "example":  "The towel quickly ___ all the water from the floor.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "access",
        "pos":  "n, v",
        "he":  "גישה / לגשת אל",
        "def":  "the way or right to enter, use, or reach something",
        "example":  "Students now have ___ to the school library online.",
        "rec":  true,
        "family":  {
                       "en":  "accessible",
                       "pos":  "adj",
                       "he":  "נגיש"
                   }
    },
    {
        "en":  "ambition",
        "pos":  "n",
        "he":  "שאיפה / שאפתנות",
        "def":  "a strong desire to achieve success or a goal",
        "example":  "Her biggest ___ is to become a doctor one day.",
        "practice":  "Winning the championship was his main ___ this year.",
        "rec":  false,
        "family":  {
                       "en":  "ambitious",
                       "pos":  "adj",
                       "he":  "שאפתן"
                   }
    },
    {
        "en":  "annoy",
        "pos":  "v",
        "he":  "להרגיז / לעצבן",
        "def":  "to make someone feel slightly angry",
        "example":  "Loud music late at night really ___ the neighbors.",
        "practice":  "It will ___ him if you keep interrupting his work.",
        "rec":  false,
        "family":  {
                       "en":  "annoyed / annoying",
                       "pos":  "adj / adj",
                       "he":  "מרוגז / מעצבן"
                   }
    },
    {
        "en":  "argue",
        "pos":  "v",
        "he":  "להתווכח / לטעון",
        "def":  "to give reasons to support an opinion, or to disagree with someone",
        "example":  "The lawyer will ___ that her client is innocent.",
        "practice":  "The two brothers often ___ about whose turn it is to cook.",
        "rec":  false,
        "family":  {
                       "en":  "argument",
                       "pos":  "n",
                       "he":  "ויכוח / טיעון"
                   }
    },
    {
        "en":  "as a matter of fact",
        "pos":  "",
        "he":  "למעשה / האמת היא ש-",
        "def":  "used to add information, or to correct something",
        "example":  "I\u0027m not tired at all; ___, I feel full of energy.",
        "practice":  "___, she already finished her homework an hour ago.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "ashamed",
        "pos":  "adj",
        "he":  "מתבייש",
        "def":  "feeling guilty or embarrassed about something you did",
        "example":  "He felt ___ after he forgot his friend\u0027s birthday.",
        "practice":  "She was ___ of her messy room when guests arrived.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "aside",
        "pos":  "adv",
        "he":  "הצידה",
        "def":  "to one side, or away from the main group or subject",
        "example":  "He stepped ___ to let the elderly woman pass.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "assure",
        "pos":  "v",
        "he":  "להבטיח / להרגיע",
        "def":  "to tell someone confidently that something is true",
        "example":  "The doctor tried to ___ the family that the surgery went well.",
        "rec":  true,
        "family":  {
                       "en":  "assurance",
                       "pos":  "n",
                       "he":  "הבטחה"
                   }
    },
    {
        "en":  "at his/its, etc. best",
        "pos":  "",
        "he":  "במיטבו",
        "def":  "performing or looking as well as possible",
        "example":  "The team played ___ during the final match.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "attraction",
        "pos":  "n",
        "he":  "אטרקציה / משיכה",
        "def":  "something interesting that people want to visit or see; a feeling of liking",
        "example":  "The old castle is the main ___ in the town.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "awareness",
        "pos":  "n",
        "he":  "מודעות",
        "def":  "knowledge or understanding that something exists or is important",
        "example":  "The campaign raised public ___ about climate change.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "barely",
        "pos":  "adv",
        "he":  "בקושי",
        "def":  "only just; almost not",
        "example":  "She was so tired she could ___ keep her eyes open.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "barrier",
        "pos":  "n",
        "he":  "מחסום / מכשול",
        "def":  "something that prevents movement or progress, or blocks the way",
        "example":  "The language ___ made it hard for him to find a job abroad.",
        "practice":  "Police put up a ___ to stop cars from entering the street.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "be (just) about to do sth",
        "pos":  "",
        "he":  "להיות עומד/ת לעשות משהו (ממש בקרוב)",
        "def":  "to be ready to do something very soon",
        "example":  "I was ___ to leave when the phone rang.",
        "practice":  "The plane was ___ to take off when the storm started.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "be out of sth",
        "pos":  "",
        "he":  "לגמור/להיגמר לו משהו (מלאי)",
        "def":  "to have none of something left",
        "example":  "We are ___ milk, so I need to buy some more.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "beat",
        "pos":  "n",
        "he":  "קצב",
        "def":  "a regular rhythm in music or in the heart",
        "example":  "The song has a strong ___ that makes you want to dance.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "bend",
        "pos":  "v, n",
        "he":  "לכופף / כפיפה",
        "def":  "to make something curved, or a curved part of something",
        "example":  "Please ___ your knees slightly before you jump.",
        "practice":  "There is a sharp ___ in the road ahead, so slow down.",
        "rec":  false,
        "family":  {
                       "en":  "bent",
                       "pos":  "adj",
                       "he":  "כפוף / עקום"
                   }
    },
    {
        "en":  "biology",
        "pos":  "n",
        "he":  "ביולוגיה",
        "def":  "the scientific study of living things",
        "example":  "We learned about the human heart in our ___ class.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "bitter",
        "pos":  "adj",
        "he":  "מריר / מר (גם במובן רגשי)",
        "def":  "having a sharp, unpleasant taste; or feeling angry and upset about something unfair",
        "example":  "Dark chocolate has a slightly ___ taste.",
        "practice":  "He still feels ___ about losing his job last year.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "bold",
        "pos":  "adj",
        "he":  "נועז / אמיץ",
        "def":  "confident and willing to take risks",
        "example":  "She made a ___ decision to start her own business.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "bother",
        "pos":  "v",
        "he":  "להטריד / להפריע",
        "def":  "to make an effort to do something, or to annoy someone",
        "example":  "Don\u0027t ___ waking him up, he needs to sleep.",
        "practice":  "The noise from the construction site really ___ the neighbors.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "bottom",
        "pos":  "adj",
        "he":  "תחתון",
        "def":  "being at the lowest part or level of something",
        "example":  "The ___ shelf is too low for small children to reach.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "breeze",
        "pos":  "n",
        "he":  "משב רוח קל",
        "def":  "a gentle, light wind",
        "example":  "A cool ___ blew through the open window.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "brilliant",
        "pos":  "adj",
        "he":  "מבריק / נפלא",
        "def":  "extremely bright, or extremely clever and impressive",
        "example":  "The sky was full of ___ colors at sunset.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "can tell",
        "pos":  "",
        "he":  "אפשר להבחין / לדעת",
        "def":  "to be able to know or recognize something",
        "example":  "You ___ he\u0027s nervous just by looking at his face.",
        "practice":  "I ___ that something is bothering her today.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "capacity",
        "pos":  "n",
        "he":  "קיבולת / יכולת",
        "def":  "the amount that something can hold or produce",
        "example":  "The stadium has a seating ___ of fifty thousand people.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "cash",
        "pos":  "v",
        "he":  "לפדות (צ\u0027ק)",
        "def":  "to exchange a check for money",
        "example":  "He went to the bank to ___ his paycheck.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "capture",
        "pos":  "v",
        "he":  "ללכוד / לתפוס",
        "def":  "to catch a person, animal, or to record something like an image",
        "example":  "The photographer managed to ___ the eagle in flight.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "casual",
        "pos":  "adj",
        "he":  "לא רשמי / קליל",
        "def":  "relaxed and informal, not formal",
        "example":  "You can wear ___ clothes to the Friday party.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "ceremony",
        "pos":  "n",
        "he":  "טקס",
        "def":  "a formal event held to celebrate or mark something important",
        "example":  "The graduation ___ will take place in the main hall.",
        "practice":  "They held a small ___ to open the new hospital wing.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "chairperson",
        "pos":  "n",
        "he":  "יו\"ר",
        "def":  "a person in charge of a meeting or an organization",
        "example":  "The ___ opened the meeting by welcoming all the members.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "chase",
        "pos":  "v, n",
        "he":  "לרדוף / מרדף",
        "def":  "to run after someone or something to catch them",
        "example":  "The dog started to ___ the cat across the yard.",
        "practice":  "The movie ends with an exciting car ___ through the city.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "cheat",
        "pos":  "v, n",
        "he":  "לרמות / רמאות",
        "def":  "to act dishonestly in order to gain an advantage",
        "example":  "He got caught trying to ___ on the final exam.",
        "practice":  "It felt like a total ___ when the referee missed the foul.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "classic",
        "pos":  "adj",
        "he":  "קלאסי",
        "def":  "considered excellent and having lasting value or importance",
        "example":  "This movie is a ___ example of a great love story.",
        "practice":  "She wore a ___ black dress to the interview.",
        "rec":  false,
        "family":  {
                       "en":  "classical",
                       "pos":  "adj",
                       "he":  "קלאסי (במוזיקה/אמנות)"
                   }
    },
    {
        "en":  "clinic",
        "pos":  "n",
        "he":  "מרפאה",
        "def":  "a place where people go for medical treatment or advice",
        "example":  "She works as a nurse at the local ___.",
        "rec":  true,
        "family":  {
                       "en":  "clinical",
                       "pos":  "adj",
                       "he":  "קליני"
                   }
    },
    {
        "en":  "coach",
        "pos":  "n, v",
        "he":  "מאמן / לאמן",
        "def":  "a person who trains a sports team or person",
        "example":  "Our basketball ___ taught us a new strategy this week.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "collector",
        "pos":  "n",
        "he":  "אספן",
        "def":  "a person who collects things, such as stamps or coins, as a hobby",
        "example":  "My grandfather is a passionate stamp ___.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "correspond",
        "pos":  "v",
        "he":  "להתכתב / להתאים",
        "def":  "to exchange letters regularly, or to match something",
        "example":  "They continued to ___ by email after the trip ended.",
        "practice":  "The two reports don\u0027t ___; the numbers are different.",
        "rec":  false,
        "family":  {
                       "en":  "correspondent / correspondence",
                       "pos":  "n / n",
                       "he":  "כתב / התכתבות"
                   }
    },
    {
        "en":  "costume",
        "pos":  "n",
        "he":  "תחפושת",
        "def":  "clothes worn to look like someone or something else, often for a show",
        "example":  "She wore a pirate ___ to the Purim party.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "courage",
        "pos":  "n",
        "he":  "אומץ",
        "def":  "the ability to do something frightening or difficult",
        "example":  "It took a lot of ___ to speak in front of the whole school.",
        "practice":  "The firefighter showed great ___ when he ran into the burning building.",
        "rec":  false,
        "family":  {
                       "en":  "courageous",
                       "pos":  "adj",
                       "he":  "אמיץ"
                   }
    },
    {
        "en":  "cover",
        "pos":  "v",
        "he":  "לכסות / לסקר (בחדשות)",
        "def":  "to put something over another thing, or to report on an event",
        "example":  "Several TV channels will ___ the election results tonight.",
        "rec":  true,
        "family":  {
                       "en":  "coverage",
                       "pos":  "n",
                       "he":  "סיקור"
                   }
    },
    {
        "en":  "cure",
        "pos":  "v, n",
        "he":  "לרפא / תרופה",
        "def":  "to make an illness go away, or a treatment that does this",
        "example":  "Scientists are working hard to ___ the disease.",
        "practice":  "There is still no known ___ for the common cold.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "cyberbullying",
        "pos":  "n",
        "he":  "בריונות ברשת",
        "def":  "using the internet or phones to hurt or frighten someone",
        "example":  "The school started a program to stop ___ among students.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "cycle",
        "pos":  "n, v",
        "he":  "אופניים / לרכוב על אופניים",
        "def":  "a bicycle, to ride a bicycle, or a series of events that repeat",
        "example":  "He likes to ___ to school every morning instead of taking the bus.",
        "rec":  true,
        "family":  {
                       "en":  "cyclist",
                       "pos":  "",
                       "he":  "רוכב אופניים"
                   }
    },
    {
        "en":  "deaf",
        "pos":  "adj",
        "he":  "חירש / כבד שמיעה",
        "def":  "unable to hear, partly or completely",
        "example":  "He has been ___ since birth and uses sign language.",
        "practice":  "The old man is almost completely ___ in one ear.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "debt",
        "pos":  "n",
        "he":  "חוב",
        "def":  "money that is owed to someone else",
        "example":  "She worked hard to pay off her student ___.",
        "practice":  "The company is deeply in ___ after years of losses.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "decorate",
        "pos":  "v",
        "he":  "לקשט",
        "def":  "to make something look more attractive by adding things to it",
        "example":  "We spent the afternoon trying to ___ the classroom for the party.",
        "practice":  "They plan to ___ the living room with new paintings.",
        "rec":  false,
        "family":  {
                       "en":  "decoration",
                       "pos":  "n",
                       "he":  "קישוט"
                   }
    },
    {
        "en":  "dedicate",
        "pos":  "v",
        "he":  "להקדיש",
        "def":  "to give your time or effort completely to something, or to name something in someone\u0027s honor",
        "example":  "The singer wanted to ___ this song to her late grandmother.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "departure",
        "pos":  "n",
        "he":  "יציאה / המראה / עזיבה",
        "def":  "the act of leaving a place, especially at the start of a journey",
        "example":  "Our flight\u0027s ___ was delayed by two hours because of the storm.",
        "practice":  "Passengers should arrive two hours before the train\u0027s ___.",
        "rec":  false,
        "family":  {
                       "en":  "depart",
                       "pos":  "v",
                       "he":  "לצאת / לעזוב"
                   }
    },
    {
        "en":  "deposit",
        "pos":  "n",
        "he":  "פיקדון / מקדמה",
        "def":  "a sum of money paid into a bank account, or as a first payment",
        "example":  "We had to pay a ___ before the landlord gave us the keys.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "deserve",
        "pos":  "v",
        "he":  "להיות ראוי ל-",
        "def":  "to have earned something because of your actions or qualities",
        "example":  "After working so hard, you really ___ this vacation.",
        "practice":  "The player\u0027s goal ___ a place in the highlight reel.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "destination",
        "pos":  "n",
        "he":  "יעד",
        "def":  "the place where someone or something is going",
        "example":  "Paris has always been a popular ___ for tourists.",
        "practice":  "After a long drive, we finally reached our ___.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "direct",
        "pos":  "v",
        "he":  "לביים / לכוון",
        "def":  "to control or guide a film, play, or activity",
        "example":  "She hopes to ___ her first full-length movie next year.",
        "rec":  true,
        "family":  {
                       "en":  "direction",
                       "pos":  "n",
                       "he":  "כיוון / בימוי"
                   }
    },
    {
        "en":  "disabled",
        "pos":  "adj, n",
        "he":  "נכה / בעל מוגבלות",
        "def":  "having a physical or mental condition that limits movement or activity",
        "example":  "The building has a special ramp for ___ visitors.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "dispute",
        "pos":  "n",
        "he":  "מחלוקת / סכסוך",
        "def":  "a disagreement or argument between people or groups",
        "example":  "The two countries are in a long ___ over the border.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "distinguish",
        "pos":  "v",
        "he":  "להבחין / להבדיל",
        "def":  "to recognize the difference between two things",
        "example":  "It\u0027s hard to ___ between the twins; they look identical.",
        "practice":  "A good doctor must ___ between similar symptoms of different illnesses.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "disturb",
        "pos":  "v",
        "he":  "להפריע",
        "def":  "to interrupt someone, or to upset the normal state of something",
        "example":  "Please don\u0027t ___ your sister while she\u0027s studying.",
        "practice":  "Loud construction noise can ___ the whole neighborhood.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "do a good/excellent, etc. job",
        "pos":  "",
        "he":  "לעשות עבודה טובה/מצוינת וכו\u0027",
        "def":  "to perform a task well",
        "example":  "The new intern really ___ on her first project.",
        "practice":  "The volunteers ___ cleaning up the beach last weekend.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "dozen",
        "pos":  "n",
        "he":  "תריסר",
        "def":  "a group of twelve things",
        "example":  "She bought a ___ eggs at the market.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "draft",
        "pos":  "n",
        "he":  "טיוטה",
        "def":  "an early, unfinished version of a piece of writing",
        "example":  "I wrote a first ___ of my essay before showing it to the teacher.",
        "practice":  "He sent the ___ of the report to his manager for feedback.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "dramatic",
        "pos":  "adj",
        "he":  "דרמטי",
        "def":  "sudden and surprising, or related to plays and theater",
        "example":  "There was a ___ change in the weather this afternoon.",
        "practice":  "Her performance in the school play was truly ___.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "earth",
        "pos":  "n",
        "he":  "אדמה / כדור הארץ",
        "def":  "the planet we live on, or the soil in the ground",
        "example":  "The farmer dug deep into the ___ to plant the seeds.",
        "practice":  "Photos from space show how blue the ___ looks.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "earthquake",
        "pos":  "n",
        "he":  "רעידת אדמה",
        "def":  "a sudden, violent shaking of the ground",
        "example":  "A powerful ___ destroyed many buildings in the city.",
        "practice":  "Students practiced what to do during an ___ drill.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "elderly",
        "pos":  "adj",
        "he":  "קשיש / מבוגר",
        "def":  "old, used as a polite word for old people",
        "example":  "We help our ___ neighbor carry her groceries every week.",
        "practice":  "The clinic offers free checkups for ___ patients.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "enter",
        "pos":  "v",
        "he":  "להיכנס / להזין (מידע)",
        "def":  "to come into a place, or to type information into a computer",
        "example":  "Please ___ your password to access your account.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "episode",
        "pos":  "n",
        "he":  "פרק (בסדרה)",
        "def":  "one part of a TV or radio series",
        "example":  "We watched the first ___ of the new show last night.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "equal",
        "pos":  "v",
        "he":  "להשתוות ל- / שווה",
        "def":  "to be the same in amount, number, or value as something else",
        "example":  "Two plus two will always ___ four.",
        "practice":  "No prize can ___ the joy of helping someone in need.",
        "rec":  false,
        "family":  {
                       "en":  "equality",
                       "pos":  "n",
                       "he":  "שוויון"
                   }
    },
    {
        "en":  "escape",
        "pos":  "n",
        "he":  "בריחה / מילוט",
        "def":  "an act of getting away from a dangerous or unpleasant place",
        "example":  "The prisoner\u0027s ___ shocked the whole town.",
        "practice":  "Reading is her favorite ___ from a stressful day.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "fare",
        "pos":  "n",
        "he":  "דמי נסיעה",
        "def":  "the money you pay to travel by bus, train, taxi, etc.",
        "example":  "The bus ___ increased by two shekels last month.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "fire",
        "pos":  "v",
        "he":  "לפטר",
        "def":  "to make someone leave their job",
        "example":  "The manager had to ___ two workers due to budget cuts.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "firm",
        "pos":  "adj",
        "he":  "יציב / נחוש",
        "def":  "solid and not easily moved, or showing determination",
        "example":  "The mattress feels quite ___, which is good for your back.",
        "rec":  true,
        "family":  {
                       "en":  "firmly",
                       "pos":  "adv",
                       "he":  "בתוקף / ביציבות"
                   }
    },
    {
        "en":  "float",
        "pos":  "v",
        "he":  "לצוף",
        "def":  "to stay on the surface of a liquid without sinking",
        "example":  "Wood will ___ on water because it is lighter.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "fold",
        "pos":  "v",
        "he":  "לקפל",
        "def":  "to bend something, such as paper or cloth, over itself",
        "example":  "Can you help me ___ the laundry before dinner?",
        "practice":  "He learned to ___ a paper airplane in art class.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "follow",
        "pos":  "v",
        "he":  "לעקוב אחרי / להבין",
        "def":  "to go after someone, or to understand what is being said",
        "example":  "Sorry, could you repeat that? I didn\u0027t ___ what you meant.",
        "practice":  "The dog loves to ___ its owner everywhere around the house.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "for the sake of sth/sb; for sth\u0027s/sb\u0027s sake",
        "pos":  "",
        "he":  "למען",
        "def":  "in order to help or please someone or something",
        "example":  "She moved closer to her parents ___ her children\u0027s sake.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "formal",
        "pos":  "adj",
        "he":  "רשמי",
        "def":  "serious and following accepted rules, often used for official occasions",
        "example":  "Please wear ___ clothing to the award ceremony.",
        "practice":  "He sent a ___ letter of complaint to the company.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "former",
        "pos":  "adj",
        "he":  "לשעבר",
        "def":  "having been something in the past, but not now",
        "example":  "The ___ president gave a speech at the university.",
        "practice":  "She is a ___ student of this very school.",
        "rec":  false,
        "family":  {
                       "en":  "formerly",
                       "pos":  "adv",
                       "he":  "בעבר / לשעבר"
                   }
    },
    {
        "en":  "fortune",
        "pos":  "n",
        "he":  "הון / מזל",
        "def":  "a very large amount of money, or chance/luck",
        "example":  "He made a ___ selling his invention worldwide.",
        "practice":  "She wished her friend good ___ before the exam.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "free",
        "pos":  "adj, adv",
        "he":  "חופשי / בחינם",
        "def":  "able to act without control by others, or costing nothing",
        "example":  "Entrance to the museum is ___ for students on Fridays.",
        "practice":  "After years in a cage, the bird was finally set ___.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "free will",
        "pos":  "",
        "he":  "רצון חופשי",
        "def":  "the ability to choose your actions without being forced",
        "example":  "He said he joined the army of his own ___.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "frozen",
        "pos":  "adj",
        "he":  "קפוא",
        "def":  "made extremely cold and solid, usually by ice",
        "example":  "The lake was completely ___ by the end of January.",
        "practice":  "We bought some ___ vegetables for a quick dinner.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "generous",
        "pos":  "adj",
        "he":  "נדיב",
        "def":  "willing to give more money, help, or time than is expected",
        "example":  "It was very ___ of him to donate his prize money to charity.",
        "practice":  "Our neighbor is always ___ with her homemade cookies.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "get",
        "pos":  "v",
        "he":  "לענות (לטלפון/לדלת)",
        "def":  "to answer the phone or the door",
        "example":  "Can you ___ the phone? I\u0027m in the shower.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "get in touch",
        "pos":  "",
        "he":  "ליצור קשר",
        "def":  "to communicate with someone, for example by phone or email",
        "example":  "Please ___ with me as soon as you arrive.",
        "practice":  "She tried to ___ with her old friend after many years.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "give in/up",
        "pos":  "",
        "he":  "להיכנע / לוותר",
        "def":  "to stop trying, or to finally agree to something after resisting",
        "example":  "Even when it got hard, the runner refused to ___.",
        "practice":  "After hours of arguing, he finally decided to ___.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "give up sth or give sth up",
        "pos":  "",
        "he":  "לוותר על משהו",
        "def":  "to stop doing or having something",
        "example":  "She decided to ___ sugar for a whole month.",
        "practice":  "He had to ___ his dream job to care for his family.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "go ahead",
        "pos":  "",
        "he":  "להמשיך / בבקשה (תתחיל)",
        "def":  "used to give permission to do something, or to proceed with a plan",
        "example":  "If you want to ask a question, ___.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "grab",
        "pos":  "v",
        "he":  "לתפוס / לחטוף",
        "def":  "to take hold of something suddenly and firmly",
        "example":  "She had to ___ the railing to keep from falling.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "grateful",
        "pos":  "adj",
        "he":  "אסיר תודה",
        "def":  "feeling thankful for something someone did",
        "example":  "I am so ___ for all your help this year.",
        "practice":  "The rescued hikers were ___ to the volunteers who found them.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "hardware",
        "pos":  "n,v",
        "he":  "חומרה (מחשב)",
        "def":  "the physical parts of a computer, as opposed to its software",
        "example":  "The old computer\u0027s ___ couldn\u0027t run the new program.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "headquarters",
        "pos":  "n",
        "he":  "מטה / משרד ראשי",
        "def":  "the main office of a company or organization",
        "example":  "The company\u0027s ___ is located in Tel Aviv.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "here you are/here it is, etc.",
        "pos":  "",
        "he":  "הנה, בבקשה",
        "def":  "said when giving something to someone",
        "example":  "___, I hope you enjoy the book.",
        "practice":  "___, this is the form you asked for.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "hold up / hold up sb/sth or hold sb/sth up",
        "pos":  "",
        "he":  "לעכב / לתמוך",
        "def":  "to delay someone or something, or to support something physically",
        "example":  "Heavy traffic will ___ our arrival by at least an hour.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "honesty",
        "pos":  "n",
        "he":  "כנות / יושר",
        "def":  "the quality of being truthful and sincere",
        "example":  "The teacher values ___ more than getting the right answer.",
        "practice":  "With complete ___, I don\u0027t think the plan will work.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "idiom",
        "pos":  "n",
        "he":  "ניב / ביטוי",
        "def":  "a group of words whose meaning is different from the individual words",
        "example":  "\"Break a leg\" is a common English ___ meaning good luck.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "in turn",
        "pos":  "",
        "he":  "בתורו / מצידו",
        "def":  "one after another, in order; or as a result",
        "example":  "Each student answered the question ___.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "incident",
        "pos":  "n",
        "he":  "אירוע / תקרית",
        "def":  "something that happens, especially something unusual or unpleasant",
        "example":  "There was a strange ___ at the station yesterday.",
        "practice":  "The teacher reported the ___ to the school principal.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "laugh",
        "pos":  "n",
        "he":  "צחוק / צחקוק",
        "def":  "the sound or act of laughing",
        "example":  "Her joke got a big ___ from the whole class.",
        "rec":  true,
        "family":  {
                       "en":  "laughter",
                       "pos":  "n",
                       "he":  "צחוק (כשם עצם כללי)"
                   }
    },
    {
        "en":  "layer",
        "pos":  "n",
        "he":  "שכבה",
        "def":  "an amount of material covering a surface, or one level of several",
        "example":  "There was a thin ___ of snow on the roof.",
        "practice":  "The cake has a ___ of chocolate cream between each slice.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "leave behind sb/sth or leave sb/sth behind",
        "pos":  "",
        "he":  "להשאיר מאחור",
        "def":  "to not take someone or something with you when you go",
        "example":  "He forgot his umbrella and had to ___ it at the cafe.",
        "practice":  "The soldiers promised never to ___ a wounded comrade.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "let out sb/sth or let sb/sth out",
        "pos":  "",
        "he":  "לשחרר / להוציא החוצה",
        "def":  "to allow someone or something to leave a place",
        "example":  "Could you ___ the dog before we leave the house?",
        "practice":  "The teacher decided to ___ the class early today.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "let sb/sth in / past / through, etc",
        "pos":  "",
        "he":  "לתת למישהו/למשהו להיכנס/לעבור וכו\u0027",
        "def":  "to allow someone or something to enter or pass",
        "example":  "The guard refused to ___ anyone without an ID card.",
        "practice":  "She opened the window to ___ some fresh air.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "light",
        "pos":  "v",
        "he":  "להדליק",
        "def":  "to make something start burning or start shining",
        "example":  "He used a match to ___ the candles on the cake.",
        "practice":  "Please ___ the fire before it gets too cold outside.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "lightly",
        "pos":  "adv",
        "he":  "קלות / באופן קל",
        "def":  "gently, or to a small degree",
        "example":  "She tapped ___ on the door before entering.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "liquid",
        "pos":  "n, adj",
        "he":  "נוזל / נוזלי",
        "def":  "a substance that flows freely, like water",
        "example":  "Water turns into ___ when ice melts.",
        "practice":  "Make sure the medicine stays in ___ form, not frozen.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "lively",
        "pos":  "adj",
        "he":  "חי / עליז / תוסס",
        "def":  "full of energy and enthusiasm",
        "example":  "The market was ___ with music and colorful stalls.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "load",
        "pos":  "v",
        "he":  "לטעון (קובץ/עמוד)",
        "def":  "to put data into a computer\u0027s memory, or to put things onto something",
        "example":  "It took a few seconds for the website to ___ completely.",
        "rec":  true,
        "family":  {
                       "en":  "download / upload",
                       "pos":  "v / v",
                       "he":  "להוריד (קובץ) / להעלות (קובץ)"
                   }
    },
    {
        "en":  "loan",
        "pos":  "n, v",
        "he":  "הלוואה / להלוות",
        "def":  "an amount of money that is borrowed and usually paid back with interest",
        "example":  "They took out a ___ to buy their first apartment.",
        "practice":  "The bank agreed to ___ him the money for his studies.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "log in/on",
        "pos":  "",
        "he":  "להתחבר (למערכת)",
        "def":  "to connect to a computer system, usually with a password",
        "example":  "You need to ___ before you can see your grades.",
        "practice":  "I forgot my password and couldn\u0027t ___ to my account.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "log off/out",
        "pos":  "",
        "he":  "להתנתק (ממערכת)",
        "def":  "to disconnect from a computer system",
        "example":  "Remember to ___ when you finish using the shared computer.",
        "practice":  "She forgot to ___, so her account stayed open all night.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "lonely",
        "pos":  "adj",
        "he":  "בודד",
        "def":  "feeling sad because you are alone or have no friends",
        "example":  "He felt ___ after moving to a new city.",
        "practice":  "Many elderly people feel ___ during the holidays.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "look",
        "pos":  "n",
        "he":  "מראה / הבעה",
        "def":  "the appearance of someone or something, or a glance",
        "example":  "She gave him a worried ___ before leaving the room.",
        "practice":  "The new building has a modern, clean ___.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "lose interest / patience, etc",
        "pos":  "",
        "he":  "לאבד עניין/סבלנות וכו\u0027",
        "def":  "to stop being interested in or tolerant of something",
        "example":  "The students started to ___ after an hour of lectures.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "maker",
        "pos":  "n",
        "he":  "יצרן",
        "def":  "a person or company that makes something",
        "example":  "The car ___ announced a new electric model this year.",
        "practice":  "She works for a famous shoe ___ in Italy.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "mark",
        "pos":  "n",
        "he":  "כתם / סימן",
        "def":  "a small line, dot, or stain on a surface",
        "example":  "There was a dark ___ on the wall where the picture used to hang.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "marvelous",
        "pos":  "adj",
        "he":  "נפלא / מדהים",
        "def":  "extremely good or pleasing",
        "example":  "We had a ___ time at the beach this weekend.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "mayor",
        "pos":  "n",
        "he":  "ראש עיר",
        "def":  "the elected leader of a town or city",
        "example":  "The ___ gave a speech at the opening of the new park.",
        "practice":  "Citizens voted for a new ___ last month.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "melt",
        "pos":  "v",
        "he":  "להימס",
        "def":  "to change from solid to liquid because of heat",
        "example":  "The ice cream started to ___ in the hot sun.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "membership",
        "pos":  "n",
        "he":  "חברות (בארגון/מועדון)",
        "def":  "the state of belonging to a club, group, or organization",
        "example":  "He bought a yearly gym ___ in January.",
        "practice":  "The club offers a discount on ___ for students.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "message",
        "pos":  "n",
        "he":  "מסר / הודעה",
        "def":  "a piece of information sent to someone, or an important idea in a story",
        "example":  "The movie\u0027s ___ is about the importance of family.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "might as well",
        "pos":  "",
        "he":  "אפשר באותה מידה / כדאי כבר",
        "def":  "used to say that it would be reasonable to do something",
        "example":  "Since we\u0027re already here, we ___ stay for dinner.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "miss",
        "pos":  "n",
        "he":  "החטאה / פספוס",
        "def":  "a failure to hit, reach, or catch something",
        "example":  "His shot at the goal was a near ___.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "modest",
        "pos":  "adj",
        "he":  "צנוע",
        "def":  "not talking much about your own abilities or success",
        "example":  "Despite winning the prize, she stayed ___ about her success.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "mood",
        "pos":  "n",
        "he":  "מצב רוח",
        "def":  "the way someone feels at a particular time",
        "example":  "He\u0027s been in a bad ___ all morning.",
        "practice":  "Sunny weather always puts me in a good ___.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "name",
        "pos":  "n",
        "he":  "שם / מוניטין",
        "def":  "the reputation that a person or company has",
        "example":  "The restaurant has built a good ___ for its service.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "off",
        "pos":  "adv",
        "he":  "בהנחה / לא בעבודה",
        "def":  "reduced in price, or not working on a particular day",
        "example":  "The store is offering twenty percent ___ all shoes this week.",
        "rec":  true,
        "family":  {
                       "en":  "off",
                       "pos":  "",
                       "he":  "כבוי (מכשיר)"
                   }
    },
    {
        "en":  "offense",
        "pos":  "n",
        "he":  "עבירה (פלילית)",
        "def":  "an illegal act; a crime",
        "example":  "Driving without a license is a serious ___.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "(every) once in a while",
        "pos":  "",
        "he":  "מדי פעם",
        "def":  "sometimes, but not often",
        "example":  "We like to visit our grandparents ___.",
        "practice":  "He still calls his old roommate ___.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "or so",
        "pos":  "",
        "he":  "בערך / פחות או יותר",
        "def":  "used after a number or amount to show it\u0027s approximate",
        "example":  "There were fifty people ___ at the party.",
        "practice":  "The trip will take an hour ___ by car.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "organic",
        "pos":  "adj",
        "he":  "אורגני",
        "def":  "produced without artificial chemicals, especially food",
        "example":  "They only buy ___ vegetables from the farmers market.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "pace",
        "pos":  "n",
        "he":  "קצב",
        "def":  "the speed at which something happens or moves",
        "example":  "The runner kept a steady ___ throughout the race.",
        "practice":  "Technology is changing at an incredible ___ these days.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "partner",
        "pos":  "n",
        "he":  "שותף / בן/בת זוג",
        "def":  "a person you work with or are closely connected to, such as in business",
        "example":  "She started the company with her business ___ ten years ago.",
        "rec":  true,
        "family":  {
                       "en":  "partnership",
                       "pos":  "n",
                       "he":  "שותפות"
                   }
    },
    {
        "en":  "pause",
        "pos":  "n",
        "he":  "הפסקה קצרה",
        "def":  "a short stop in speaking, acting, or an activity",
        "example":  "She took a short ___ before answering the difficult question.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "peaceful",
        "pos":  "adj",
        "he":  "שליו / שקט",
        "def":  "calm and quiet, without violence or disturbance",
        "example":  "The village by the lake was wonderfully ___.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "plot",
        "pos":  "n",
        "he":  "עלילה",
        "def":  "the main events of a story, or a secret plan",
        "example":  "The ___ of the movie was full of unexpected twists.",
        "practice":  "The police discovered a ___ to rob the bank.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "position",
        "pos":  "n",
        "he":  "עמדה / תפקיד",
        "def":  "a job or rank, or the place someone plays in a sport",
        "example":  "He plays the ___ of goalkeeper on his school team.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "pour",
        "pos":  "v",
        "he":  "לשפוך / לרדת בעוצמה (גשם)",
        "def":  "to make a liquid flow from a container, or to rain heavily",
        "example":  "Can you ___ me a glass of water, please?",
        "practice":  "Rain started to ___ down just as we left the house.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "powder",
        "pos":  "n",
        "he":  "אבקה",
        "def":  "a dry substance made of very fine particles",
        "example":  "She added a spoon of cocoa ___ to the cake mix.",
        "practice":  "The baby\u0027s skin was covered with a soft ___.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "preposition",
        "pos":  "n",
        "he":  "מילת יחס",
        "def":  "a word such as \u0027in\u0027, \u0027on\u0027, or \u0027at\u0027 that shows a relationship",
        "example":  "Choosing the correct ___ in English can be tricky.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "pride",
        "pos":  "n",
        "he":  "גאווה",
        "def":  "a feeling of satisfaction about your own or others\u0027 achievements",
        "example":  "He felt great ___ when his daughter graduated from college.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "punish",
        "pos":  "v",
        "he":  "להעניש",
        "def":  "to make someone suffer because they did something wrong",
        "example":  "The teacher decided to ___ the students who copied the test.",
        "practice":  "Parents shouldn\u0027t ___ children too harshly for small mistakes.",
        "rec":  false,
        "family":  {
                       "en":  "punishment",
                       "pos":  "n",
                       "he":  "עונש"
                   }
    },
    {
        "en":  "quarrel",
        "pos":  "n, v",
        "he":  "מריבה / להתקוטט",
        "def":  "an angry argument, especially between friends or family",
        "example":  "The sisters had a small ___ over who would use the car.",
        "practice":  "The neighbors tend to ___ about parking spaces.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "quit",
        "pos":  "v",
        "he":  "להפסיק / להתפטר",
        "def":  "to stop doing something, or to leave a job",
        "example":  "He decided to ___ his job and travel the world.",
        "practice":  "She promised to ___ smoking after the new year.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "race",
        "pos":  "n",
        "he":  "מרוץ / גזע (אתני)",
        "def":  "a competition of speed, or a group of people with shared ancestry",
        "example":  "He won first place in the school running ___.",
        "rec":  true,
        "family":  {
                       "en":  "racial",
                       "pos":  "adj",
                       "he":  "גזעי / אתני"
                   }
    },
    {
        "en":  "raw",
        "pos":  "adj",
        "he":  "גולמי / נא (לא מבושל)",
        "def":  "not cooked, or in its natural, unprocessed state",
        "example":  "Sushi is often made with ___ fish.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "reassure",
        "pos":  "v",
        "he":  "להרגיע / לתת ביטחון",
        "def":  "to say or do something to remove someone\u0027s doubts or fears",
        "example":  "The pilot tried to ___ the nervous passengers during the turbulence.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "remain calm/open, etc",
        "pos":  "",
        "he":  "להישאר רגוע/פתוח וכו\u0027",
        "def":  "to continue to be in a certain state",
        "example":  "Try to ___ during the exam, even if a question seems hard.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "reserve",
        "pos":  "v",
        "he":  "להזמין מראש / לשמור",
        "def":  "to arrange for something to be kept for you in advance",
        "example":  "We need to ___ a table at the restaurant for Friday night.",
        "rec":  true,
        "family":  {
                       "en":  "reservation",
                       "pos":  "n",
                       "he":  "הזמנה מראש"
                   }
    },
    {
        "en":  "server",
        "pos":  "n",
        "he":  "שרת (מחשב)",
        "def":  "a computer that provides data or services to other computers",
        "example":  "The website crashed because the ___ was overloaded.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "shame",
        "pos":  "n",
        "he":  "בושה / חבל",
        "def":  "a painful feeling caused by guilt, or something regrettable",
        "example":  "It\u0027s a ___ that you couldn\u0027t come to the party.",
        "practice":  "He felt deep ___ after lying to his best friend.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "shaming",
        "pos":  "n",
        "he":  "ביוש",
        "def":  "the act of criticizing someone publicly to make them feel ashamed",
        "example":  "Online ___ can seriously hurt a person\u0027s mental health.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "shelter",
        "pos":  "n, v",
        "he":  "מחסה / להעניק מחסה",
        "def":  "a place giving protection from danger or bad weather",
        "example":  "They found ___ from the storm under a large tree.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "show up",
        "pos":  "",
        "he":  "להופיע / להגיע",
        "def":  "to arrive at a place, especially when expected",
        "example":  "He promised to ___ on time, but he was late again.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "side",
        "pos":  "n",
        "he":  "צד (גם במובן תכונה)",
        "def":  "one part or aspect of something or someone\u0027s character",
        "example":  "There\u0027s a surprisingly kind ___ to her that few people see.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "sign",
        "pos":  "v",
        "he":  "לחתום",
        "def":  "to write your name on a document to show agreement",
        "example":  "Please ___ the form at the bottom of the page.",
        "practice":  "He refused to ___ the contract until he read it fully.",
        "rec":  false,
        "family":  {
                       "en":  "signature",
                       "pos":  "n",
                       "he":  "חתימה"
                   }
    },
    {
        "en":  "signal",
        "pos":  "n",
        "he":  "אות / רמזור",
        "def":  "a sign, gesture, or sound that gives information or an instruction",
        "example":  "The train stopped because of a red ___.",
        "practice":  "She gave a ___ with her hand to turn left.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "sink",
        "pos":  "v",
        "he":  "לטבוע",
        "def":  "to go down below the surface of water or another liquid",
        "example":  "The old ship began to ___ after hitting the rock.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "slip",
        "pos":  "v, n",
        "he":  "להחליק / החלקה",
        "def":  "to slide and lose your balance, or a small mistake",
        "example":  "Be careful not to ___ on the wet floor.",
        "practice":  "She made a small ___ when reading the speech aloud.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "smart",
        "pos":  "adj",
        "he":  "חכם / אלגנטי",
        "def":  "intelligent, or neat and stylish in appearance",
        "example":  "He\u0027s too ___ to fall for such a simple trick.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "smooth",
        "pos":  "adj",
        "he":  "חלק",
        "def":  "having an even surface, without bumps; or happening without problems",
        "example":  "The baby\u0027s skin felt incredibly ___.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "so did we/so have I/so is mine, etc.",
        "pos":  "",
        "he":  "גם... (מבנה חיוב משותף)",
        "def":  "used to say that another person or thing did, has, or is the same",
        "example":  "\"We went camping last month.\" \"___, for the first time!\"",
        "practice":  "\"He already bought his ticket.\" \"___, last week.\"",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "some kind of",
        "pos":  "",
        "he":  "איזשהו / סוג של",
        "def":  "a type of something, though not specified exactly",
        "example":  "I think he has ___ allergy to nuts.",
        "practice":  "She wore ___ costume that looked like a bird.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "somewhere around / between, etc.",
        "pos":  "",
        "he":  "אי שם בסביבות / בין",
        "def":  "approximately in a certain place, time, or range",
        "example":  "The price is ___ fifty and sixty shekels.",
        "practice":  "He arrived ___ six and seven in the evening.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "sound angry / happy / rude, etc.",
        "pos":  "",
        "he":  "להישמע כועס/שמח/גס רוח וכו\u0027",
        "def":  "to give an impression through the way you speak",
        "example":  "You ___ upset — did something happen today?",
        "practice":  "Please don\u0027t ___ so rude when you answer the phone.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "speak about/of sth",
        "pos":  "",
        "he":  "לדבר על משהו",
        "def":  "to talk about a particular subject",
        "example":  "The professor will ___ the history of ancient Greece.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "special offer",
        "pos":  "",
        "he":  "מבצע מיוחד",
        "def":  "a product sold at a reduced price for a limited time",
        "example":  "The store has a ___ on winter coats this week.",
        "practice":  "We bought the tickets during a ___ online.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "speed",
        "pos":  "n",
        "he":  "מהירות",
        "def":  "the rate at which something moves or happens",
        "example":  "The car was traveling at a dangerous ___ on the highway.",
        "practice":  "The internet ___ here is much faster than at home.",
        "rec":  false,
        "family":  {
                       "en":  "speed limit",
                       "pos":  "",
                       "he":  "מגבלת מהירות"
                   }
    },
    {
        "en":  "spill",
        "pos":  "v",
        "he":  "לשפוך (בטעות)",
        "def":  "to cause liquid to flow out of a container by accident",
        "example":  "Be careful not to ___ your coffee on the carpet.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "spirit",
        "pos":  "n",
        "he":  "רוח / מורל",
        "def":  "a person\u0027s attitude, or their inner, non-physical self",
        "example":  "The whole team showed great ___ even after losing.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "spread",
        "pos":  "v, n",
        "he":  "להתפשט / התפשטות",
        "def":  "to become or make something wider, or move over a larger area",
        "example":  "The news of the win began to ___ quickly through the school.",
        "practice":  "Doctors are worried about the ___ of the virus this winter.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "stay",
        "pos":  "n",
        "he":  "שהייה",
        "def":  "a period of time spent in a place",
        "example":  "We really enjoyed our ___ at the small hotel by the sea.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "strengthen",
        "pos":  "v",
        "he":  "לחזק",
        "def":  "to make something stronger",
        "example":  "Regular exercise can ___ your muscles over time.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "strike",
        "pos":  "v, n",
        "he":  "שביתה / לשבות",
        "def":  "a period when workers refuse to work to protest something",
        "example":  "The bus drivers decided to go on ___ for better pay.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "strong",
        "pos":  "adj",
        "he":  "חזק / איתן",
        "def":  "having great physical power, or a firm character or relationship",
        "example":  "They have built a ___ friendship over the years.",
        "practice":  "She has a ___ personality and never gives up easily.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "struggle",
        "pos":  "v, n",
        "he":  "להיאבק / מאבק",
        "def":  "to try very hard to do something difficult, or a difficult effort",
        "example":  "Many new immigrants ___ to learn a new language quickly.",
        "practice":  "It was a real ___ to finish the marathon in the heat.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "subway",
        "pos":  "n",
        "he":  "רכבת תחתית",
        "def":  "an underground railway system in a city",
        "example":  "We took the ___ to get to the museum faster.",
        "practice":  "New York\u0027s ___ runs twenty-four hours a day.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "suffer from sth",
        "pos":  "",
        "he":  "לסבול מ-",
        "def":  "to experience pain, illness, or a difficulty",
        "example":  "Many teenagers ___ a lack of sleep during exam season.",
        "practice":  "He has started to ___ headaches since he began the new job.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "super",
        "pos":  "adj",
        "he":  "מעולה / נהדר",
        "def":  "extremely good; excellent",
        "example":  "We had a ___ time at the amusement park yesterday.",
        "practice":  "The chef prepared a ___ meal for the guests.",
        "rec":  false,
        "family":  {
                       "en":  "superb",
                       "pos":  "adj",
                       "he":  "מצוין / נהדר"
                   }
    },
    {
        "en":  "swear",
        "pos":  "v",
        "he":  "להישבע",
        "def":  "to make a serious promise, or to use rude language",
        "example":  "I ___ I will never tell anyone your secret.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "suspect",
        "pos":  "v, n",
        "he":  "לחשוד / חשוד",
        "def":  "to believe someone may have done something wrong, or a person believed to have done so",
        "example":  "The police ___ him of stealing the car.",
        "rec":  true,
        "family":  {
                       "en":  "suspicion / suspicious",
                       "pos":  "n / adj",
                       "he":  "חשד / חשדן"
                   }
    },
    {
        "en":  "switch",
        "pos":  "n",
        "he":  "מתג",
        "def":  "a small device used to turn electrical equipment on or off",
        "example":  "Flip the ___ to turn on the lights in the hallway.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "symbol",
        "pos":  "n",
        "he":  "סמל",
        "def":  "a sign, shape, or object that represents something else",
        "example":  "The dove is a well-known ___ of peace.",
        "practice":  "The ring is a ___ of their long marriage.",
        "rec":  false,
        "family":  {
                       "en":  "symbolic",
                       "pos":  "adj",
                       "he":  "סמלי"
                   }
    },
    {
        "en":  "table",
        "pos":  "n",
        "he":  "טבלה / שולחן",
        "def":  "a piece of furniture with a flat top, or an arrangement of data in rows and columns",
        "example":  "The results are shown clearly in the ___ below.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "take pleasure/pride/an interest, etc.",
        "pos":  "",
        "he":  "להפיק הנאה/גאווה/עניין וכו\u0027 מ-",
        "def":  "to feel or show a particular positive feeling about something",
        "example":  "She seems to ___ in helping younger students.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "take sb\u0027s place",
        "pos":  "",
        "he":  "לתפוס את מקומו של מישהו",
        "def":  "to do a job or role instead of someone else",
        "example":  "When the captain got injured, his friend had to ___.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "tear",
        "pos":  "v, n",
        "he":  "לקרוע / קרע",
        "def":  "to pull something apart or damage it by force",
        "example":  "Be careful not to ___ the wrapping paper when you open it.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "term",
        "pos":  "n",
        "he":  "מונח / תנאי / סמסטר",
        "def":  "a word with a specific meaning, or a fixed period of time, or a condition",
        "example":  "The teacher explained a new scientific ___ in class today.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "terminal",
        "pos":  "n",
        "he":  "מסוף",
        "def":  "a building where passengers get on or off planes, buses, or trains",
        "example":  "Our flight departs from ___ three at the airport.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "that kind/sort of thing",
        "pos":  "",
        "he":  "דברים מהסוג הזה",
        "def":  "used to refer generally to similar things already mentioned",
        "example":  "She enjoys hiking, camping, and ___.",
        "practice":  "He collects old coins, stamps, and ___.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "that\u0027s it",
        "pos":  "",
        "he":  "זהו זה / זה הכל",
        "def":  "used to say something has finished or is exactly right",
        "example":  "Add a pinch of salt, stir once, and ___!",
        "practice":  "He packed his last bag and said, \"___, I\u0027m ready.\"",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "the following day / morning, etc.",
        "pos":  "",
        "he":  "למחרת / בבוקר שלמחרת וכו\u0027",
        "def":  "the next day or period of time after the one mentioned",
        "example":  "We arrived late at night and left again ___.",
        "practice":  "She felt sick that evening and still tired ___.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "thief",
        "pos":  "n",
        "he":  "גנב",
        "def":  "a person who steals things",
        "example":  "The ___ was caught trying to leave the store with stolen goods.",
        "practice":  "A clever ___ broke into the museum last night.",
        "rec":  false,
        "family":  {
                       "en":  "theft",
                       "pos":  "n",
                       "he":  "גניבה"
                   }
    },
    {
        "en":  "tight",
        "pos":  "adj, adv",
        "he":  "הדוק / צמוד",
        "def":  "fitting very closely, or firmly fixed, or strictly controlled",
        "example":  "These shoes feel too ___ after a long day of walking.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "tip",
        "pos":  "n",
        "he":  "עצה / תשר",
        "def":  "a helpful piece of advice, or a small amount of money given for service",
        "example":  "Here\u0027s a useful ___ for your next job interview.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "tired of doing sth",
        "pos":  "",
        "he":  "עייף/נמאס מ- (לעשות משהו)",
        "def":  "annoyed or bored because something has continued for too long",
        "example":  "She is ___ waking up early every single morning.",
        "practice":  "He got ___ hearing the same complaints every day.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "tiring",
        "pos":  "adj",
        "he":  "מתיש / מעייף",
        "def":  "making you feel very tired",
        "example":  "Moving all the furniture alone was extremely ___.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "touch",
        "pos":  "n",
        "he":  "מגע / נגיעה",
        "def":  "the act of touching, or a small detail that improves something",
        "example":  "A gentle ___ on the shoulder calmed the crying child.",
        "practice":  "The handwritten card added a personal ___ to the gift.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "tough",
        "pos":  "adj",
        "he":  "קשוח / קשה",
        "def":  "difficult, or strong and able to deal with difficulty",
        "example":  "It was a ___ decision to leave her hometown.",
        "practice":  "The coach is known for being ___ but fair with his players.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "trade",
        "pos":  "n",
        "he":  "סחר / מקצוע",
        "def":  "the buying and selling of goods, or a skilled occupation",
        "example":  "He learned the carpentry ___ from his father.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "transfer",
        "pos":  "v",
        "he":  "להעביר",
        "def":  "to move something or someone from one place to another",
        "example":  "She asked the bank to ___ money to her new account.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "tribe",
        "pos":  "n",
        "he":  "שבט",
        "def":  "a social group of people who share customs and leadership",
        "example":  "The documentary followed a remote ___ in the Amazon.",
        "practice":  "Each ___ in the region has its own unique traditions.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "trick",
        "pos":  "n, v",
        "he":  "תעלול / להערים על",
        "def":  "a clever or dishonest action meant to deceive someone",
        "example":  "The magician performed an amazing card ___.",
        "practice":  "Don\u0027t let him ___ you into giving away your answers.",
        "rec":  false,
        "family":  {
                       "en":  "tricky",
                       "pos":  "adj",
                       "he":  "מסובך / ערמומי"
                   }
    },
    {
        "en":  "turn (sb/sth) into sb/sth",
        "pos":  "",
        "he":  "להפוך מישהו/משהו למשהו אחר",
        "def":  "to change someone or something into something different",
        "example":  "The cold weather can quickly ___ rain into snow.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "underline",
        "pos":  "v",
        "he":  "להדגיש / לקו תחתי",
        "def":  "to draw a line under a word, or to emphasize something\u0027s importance",
        "example":  "The report seemed to ___ the need for more funding.",
        "practice":  "She decided to ___ the key points in her notes.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "union",
        "pos":  "n",
        "he":  "איגוד עובדים / איחוד",
        "def":  "an organization of workers formed to protect their rights, or a joining together",
        "example":  "The workers\u0027 ___ organized a meeting about new wages.",
        "practice":  "The ___ of the two small companies created one large business.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "use",
        "pos":  "n, v",
        "he":  "שימוש / להשתמש",
        "def":  "the way something is used, or to employ something for a purpose",
        "example":  "The dictionary explains the correct ___ of this word.",
        "practice":  "Doctors ___ special tools during the operation.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "via",
        "pos":  "prep",
        "he":  "דרך / באמצעות",
        "def":  "traveling through a place, or by using a particular method",
        "example":  "We flew to New York ___ London.",
        "practice":  "You can contact customer service ___ email or phone.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "victim",
        "pos":  "n",
        "he":  "קורבן",
        "def":  "a person who has been hurt, injured, or affected by something",
        "example":  "The charity provides support for ___s of natural disasters.",
        "practice":  "He was the ___ of an unfair decision by his boss.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "warm",
        "pos":  "v",
        "he":  "לחמם",
        "def":  "to make something less cold",
        "example":  "She put the soup on the stove to ___ it up.",
        "practice":  "The sun began to ___ the cold morning air.",
        "rec":  false,
        "family":  {
                       "en":  "warmth",
                       "pos":  "n",
                       "he":  "חום (תחושה)"
                   }
    },
    {
        "en":  "weakness",
        "pos":  "n",
        "he":  "חולשה",
        "def":  "the state of being weak, or a fault in someone\u0027s character",
        "example":  "Everyone has some ___, even the strongest athletes.",
        "practice":  "His biggest ___ is that he never asks for help.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "wear (sth) out or wear out (sth)",
        "pos":  "",
        "he":  "לשחוק / לבלות (נעליים, בגדים)",
        "def":  "to damage something through long or heavy use",
        "example":  "Years of daily running will ___ even the best shoes.",
        "practice":  "Constant arguing began to ___ their friendship.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "weather forecast",
        "pos":  "",
        "he":  "תחזית מזג אוויר",
        "def":  "a prediction of what the weather will be like",
        "example":  "The ___ says it will rain all weekend.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "weigh",
        "pos":  "v",
        "he":  "לשקול",
        "def":  "to measure how heavy something is, or to think carefully about something",
        "example":  "The nurse asked him to ___ himself before the appointment.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "weird",
        "pos":  "adj",
        "he":  "מוזר",
        "def":  "strange or unusual, often in an unsettling way",
        "example":  "There was something ___ about the empty house at night.",
        "practice":  "He had a ___ dream about flying over the city.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "whatever",
        "pos":  "det, pron",
        "he":  "לא משנה מה / מה שלא יהיה",
        "def":  "used to say it doesn\u0027t matter what, or to show indifference",
        "example":  "You can choose ___ topping you like on your pizza.",
        "practice":  "\"I don\u0027t care which movie we watch.\" \"___ you prefer.\"",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "Who cares?",
        "pos":  "",
        "he":  "למי אכפת? / לדאוג ל-",
        "def":  "used to say that something is not important to anyone",
        "example":  "\"___ what people think? Just be yourself.\"",
        "practice":  "\"___ if it rains tomorrow? We\u0027ll stay indoors.\"",
        "rec":  false,
        "family":  {
                       "en":  "care for",
                       "pos":  "v",
                       "he":  "לדאוג ל- / לטפל ב-"
                   }
    },
    {
        "en":  "wise",
        "pos":  "adj",
        "he":  "חכם (בעל תבונה)",
        "def":  "having good judgment based on knowledge and experience",
        "example":  "My grandmother always gives ___ advice when I\u0027m confused.",
        "rec":  true,
        "family":  {
                       "en":  "wisdom",
                       "pos":  "n",
                       "he":  "חוכמה"
                   }
    },
    {
        "en":  "wrap",
        "pos":  "v",
        "he":  "לעטוף",
        "def":  "to cover something completely with paper or material",
        "example":  "She stayed up late to ___ all the birthday presents.",
        "practice":  "He used a blanket to ___ the baby warmly.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "Yours sincerely",
        "pos":  "",
        "he":  "בכבוד רב / שלך בכנות (סיום מכתב רשמי)",
        "def":  "a polite phrase used to end a formal letter",
        "example":  "He ended the formal letter with \"___, John Smith.\"",
        "practice":  "Always close a job application email with \"___\" before your name.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "will",
        "pos":  "n",
        "he":  "רצון / כוח רצון",
        "def":  "the mental power to decide and control your own actions",
        "example":  "She finished the marathon through sheer ___ power.",
        "practice":  "His strong ___ helped him recover from the injury.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "a little sth",
        "pos":  "",
        "he":  "קצת",
        "def":  "a small amount of something",
        "example":  "Could you lend me ___ money until tomorrow?",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "aggressive",
        "pos":  "adj",
        "he":  "תוקפני / אגרסיבי",
        "def":  "ready to attack or argue; forceful",
        "example":  "The dog became ___ when a stranger approached the gate.",
        "practice":  "She felt the coach\u0027s ___ style was too harsh for young players.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "air force",
        "pos":  "",
        "he":  "חיל האוויר",
        "def":  "the branch of the military that fights using aircraft",
        "example":  "His older brother serves as a pilot in the ___.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "alarm",
        "pos":  "n",
        "he":  "אזעקה / שעון מעורר",
        "def":  "a warning sound or device that wakes or alerts someone",
        "example":  "The ___ went off when smoke filled the kitchen.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "all is well",
        "pos":  "",
        "he":  "הכול בסדר",
        "def":  "everything is fine, with no problems",
        "example":  "She called home just to say, \"___.\"",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "all over the place",
        "pos":  "",
        "he":  "בכל מקום / מבולגן",
        "def":  "scattered everywhere, or very disorganized",
        "example":  "After the party, his clothes were ___.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "ambassador",
        "pos":  "n",
        "he":  "שגריר",
        "def":  "an official who represents their country in another nation",
        "example":  "The ___ gave a speech at the embassy dinner.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "arrow",
        "pos":  "n",
        "he":  "חץ",
        "def":  "a sign shaped like a line with a point, showing direction",
        "example":  "Follow the red ___ to find the exit.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "artistic",
        "pos":  "adj",
        "he":  "אמנותי",
        "def":  "showing skill and creativity in art",
        "example":  "Her ___ talent was clear in every painting she made.",
        "practice":  "The school is looking for students with ___ ability for the mural project.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "at fault",
        "pos":  "",
        "he":  "אשם",
        "def":  "responsible for a mistake or accident",
        "example":  "The driver who crashed was found to be ___.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "bank",
        "pos":  "n",
        "he":  "גדה (של נהר)",
        "def":  "the land along the edge of a river",
        "example":  "They had a picnic on the ___ of the river.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "bank account",
        "pos":  "",
        "he":  "חשבון בנק",
        "def":  "a record kept by a bank of a person\u0027s money",
        "example":  "He opened a ___ to save money for college.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "bargain",
        "pos":  "n",
        "he":  "מציאה / עסקה",
        "def":  "something bought cheaply, or an agreement between people",
        "example":  "She got the jacket for ten dollars - what a ___!",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "base",
        "pos":  "n",
        "he":  "בסיס (צבאי)",
        "def":  "a place where soldiers or military equipment are kept",
        "example":  "The soldiers returned to the ___ after training.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "bay",
        "pos":  "n",
        "he":  "מפרץ",
        "def":  "a part of the sea partly enclosed by land",
        "example":  "The fishing boats sailed into the quiet ___.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "be expecting (a baby)",
        "pos":  "",
        "he":  "להיות בהריון",
        "def":  "to be pregnant",
        "example":  "My sister is ___ a baby, so the whole family is excited.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "believe it or not",
        "pos":  "",
        "he":  "תאמינו או לא",
        "def":  "used to say that something surprising is true",
        "example":  "___, he finished the marathon in under three hours.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "bell",
        "pos":  "n",
        "he":  "פעמון",
        "def":  "a metal object that makes a ringing sound",
        "example":  "The school ___ rang to signal the end of class.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "bench",
        "pos":  "n",
        "he":  "ספסל",
        "def":  "a long seat for several people",
        "example":  "They sat on a ___ in the park and talked.",
        "practice":  "The injured player waited on the ___ during the match.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "blow up (sth/sb) or blow (sth/sb) up",
        "pos":  "",
        "he":  "לפוצץ",
        "def":  "to destroy something with an explosion",
        "example":  "The engineers had to ___ the old bridge safely.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "boiled",
        "pos":  "adj",
        "he":  "מבושל (ברתיחה)",
        "def":  "cooked in boiling water",
        "example":  "She served ___ eggs with toast for breakfast.",
        "rec":  true,
        "family":  {
                       "en":  "boiling",
                       "pos":  "adj",
                       "he":  "רותח"
                   }
    },
    {
        "en":  "brake",
        "pos":  "v, n",
        "he":  "בלם / לבלום",
        "def":  "a device that slows or stops a vehicle; to use it",
        "example":  "He hit the ___ hard to avoid the cat.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "branch",
        "pos":  "n",
        "he":  "סניף",
        "def":  "a local office of a company or bank",
        "example":  "She works at the downtown ___ of the bank.",
        "practice":  "The company opened a new ___ in another city.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "brick",
        "pos":  "n",
        "he":  "לבנה (בניין)",
        "def":  "a block of hard baked clay used for building",
        "example":  "The old house was built from red ___.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "bucket",
        "pos":  "n",
        "he":  "דלי",
        "def":  "a round container with a handle, used to carry liquids",
        "example":  "He filled the ___ with water to wash the car.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "bug",
        "pos":  "n",
        "he":  "חרק / תקלה (במחשב)",
        "def":  "an insect, or a small error in a computer program",
        "example":  "There\u0027s a ___ crawling across the kitchen floor.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "bull",
        "pos":  "n",
        "he":  "פר",
        "def":  "an adult male cow",
        "example":  "The farmer kept a large ___ in the field.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "bunch",
        "pos":  "n",
        "he":  "צרור / אשכול",
        "def":  "a group of things held or growing together",
        "example":  "She bought a ___ of flowers for her mother.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "burst into tears",
        "pos":  "",
        "he":  "לפרוץ בבכי",
        "def":  "to suddenly start crying",
        "example":  "The little girl ___ when she dropped her ice cream.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "bury",
        "pos":  "v",
        "he":  "לקבור",
        "def":  "to put something in the ground and cover it",
        "example":  "They decided to ___ the time capsule under the old oak tree.",
        "practice":  "Ancient people used to ___ their dead with valuable objects.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "butcher",
        "pos":  "n",
        "he":  "קצב",
        "def":  "a person who sells meat",
        "example":  "She asked the ___ for a kilo of fresh chicken.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "cab",
        "pos":  "n",
        "he":  "מונית",
        "def":  "a car with a driver that you pay to ride in",
        "example":  "We took a ___ to the airport early this morning.",
        "practice":  "He called a ___ because it was raining heavily outside.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "cabin",
        "pos":  "n",
        "he":  "בקתה / תא (במטוס/אונייה)",
        "def":  "a small wooden house, or a room on a ship",
        "example":  "They spent the winter in a cozy mountain ___.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "catalog/catalogue",
        "pos":  "n",
        "he":  "קטלוג",
        "def":  "a list of items you can look at or buy",
        "example":  "She ordered a new lamp from the furniture ___.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "cave",
        "pos":  "n",
        "he":  "מערה",
        "def":  "a large natural hole in rock or underground",
        "example":  "The hikers explored a dark ___ near the mountain.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "certificate",
        "pos":  "n",
        "he":  "תעודה",
        "def":  "an official document proving a fact or achievement",
        "example":  "She received a ___ for completing the first-aid course.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "charge",
        "pos":  "v",
        "he":  "לטעון (סוללה)",
        "def":  "to fill a battery with electrical power",
        "example":  "Remember to ___ your phone before the trip tomorrow.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "check in/check out",
        "pos":  "v",
        "he":  "לבצע צ\u0027ק אין / צ\u0027ק אאוט",
        "def":  "to register on arrival, or pay and leave on departure",
        "example":  "We need to ___ at the hotel before six o\u0027clock.",
        "practice":  "Guests must ___ of the room by eleven in the morning.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "Cheers!",
        "pos":  "exclam",
        "he":  "לחיים!",
        "def":  "a word said before drinking a toast, or to say thanks",
        "example":  "They raised their glasses and said, \"___!\"",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "cold",
        "pos":  "adj",
        "he":  "קר / לא ידידותי (על אדם)",
        "def":  "unfriendly or showing no warmth toward other people",
        "example":  "He gave her a ___ look and walked away without a word.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "collar",
        "pos":  "n",
        "he":  "צווארון",
        "def":  "the part of a shirt that goes around the neck",
        "example":  "He straightened his ___ before the job interview.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "crash",
        "pos":  "v, n",
        "he":  "להתרסק / התרסקות",
        "def":  "to hit something violently, or an accident involving this",
        "example":  "The two cars had a terrible ___ at the intersection.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "cross",
        "pos":  "n",
        "he":  "צלב",
        "def":  "a symbol shaped like a plus sign, often religious",
        "example":  "A golden ___ hung around her neck.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "customs",
        "pos":  "n",
        "he":  "מכס",
        "def":  "the place at a border where officials check goods and bags",
        "example":  "We had to show our passports at ___ before entering the country.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "date",
        "pos":  "n",
        "he":  "דייט / פגישה רומנטית",
        "def":  "a planned social meeting between two people, often romantic",
        "example":  "He was nervous before his first ___ with her.",
        "practice":  "They went on a ___ to the new restaurant downtown.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "deck",
        "pos":  "n",
        "he":  "סיפון",
        "def":  "a floor on a ship, especially one that is outside",
        "example":  "We stood on the ___ and watched the waves.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "defeat",
        "pos":  "v, n",
        "he":  "לנצח (מישהו) / תבוסה",
        "def":  "to beat someone in a fight or contest; a loss",
        "example":  "The home team managed to ___ their biggest rivals.",
        "practice":  "The army suffered a painful ___ after the long battle.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "devil",
        "pos":  "n",
        "he":  "שטן",
        "def":  "an evil spirit, the enemy of God in some religions",
        "example":  "In the story, the ___ tries to trick the villagers.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "diagram",
        "pos":  "n",
        "he":  "תרשים",
        "def":  "a simple drawing that explains how something works",
        "example":  "The teacher drew a ___ to show how the heart pumps blood.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "difficult",
        "pos":  "adj",
        "he":  "קשה (באופי, לא ידידותי)",
        "def":  "hard to deal with; not easy to get along with",
        "example":  "Her new boss turned out to be a ___ person to work with.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "dishonest",
        "pos":  "adj",
        "he":  "לא ישר / לא הגון",
        "def":  "not telling the truth; likely to cheat or lie",
        "example":  "The salesman was ___ about the car\u0027s real condition.",
        "practice":  "She refused to work with such a ___ business partner.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "disk",
        "pos":  "n",
        "he":  "דיסק",
        "def":  "a flat round object, used to store computer data",
        "example":  "He saved the files onto an old ___ for backup.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "divorce",
        "pos":  "n",
        "he":  "גירושין",
        "def":  "the legal ending of a marriage",
        "example":  "Their ___ was finalized after months in court.",
        "rec":  true,
        "family":  {
                       "en":  "divorced",
                       "pos":  "adj",
                       "he":  "גרוש/ה"
                   }
    },
    {
        "en":  "Don\u0027t ask me!",
        "pos":  "",
        "he":  "אל תשאל אותי! (אני לא יודע)",
        "def":  "said when you have no idea about something",
        "example":  "\"Where\u0027s the remote control?\" \"___!\"",
        "practice":  "\"Why did she leave so early?\" \"___, I have no idea.\"",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "Don\u0027t ask!",
        "pos":  "",
        "he":  "אל תשאל! (זה גרוע מכדי לספר)",
        "def":  "said to show a situation was too bad to describe",
        "example":  "\"How was the exam?\" \"___ - it was a disaster.\"",
        "practice":  "\"How was your flight?\" \"___! It was delayed for six hours.\"",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "dreadful",
        "pos":  "adj",
        "he":  "נורא / איום",
        "def":  "extremely bad or unpleasant",
        "example":  "The weather on our trip was absolutely ___.",
        "practice":  "He made a ___ mistake that cost the company money.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "drink",
        "pos":  "v",
        "he":  "לשתות (אלכוהול)",
        "def":  "to consume alcoholic beverages",
        "example":  "He doesn\u0027t ___ at all because he\u0027s driving tonight.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "drive",
        "pos":  "n",
        "he":  "כונן (מחשב)",
        "def":  "a part of a computer that stores data",
        "example":  "She backed up her photos onto an external ___.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "drop",
        "pos":  "n",
        "he":  "טיפה",
        "def":  "a small round amount of liquid",
        "example":  "A single ___ of rain fell on her hand.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "drunk",
        "pos":  "adj",
        "he":  "שיכור",
        "def":  "affected by alcohol, unable to think or act normally",
        "example":  "He was too ___ to drive home after the party.",
        "practice":  "The ___ man could barely stand near the bar.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "elbow",
        "pos":  "n",
        "he":  "מרפק",
        "def":  "the joint where the arm bends",
        "example":  "She hurt her ___ when she fell off her bike.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "engagement",
        "pos":  "n",
        "he":  "אירוסין",
        "def":  "an agreement to get married",
        "example":  "They announced their ___ at the family dinner.",
        "rec":  true,
        "family":  {
                       "en":  "engaged",
                       "pos":  "adj",
                       "he":  "מאורס/ת"
                   }
    },
    {
        "en":  "explode",
        "pos":  "v",
        "he":  "להתפוצץ",
        "def":  "to burst suddenly with great force and noise",
        "example":  "The old gas pipe could ___ if it isn\u0027t fixed.",
        "practice":  "Scientists warned that the volcano might ___ within days.",
        "rec":  false,
        "family":  {
                       "en":  "explosion",
                       "pos":  "n",
                       "he":  "פיצוץ"
                   }
    },
    {
        "en":  "fall in love",
        "pos":  "",
        "he":  "להתאהב",
        "def":  "to begin feeling romantic love for someone",
        "example":  "Many tourists ___ with the city\u0027s charm every year.",
        "practice":  "He didn\u0027t expect to ___ with someone from another country.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "fasten",
        "pos":  "v",
        "he":  "לחגור / להדק",
        "def":  "to close or attach something firmly",
        "example":  "Please ___ your seatbelt before the plane takes off.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "fly",
        "pos":  "n",
        "he":  "זבוב",
        "def":  "a small flying insect",
        "example":  "A ___ kept buzzing around the picnic table.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "folk",
        "pos":  "n, adj",
        "he":  "אנשים / עממי",
        "def":  "people in general, or traditional of a nation\u0027s culture",
        "example":  "She loves listening to old ___ music from Ireland.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "fool",
        "pos":  "n",
        "he":  "טיפש",
        "def":  "a person who acts without sense or thinks foolishly",
        "example":  "He felt like a ___ after forgetting his own password.",
        "practice":  "Don\u0027t be a ___ - check the map before you drive.",
        "rec":  false,
        "family":  {
                       "en":  "foolish",
                       "pos":  "adj",
                       "he":  "טיפשי"
                   }
    },
    {
        "en":  "for fun or for the fun of it",
        "pos":  "",
        "he":  "בשביל הכיף",
        "def":  "for enjoyment, not for a serious reason",
        "example":  "They painted the old fence just ___.",
        "practice":  "She joined the chess club purely ___.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "force",
        "pos":  "n",
        "he":  "כוח (צבאי/משטרתי)",
        "def":  "an organized group of people, such as soldiers or police",
        "example":  "The police ___ arrived quickly at the scene.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "forehead",
        "pos":  "n",
        "he":  "מצח",
        "def":  "the part of the face above the eyebrows",
        "example":  "He wiped the sweat off his ___ after the race.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "forgetful",
        "pos":  "adj",
        "he":  "שכחן",
        "def":  "often forgetting things",
        "example":  "My grandfather has become quite ___ in his old age.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "garage",
        "pos":  "n",
        "he":  "מוסך",
        "def":  "a place where cars are repaired or sold",
        "example":  "He took the car to the local ___ for repairs.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "gate",
        "pos":  "n",
        "he":  "שער טיסה",
        "def":  "the place in an airport where passengers board a plane",
        "example":  "Our flight boards from ___ number twelve.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "gentleman",
        "pos":  "n",
        "he":  "ג\u0027נטלמן / אדון מנומס",
        "def":  "a polite, well-mannered man",
        "example":  "He opened the door for her like a true ___.",
        "practice":  "The ___ offered his seat to the elderly woman on the bus.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "get away with sth",
        "pos":  "",
        "he":  "לצאת נקי / לא להיענש על משהו",
        "def":  "to not be punished for doing something wrong",
        "example":  "He thought he could ___ cheating on the test.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "get in",
        "pos":  "",
        "he":  "להיכנס (לרכב וכו\u0027)",
        "def":  "to enter a vehicle or a place",
        "example":  "Hurry up and ___ the car - we\u0027re already late!",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "ghost",
        "pos":  "n",
        "he":  "רוח רפאים",
        "def":  "the spirit of a dead person that appears to the living",
        "example":  "The children told stories about a ___ in the old house.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "giant",
        "pos":  "n, adj",
        "he":  "ענק / ענקי",
        "def":  "an extremely large imaginary person, or extremely large",
        "example":  "A ___ panda appeared in the wildlife documentary.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "grow tired/old/calm, etc.",
        "pos":  "",
        "he":  "להיעשות (עייף/זקן/רגוע וכו\u0027)",
        "def":  "to gradually become a certain state over time",
        "example":  "The students began to ___ tired after the long lecture.",
        "practice":  "With age, he started to ___ calm about small problems.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "hang about/around",
        "pos":  "",
        "he":  "להסתובב בלי מטרה",
        "def":  "to spend time somewhere without doing much",
        "example":  "They like to ___ the mall after school.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "hang out",
        "pos":  "",
        "he":  "לבלות (עם חברים)",
        "def":  "to spend time relaxing with friends",
        "example":  "We usually ___ at the beach on weekends.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "harbor",
        "pos":  "n",
        "he":  "נמל",
        "def":  "a place on the coast where ships can shelter and dock",
        "example":  "The fishing boats returned to the ___ before the storm.",
        "rec":  true,
        "family":  {
                       "en":  "harbour",
                       "pos":  "",
                       "he":  "נמל (איות בריטי)"
                   }
    },
    {
        "en":  "heaven",
        "pos":  "n",
        "he":  "גן עדן / השמיים",
        "def":  "the place where good people are believed to go after death",
        "example":  "In the story, the angel welcomes souls into ___.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "heel",
        "pos":  "n",
        "he":  "עקב",
        "def":  "the back part of the foot, or of a shoe",
        "example":  "She twisted her ___ while running on the uneven path.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "hell",
        "pos":  "n",
        "he":  "גיהינום",
        "def":  "a place of punishment after death, in some religions",
        "example":  "The preacher warned that sinners would go to ___.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "horror",
        "pos":  "n",
        "he":  "אימה / בלהה",
        "def":  "a strong feeling of fear and shock",
        "example":  "The audience watched the ___ movie with their hands over their eyes.",
        "practice":  "She looked at the damage in ___ after the storm.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "hunt",
        "pos":  "v",
        "he":  "לצוד",
        "def":  "to chase and kill wild animals for food or sport",
        "example":  "Wolves often ___ in groups to catch larger prey.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "hurry up sb/sth or hurry sb/sth up",
        "pos":  "",
        "he":  "לזרז מישהו/משהו",
        "def":  "to make someone or something move or happen faster",
        "example":  "Can you ___ your brother? We\u0027re going to miss the bus.",
        "practice":  "The manager tried to ___ the delivery before the deadline.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "hut",
        "pos":  "n",
        "he":  "בקתה / צריף",
        "def":  "a small, simple building, often made of wood",
        "example":  "The shepherds slept in a small ___ on the hill.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "immoral",
        "pos":  "adj",
        "he":  "לא מוסרי",
        "def":  "not following accepted standards of right and wrong",
        "example":  "Many people felt it was ___ to lie to customers.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "in tears",
        "pos":  "",
        "he":  "בוכה / בדמעות",
        "def":  "crying",
        "example":  "She was ___ after hearing the sad news.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "initial",
        "pos":  "n",
        "he":  "ראשי תיבות / אות ראשונה",
        "def":  "the first letter of a name",
        "example":  "He signed the form with just his ___.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "insult",
        "pos":  "v",
        "he":  "להעליב",
        "def":  "to say or do something rude that hurts someone\u0027s feelings",
        "example":  "He didn\u0027t mean to ___ her with his joke.",
        "practice":  "It\u0027s never okay to ___ a teammate in front of others.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "insurance",
        "pos":  "n",
        "he":  "ביטוח",
        "def":  "a payment system that protects against loss or damage",
        "example":  "Make sure your car has valid ___ before driving.",
        "rec":  true,
        "family":  {
                       "en":  "insure",
                       "pos":  "v",
                       "he":  "לבטח"
                   }
    },
    {
        "en":  "iron",
        "pos":  "v, n",
        "he":  "לגהץ / מגהץ",
        "def":  "to smooth clothes using a heated device; the device itself",
        "example":  "She used the ___ to smooth the wrinkled shirt.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "jog",
        "pos":  "v",
        "he":  "לרוץ ריצה קלה",
        "def":  "to run at a slow, steady pace for exercise",
        "example":  "He likes to ___ around the park every morning.",
        "rec":  true,
        "family":  {
                       "en":  "jogging",
                       "pos":  "n",
                       "he":  "ריצה קלה"
                   }
    },
    {
        "en":  "jump",
        "pos":  "v",
        "he":  "לקפוץ (מבהלה)",
        "def":  "to make a sudden movement because of fear or surprise",
        "example":  "She felt her whole body ___ when the phone rang loudly.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "jury",
        "pos":  "n",
        "he":  "חבר מושבעים",
        "def":  "a group of people who decide guilt in court",
        "example":  "The ___ took three days to reach a verdict.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "knit",
        "pos":  "v",
        "he":  "לסרוג",
        "def":  "to make clothing from wool using needles",
        "example":  "Grandma loves to ___ sweaters for the whole family.",
        "practice":  "She learned to ___ scarves during the winter break.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "laser",
        "pos":  "n",
        "he":  "לייזר",
        "def":  "a narrow, powerful beam of light",
        "example":  "The doctor used a ___ to treat her eye problem.",
        "practice":  "Scientists use a ___ to measure distances in space.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "lead",
        "pos":  "n",
        "he":  "יתרון (בתחרות)",
        "def":  "the position of being ahead in a race or competition",
        "example":  "The runner took the ___ in the final lap.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "learning",
        "pos":  "n",
        "he":  "למידה",
        "def":  "the process of gaining knowledge or skills",
        "example":  "Online courses have changed the way ___ happens today.",
        "rec":  true,
        "family":  {
                       "en":  "learned",
                       "pos":  "adj",
                       "he":  "מלומד / משכיל"
                   }
    },
    {
        "en":  "lightning",
        "pos":  "n",
        "he":  "ברק",
        "def":  "a sudden flash of light in the sky during a storm",
        "example":  "A bolt of ___ lit up the entire sky.",
        "practice":  "The old tree was struck by ___ during the storm.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "literary",
        "pos":  "adj",
        "he":  "ספרותי",
        "def":  "relating to literature, such as novels and poems",
        "example":  "She studies ___ works from the nineteenth century.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "loaf",
        "pos":  "n",
        "he":  "ככר לחם",
        "def":  "a shaped piece of baked bread",
        "example":  "He bought a fresh ___ of bread from the bakery.",
        "practice":  "She sliced the ___ to make sandwiches for lunch.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "loose",
        "pos":  "adj",
        "he":  "רופף / חופשי",
        "def":  "not firmly fixed in place; not tight",
        "example":  "One of the buttons on his shirt was ___.",
        "practice":  "The dog got ___ and ran across the yard.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "madam",
        "pos":  "n",
        "he":  "גברתי",
        "def":  "a polite way to address a woman",
        "example":  "\"Excuse me, ___, is this seat taken?\"",
        "practice":  "The waiter asked, \"Would you like anything else, ___?\"",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "magnificent",
        "pos":  "adj",
        "he":  "מפואר / נהדר",
        "def":  "extremely beautiful, impressive, or excellent",
        "example":  "The view from the mountain top was absolutely ___.",
        "practice":  "The palace was decorated with ___ paintings and gold frames.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "make",
        "pos":  "v",
        "he":  "להגיע (בזמן)",
        "def":  "to arrive at or reach a place, especially on time",
        "example":  "We need to leave now if we want to ___ the train.",
        "practice":  "He ran fast but still didn\u0027t ___ it to class on time.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "marriage",
        "pos":  "n",
        "he":  "נישואים",
        "def":  "the legal union of two people as partners",
        "example":  "Their ___ lasted for over forty happy years.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "mask",
        "pos":  "n",
        "he":  "מסכה",
        "def":  "a covering worn over the face to hide or protect it",
        "example":  "The doctor put on a ___ before entering the operating room.",
        "practice":  "She wore a colorful ___ to the costume party.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "mate",
        "pos":  "n",
        "he":  "חבר / בן/בת זוג",
        "def":  "a friend, or an animal\u0027s breeding partner",
        "example":  "He went to the football game with his old school ___.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "mess",
        "pos":  "n",
        "he":  "בלגן",
        "def":  "a dirty or untidy state of something",
        "example":  "The kids left a ___ in the living room after playing.",
        "practice":  "His room was a total ___ before the inspection.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "mineral water",
        "pos":  "",
        "he":  "מי מינרלים",
        "def":  "bottled water that naturally contains minerals",
        "example":  "She asked the waiter for a bottle of ___.",
        "practice":  "He prefers ___ over soda during meals.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "mix up sb/sth or mix sb/sth up",
        "pos":  "",
        "he":  "לבלבל בין (אנשים/דברים)",
        "def":  "to confuse one thing or person with another",
        "example":  "People often ___ the twins because they look so alike.",
        "practice":  "I always ___ the dates of their birthdays.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "monster",
        "pos":  "n",
        "he":  "מפלצת",
        "def":  "a large, frightening imaginary creature",
        "example":  "The child was afraid of a ___ under the bed.",
        "practice":  "In the film, a ___ attacks the city at night.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "moral",
        "pos":  "n",
        "he":  "מוסר השכל",
        "def":  "a lesson about right and wrong taught by a story",
        "example":  "The ___ of the fable is to always tell the truth.",
        "practice":  "Every one of his stories ends with a clear ___.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "naked",
        "pos":  "adj",
        "he":  "עירום",
        "def":  "not wearing any clothes",
        "example":  "The baby ran around ___ after his bath.",
        "practice":  "The statue shows a ___ figure holding a sword.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "nasty",
        "pos":  "adj",
        "he":  "מרושע / מגעיל",
        "def":  "very unpleasant or unkind",
        "example":  "He said something ___ about her in front of everyone.",
        "practice":  "The weather turned ___ just before the game started.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "navy",
        "pos":  "n",
        "he":  "חיל הים",
        "def":  "the branch of the military that fights at sea",
        "example":  "Her father served in the ___ for twenty years.",
        "practice":  "The ___ sent several ships to help after the flood.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "neat",
        "pos":  "adj",
        "he":  "מסודר",
        "def":  "tidy and arranged carefully",
        "example":  "His handwriting is always very ___ and easy to read.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "next door",
        "pos":  "",
        "he":  "בדלת הסמוכה / שכן",
        "def":  "in the house or building immediately beside this one",
        "example":  "Our new neighbors moved in ___ last week.",
        "practice":  "She borrowed sugar from the family living ___.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "not believe your eyes/ears",
        "pos":  "",
        "he":  "לא להאמין למראה עיניך/לאוזניך",
        "def":  "to be extremely surprised by what you see or hear",
        "example":  "When you see the robot dance, you will ___.",
        "practice":  "When you hear who won the game, you will ___.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "nut",
        "pos":  "n",
        "he":  "אגוז",
        "def":  "a hard-shelled seed that can be eaten",
        "example":  "She is allergic to every kind of ___.",
        "practice":  "He cracked open a ___ with his bare hands.",
        "rec":  false,
        "family":  {
                       "en":  "peanut",
                       "pos":  "n",
                       "he":  "בוטן"
                   }
    },
    {
        "en":  "on a diet",
        "pos":  "",
        "he":  "בדיאטה",
        "def":  "following a plan of eating less or differently to lose weight",
        "example":  "She\u0027s been ___ since the beginning of the month.",
        "practice":  "He avoided dessert because he\u0027s ___.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "on board",
        "pos":  "",
        "he":  "על הסיפון / בתוך (כלי תחבורה)",
        "def":  "on a ship, plane, or train",
        "example":  "All passengers must be ___ before the ship departs.",
        "practice":  "There were over two hundred people ___ the flight.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "on display",
        "pos":  "",
        "he":  "מוצג / בתצוגה",
        "def":  "being shown publicly for people to see",
        "example":  "The ancient vase is ___ in the museum\u0027s main hall.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "on duty/off duty",
        "pos":  "",
        "he":  "בתפקיד / לא בתפקיד",
        "def":  "currently working, or not currently working",
        "example":  "The nurse was ___ all night, caring for patients.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "orchestra",
        "pos":  "n",
        "he":  "תזמורת",
        "def":  "a large group of musicians who play together",
        "example":  "The school ___ performed a concert for the parents.",
        "practice":  "She plays violin in the city\u0027s youth ___.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "pack",
        "pos":  "n",
        "he":  "חבילה / להק",
        "def":  "a group of things wrapped together, or a group of animals",
        "example":  "A ___ of wolves howled in the distance at night.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "painful",
        "pos":  "adj",
        "he":  "כואב",
        "def":  "causing physical or emotional pain",
        "example":  "The injury to his ankle was extremely ___.",
        "rec":  true,
        "family":  {
                       "en":  "painless",
                       "pos":  "adj",
                       "he":  "לא כואב"
                   }
    },
    {
        "en":  "pale",
        "pos":  "adj",
        "he":  "חיוור",
        "def":  "having lighter skin than usual, from illness or fear",
        "example":  "She looked ___ after hearing the shocking news.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "passage",
        "pos":  "n",
        "he":  "מעבר (מסדרון, מנהרה)",
        "def":  "a narrow way that connects one place to another",
        "example":  "A dark ___ led from the kitchen to the garden.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "pavement",
        "pos":  "n",
        "he":  "מדרכה",
        "def":  "the paved path for walking beside a road",
        "example":  "Children were riding their bikes along the ___.",
        "practice":  "He slipped on the wet ___ outside the shop.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "peak",
        "pos":  "n",
        "he":  "פסגה / שיא",
        "def":  "the highest point of a mountain, or the best moment",
        "example":  "They reached the ___ of the mountain just before sunset.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "penalty",
        "pos":  "n",
        "he":  "עונש / פנדל",
        "def":  "a punishment for breaking a rule, especially in sport",
        "example":  "The referee awarded a ___ after the clear foul in the box.",
        "practice":  "Late payment comes with a ten percent ___.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "pill",
        "pos":  "n",
        "he":  "כדור (תרופה)",
        "def":  "a small, round piece of medicine that you swallow",
        "example":  "The doctor told her to take one ___ every morning.",
        "practice":  "He forgot to take his ___ after breakfast.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "pin",
        "pos":  "n",
        "he":  "סיכה",
        "def":  "a small, thin piece of metal with a sharp point",
        "example":  "She used a ___ to attach the note to the board.",
        "practice":  "He stepped on a ___ that fell from the sewing box.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "pity",
        "pos":  "n",
        "he":  "חבל / רחמים",
        "def":  "a feeling of sadness for someone\u0027s trouble, or a shame",
        "example":  "It\u0027s such a ___ that you can\u0027t join us this weekend.",
        "practice":  "She felt ___ for the lost puppy in the rain.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "pray",
        "pos":  "v",
        "he":  "להתפלל",
        "def":  "to speak to God, asking for help or giving thanks",
        "example":  "They gathered at the church to ___ for peace.",
        "practice":  "She used to ___ every night before going to sleep.",
        "rec":  false,
        "family":  {
                       "en":  "prayer",
                       "pos":  "",
                       "he":  "תפילה"
                   }
    },
    {
        "en":  "pregnant",
        "pos":  "adj",
        "he":  "בהריון",
        "def":  "carrying a baby inside the body before birth",
        "example":  "She found out she was ___ in the third month.",
        "rec":  true,
        "family":  {
                       "en":  "pregnancy",
                       "pos":  "n",
                       "he":  "הריון"
                   }
    },
    {
        "en":  "priest",
        "pos":  "n",
        "he":  "כומר",
        "def":  "a religious leader, especially in the Christian church",
        "example":  "The ___ led the ceremony at the old church.",
        "practice":  "A young ___ gave a moving speech at the funeral.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "propose",
        "pos":  "v",
        "he":  "להציע נישואים",
        "def":  "to formally ask someone to marry you",
        "example":  "He planned to ___ to her on the beach at sunset.",
        "rec":  true,
        "family":  {
                       "en":  "proposal",
                       "pos":  "n",
                       "he":  "הצעת נישואים"
                   }
    },
    {
        "en":  "pump",
        "pos":  "n, v",
        "he":  "משאבה / לשאוב",
        "def":  "a machine that moves liquid or gas; to use it",
        "example":  "He used a ___ to fill the flat tire with air.",
        "practice":  "They had to ___ water out of the flooded basement.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "queue",
        "pos":  "n",
        "he":  "תור",
        "def":  "a line of people waiting for something",
        "example":  "There was a long ___ outside the concert hall.",
        "practice":  "He waited in the ___ for almost an hour at the bank.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "racket",
        "pos":  "n",
        "he":  "מחבט",
        "def":  "equipment used to hit a ball in tennis or squash",
        "example":  "She bought a new ___ before the tennis tournament.",
        "practice":  "He forgot his tennis ___ at home before the match.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "rainbow",
        "pos":  "n",
        "he":  "קשת בענן",
        "def":  "an arc of colors that appears in the sky after rain",
        "example":  "A bright ___ appeared after the sudden storm.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "range",
        "pos":  "n",
        "he":  "רכס הרים",
        "def":  "a line of mountains or hills",
        "example":  "The hikers admired the snowy mountain ___ in the distance.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "refund",
        "pos":  "n, v",
        "he":  "החזר כספי / להחזיר כסף",
        "def":  "money given back, or to give money back",
        "example":  "She asked for a ___ when the jacket didn\u0027t fit.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "regards",
        "pos":  "n",
        "he":  "ברכות / דרישת שלום",
        "def":  "good wishes sent to someone, often in a letter",
        "example":  "Please give my ___ to your parents.",
        "practice":  "He ended the email with \"Best ___, David.\"",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "republic",
        "pos":  "n",
        "he":  "רפובליקה",
        "def":  "a country governed by elected representatives, with no king or queen",
        "example":  "France became a ___ after the revolution.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "resort",
        "pos":  "n",
        "he":  "אתר נופש",
        "def":  "a place where many people go on vacation",
        "example":  "They spent their honeymoon at a beach ___ in Greece.",
        "practice":  "The ski ___ was crowded during the winter holidays.",
        "rec":  false,
        "family":  {
                       "en":  "resort",
                       "pos":  "",
                       "he":  "לנקוט (כמוצא אחרון)"
                   }
    },
    {
        "en":  "rob",
        "pos":  "v",
        "he":  "לשדוד",
        "def":  "to steal from a person or place, often using force",
        "example":  "Two masked men tried to ___ the jewelry store.",
        "practice":  "The thieves planned to ___ the bank at midnight.",
        "rec":  false,
        "family":  {
                       "en":  "robber",
                       "pos":  "n",
                       "he":  "שודד"
                   }
    },
    {
        "en":  "romantic",
        "pos":  "adj",
        "he":  "רומנטי",
        "def":  "relating to love, or showing strong feelings of love",
        "example":  "They had a ___ dinner by candlelight on their anniversary.",
        "practice":  "He wrote her a ___ poem for Valentine\u0027s Day.",
        "rec":  false,
        "family":  {
                       "en":  "romance",
                       "pos":  "n",
                       "he":  "רומנטיקה / רומן"
                   }
    },
    {
        "en":  "rope",
        "pos":  "n",
        "he":  "חבל",
        "def":  "a thick, strong cord made of twisted threads",
        "example":  "The climbers tied themselves together with a strong ___.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "rub out sth or rub sth out",
        "pos":  "",
        "he":  "למחוק (בעזרת מחק)",
        "def":  "to remove pencil marks using an eraser",
        "example":  "The artist decided to ___ part of her sketch.",
        "practice":  "He had to ___ the wrong answer before the teacher checked it.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "rubber",
        "pos":  "n",
        "he":  "גומי",
        "def":  "a strong, flexible material used to make tires and other items",
        "example":  "The boots are made of waterproof ___.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "rubbish",
        "pos":  "n",
        "he":  "זבל / שטויות",
        "def":  "waste material, or something of very poor quality",
        "example":  "Please throw this ___ into the bin outside.",
        "practice":  "He said the movie was complete ___ and a waste of time.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "rude",
        "pos":  "adj",
        "he":  "גס רוח",
        "def":  "not polite; showing a lack of respect for others",
        "example":  "It was ___ of him to interrupt her while she was speaking.",
        "practice":  "The customer became ___ when his order was late.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "scandal",
        "pos":  "n",
        "he":  "שערוריה",
        "def":  "a shocking event that damages someone\u0027s reputation",
        "example":  "The politician resigned after the corruption ___.",
        "practice":  "The company faced a huge ___ over its unfair practices.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "scratch",
        "pos":  "n, v",
        "he":  "שריטה / לשרוט",
        "def":  "a small cut on skin or a surface; to make one",
        "example":  "The cat left a ___ on his arm.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "sculpture",
        "pos":  "n",
        "he":  "פיסול / פסל",
        "def":  "a piece of art made by shaping stone, metal, or wood",
        "example":  "The museum displayed a bronze ___ of a horse.",
        "practice":  "She studies ___ at the art academy.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "see off sb or see sb off",
        "pos":  "",
        "he":  "ללוות מישהו (בפרידה)",
        "def":  "to go with someone to say goodbye as they leave",
        "example":  "We went to the airport to ___ our cousin.",
        "practice":  "Her friends came to the station to ___ her before the trip.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "selfish",
        "pos":  "",
        "he":  "אנוכי",
        "def":  "caring only about yourself, not about others",
        "example":  "It was ___ of him to take the last seat on the bus.",
        "practice":  "She felt bad for being so ___ with her time.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "separate",
        "pos":  "v",
        "he":  "להיפרד (בני זוג)",
        "def":  "to stop living together as a married couple",
        "example":  "They decided to ___ after fifteen years of marriage.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "shade",
        "pos":  "n",
        "he":  "צל",
        "def":  "an area sheltered from direct sunlight",
        "example":  "They sat in the ___ of the big oak tree.",
        "practice":  "The dog rested in the ___ during the hot afternoon.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "shake your head",
        "pos":  "",
        "he":  "לנענע בראש (לשלילה)",
        "def":  "to move your head side to side, usually meaning no",
        "example":  "When someone tells a silly joke, you might ___.",
        "practice":  "If you disagree with a decision, you can simply ___.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "shave",
        "pos":  "v, n",
        "he":  "להתגלח / גילוח",
        "def":  "to remove hair from the face or body with a razor",
        "example":  "He likes to ___ every morning before work.",
        "practice":  "She bought a new razor for a smoother ___.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "shore",
        "pos":  "n",
        "he":  "חוף",
        "def":  "the land along the edge of a sea or lake",
        "example":  "The waves crashed against the rocky ___.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "show sb around / round",
        "pos":  "",
        "he":  "להראות למישהו את הסביבה",
        "def":  "to guide someone around a place, pointing things out",
        "example":  "Could you ___ before his first class starts?",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "shut (sb) up",
        "pos":  "",
        "he":  "להשתיק מישהו / לשתוק",
        "def":  "to stop talking, or to make someone stop talking (informal)",
        "example":  "He rudely told his brother to ___ during the movie.",
        "practice":  "During the heated debate on TV, she told him to ___.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "sidewalk",
        "pos":  "n",
        "he":  "מדרכה",
        "def":  "a paved path for walking beside a street (American English)",
        "example":  "They walked along the ___ to the coffee shop.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "sigh",
        "pos":  "v, n",
        "he":  "להיאנח / אנחה",
        "def":  "to breathe out slowly and loudly, showing tiredness or sadness",
        "example":  "She let out a long ___ after the stressful meeting.",
        "practice":  "He gave a deep ___ before admitting his mistake.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "silk",
        "pos":  "n",
        "he":  "משי",
        "def":  "a smooth, shiny fabric made from fibers produced by silkworms",
        "example":  "She wore a dress made of pure ___.",
        "practice":  "The scarf felt soft, like fine ___.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "sit up/stand up straight",
        "pos":  "",
        "he":  "לשבת/לעמוד זקוף",
        "def":  "to hold your back straight while sitting or standing",
        "example":  "The teacher asked the students to ___ during the exam.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "slave",
        "pos":  "n",
        "he":  "עבד",
        "def":  "a person who is owned by another and forced to work",
        "example":  "The museum exhibit told the story of a freed ___.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "sleeve",
        "pos":  "n",
        "he":  "שרוול",
        "def":  "the part of a shirt or coat that covers the arm",
        "example":  "He rolled up his ___ before washing the dishes.",
        "practice":  "She tore the ___ of her jacket on the fence.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "sore",
        "pos":  "adj",
        "he":  "כואב / מגורה",
        "def":  "painful or uncomfortable, especially a part of the body",
        "example":  "Her throat felt ___ after shouting at the concert.",
        "practice":  "His legs were ___ after the long hike up the hill.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "split up",
        "pos":  "",
        "he":  "להיפרד (זוג)",
        "def":  "to end a romantic relationship",
        "example":  "They decided to ___ after years of arguing.",
        "practice":  "Many fans were sad when the band chose to ___.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "sportsman",
        "pos":  "n",
        "he":  "ספורטאי",
        "def":  "a man who takes part in sports",
        "example":  "He is considered one of the greatest ___ of his generation.",
        "rec":  true,
        "family":  {
                       "en":  "sportswoman",
                       "pos":  "n",
                       "he":  "ספורטאית"
                   }
    },
    {
        "en":  "spot",
        "pos":  "v",
        "he":  "להבחין ב...",
        "def":  "to notice or see someone or something",
        "example":  "She was able to ___ her friend in the crowded stadium.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "spy",
        "pos":  "n, v",
        "he":  "מרגל / לרגל",
        "def":  "a person who secretly gathers information; to do this",
        "example":  "The movie is about a ___ working for two countries.",
        "practice":  "The agency trained him to ___ on enemy forces.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "squeeze",
        "pos":  "v, n",
        "he":  "לסחוט / ללחוץ",
        "def":  "to press something firmly from opposite sides",
        "example":  "She had to ___ the lemon to get its juice.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "stare",
        "pos":  "v, n",
        "he":  "לבהות",
        "def":  "to look at something for a long time",
        "example":  "He tends to ___ at the old paintings whenever he visits the museum.",
        "practice":  "The children began to ___ at the magician in amazement.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "stay over",
        "pos":  "",
        "he":  "ללון (אצל מישהו)",
        "def":  "to spend the night at someone\u0027s home",
        "example":  "She asked if she could ___ at her friend\u0027s house.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "stay up",
        "pos":  "",
        "he":  "להישאר ער",
        "def":  "to not go to sleep at the usual time",
        "example":  "They decided to ___ late to watch the final match.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "steep",
        "pos":  "adj",
        "he":  "תלול",
        "def":  "rising or falling sharply, hard to climb",
        "example":  "The path up the hill was too ___ for small children.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "step back / forward / over, etc.",
        "pos":  "",
        "he":  "לעשות צעד אחורה/קדימה/מעל וכו\u0027",
        "def":  "to move one step in a particular direction",
        "example":  "He had to ___ quickly to avoid the falling branch.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "step on/in sth",
        "pos":  "",
        "he":  "לדרוך על משהו",
        "def":  "to put your foot down on something",
        "example":  "Be careful not to ___ the wet paint.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "stick",
        "pos":  "n",
        "he":  "מקל",
        "def":  "a long, thin piece of wood",
        "example":  "The dog ran to fetch the ___ its owner threw.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "strangely enough",
        "pos":  "",
        "he":  "למרבה הפלא",
        "def":  "used to say something surprising is true",
        "example":  "___, no one noticed the mistake until the show ended.",
        "practice":  "___, the oldest computer in the lab still works perfectly.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "stream",
        "pos":  "n",
        "he":  "נחל",
        "def":  "a small, narrow river",
        "example":  "They crossed a small ___ on their way up the mountain.",
        "practice":  "Fresh water from the ___ flowed into the lake.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "stretch",
        "pos":  "v, n",
        "he":  "למתוח / מתיחה",
        "def":  "to extend your body or muscles; the act of doing so",
        "example":  "She likes to ___ before every morning run.",
        "practice":  "After sitting for hours, he stood up for a quick ___.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "strict",
        "pos":  "adj",
        "he":  "קפדני",
        "def":  "demanding that rules be obeyed exactly",
        "example":  "Our math teacher is very ___ about homework deadlines.",
        "practice":  "The new coach is much more ___ than the last one.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "string",
        "pos":  "n",
        "he":  "חוט / מיתר",
        "def":  "a thin cord, or the wire on a musical instrument",
        "example":  "He tied the package together with a thin ___.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "stripe",
        "pos":  "n",
        "he":  "פס (צבע)",
        "def":  "a long, narrow band of color",
        "example":  "The shirt had a bright red ___ across the chest.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "suit",
        "pos":  "v",
        "he":  "להתאים (למראה)",
        "def":  "to look good on someone, or to be convenient",
        "example":  "Those colors really ___ you.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "swear",
        "pos":  "v",
        "he":  "לקלל",
        "def":  "to use rude or offensive language",
        "example":  "He tends to ___ whenever he gets frustrated while driving.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "sweep",
        "pos":  "v",
        "he":  "לטאטא",
        "def":  "to clean a floor using a broom",
        "example":  "She likes to ___ the porch every evening.",
        "practice":  "He had to ___ the broken glass off the kitchen floor.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "sword",
        "pos":  "n",
        "he":  "חרב",
        "def":  "a weapon with a long, sharp blade",
        "example":  "The knight carried a heavy ___ into battle.",
        "practice":  "The museum displayed an ancient ___ from the medieval period.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "tail",
        "pos":  "n",
        "he":  "זנב",
        "def":  "the part at the back of an animal\u0027s body",
        "example":  "The dog wagged its ___ happily when its owner came home.",
        "practice":  "The monkey used its ___ to hang from the branch.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "take a risk",
        "pos":  "",
        "he":  "לקחת סיכון",
        "def":  "to do something that might have a bad result",
        "example":  "She decided to ___ and apply for the harder job.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "take sb out or take out sb",
        "pos":  "",
        "he":  "לקחת מישהו (לבילוי)",
        "def":  "to take someone to a place for entertainment, often a date",
        "example":  "He wants to ___ for her birthday dinner.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "tap",
        "pos":  "n",
        "he":  "ברז",
        "def":  "a device that controls the flow of water from a pipe",
        "example":  "He turned off the ___ after filling the glass.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "temple",
        "pos":  "n",
        "he":  "מקדש",
        "def":  "a building used for worship, especially in certain religions",
        "example":  "Tourists visited the ancient ___ near the river.",
        "practice":  "They lit candles inside the quiet ___.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "territory",
        "pos":  "n",
        "he":  "שטח / טריטוריה",
        "def":  "an area of land controlled by a country or ruler",
        "example":  "The soldiers patrolled the border of their ___.",
        "practice":  "The animal marked its ___ to warn off rivals.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "terror",
        "pos":  "n",
        "he":  "אימה / טרור",
        "def":  "extreme fear, or violent acts meant to cause fear",
        "example":  "The villagers lived in ___ during the war.",
        "practice":  "The hostages described their ___ during the long night.",
        "rec":  false,
        "family":  {
                       "en":  "terrorism / terrorist",
                       "pos":  "n / n, adj",
                       "he":  "טרור / מחבל"
                   }
    },
    {
        "en":  "tie sb/sth up or tie up sb/sth",
        "pos":  "",
        "he":  "לקשור מישהו/משהו",
        "def":  "to fasten someone or something with rope or string",
        "example":  "The robbers decided to ___ the guard before leaving.",
        "practice":  "She had to ___ the boat before the tide came in.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "tournament",
        "pos":  "n",
        "he":  "טורניר",
        "def":  "a competition with many matches between players or teams",
        "example":  "Our school is hosting a chess ___ next week.",
        "practice":  "She won first place in the tennis ___.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "track",
        "pos":  "n",
        "he":  "מסלול ריצה",
        "def":  "a path used for running races",
        "example":  "The athletes trained on the ___ every morning before school.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "tragedy",
        "pos":  "n",
        "he":  "טרגדיה",
        "def":  "a very sad event, or a serious, unhappy play",
        "example":  "The fire was a terrible ___ for the whole town.",
        "rec":  true,
        "family":  {
                       "en":  "tragic",
                       "pos":  "adj",
                       "he":  "טרגי"
                   }
    },
    {
        "en":  "triangle",
        "pos":  "n",
        "he":  "משולש",
        "def":  "a shape with three straight sides",
        "example":  "The teacher drew a ___ on the whiteboard.",
        "practice":  "She folded the paper into a small ___.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "tube",
        "pos":  "n",
        "he":  "צינור / שפופרת",
        "def":  "a long, hollow pipe, often made of metal or plastic",
        "example":  "He squeezed the last of the toothpaste from the ___.",
        "practice":  "Water flowed through a long rubber ___ into the tank.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "undressed",
        "pos":  "adj",
        "he":  "לא לבוש / עירום",
        "def":  "not wearing clothes",
        "example":  "The toddler got ___ right before his bath.",
        "practice":  "He got ___ quickly and jumped into the pool.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "unpack",
        "pos":  "v",
        "he":  "לפרוק (מזוודה)",
        "def":  "to remove things from a bag or box after arriving",
        "example":  "She started to ___ her suitcase as soon as she reached the hotel.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "van",
        "pos":  "n",
        "he":  "ואן / מכונית הובלה",
        "def":  "a medium-sized vehicle used to carry goods or people",
        "example":  "The delivery ___ stopped outside the house.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "verse",
        "pos":  "n",
        "he":  "בית (בשיר) / פסוק",
        "def":  "a section of a poem or song, or poetry in general",
        "example":  "She memorized the first ___ of the national anthem.",
        "rec":  true,
        "family":  null
    },
    {
        "en":  "weapon",
        "pos":  "n",
        "he":  "נשק",
        "def":  "an object used to harm or defend against others",
        "example":  "The soldiers were trained to use every kind of ___.",
        "practice":  "Police found a hidden ___ in the suspect\u0027s car.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "web",
        "pos":  "n",
        "he":  "קורי עכביש",
        "def":  "the net of threads made by a spider",
        "example":  "A delicate ___ stretched between the branches.",
        "practice":  "Morning dew made the spider\u0027s ___ sparkle in the sunlight.",
        "rec":  false,
        "family":  null
    },
    {
        "en":  "wheat",
        "pos":  "n",
        "he":  "חיטה",
        "def":  "a cereal plant whose grain is used to make flour",
        "example":  "Farmers harvested the golden ___ in late summer.",
        "practice":  "Bread is traditionally made from ground ___.",
        "rec":  false,
        "family":  null
    }
];
