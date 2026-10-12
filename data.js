/*
  YOUR LIBRARY DATA
  -----------------
  Add new videos to the "videos" array and new examples to "sentences".
  Keep IDs unique. A sentence's videoId must match a video's id.
  Punjabi text and notes are optional; fill them in whenever you want.
  
  

*/

const videos = [
  {
    id: 189,
    title: "How to talk about weather in Punjabi",
    url: "https://www.youtube.com/watch?v=COCYRNIpX1Q",
    summary: "This video is about how to speak about different types of weather."
  },
  {
    id: 141,
    title: "Colloquial Punjabi phrases about driving or car",
    url: "https://www.youtube.com/watch?v=0AhSnU7gwvc",
    summary: "Different things you're likely to say in a car. Remember the back-seat passenger vocabulary is different."
  },
  {
    id: 191,
    title: "how can you improve your Punjabi greetings as a beginner?",
    url: "https://www.youtube.com/watch?v=Ca0IvVZ4yl0",
    summary: ""
  },
  {
    id: 134,
    title: "How to use these verbs in Punjabi ਭਿਆਂ ਕਰਨਾ, ਭੁਸ ਪਾਉਣਾ etc",
    url: "https://www.youtube.com/watch?v=e0JaFH5mGuA",
    summary: ""
  },
  {
    id: 1001,
    title: "Learn Punjabi real life speaking through photos",
    url: "https://www.youtube.com/watch?v=1Ntbxmhp7Cg&list=PLXurt65elwvjCJykW-mMvCZOpjqd9GyH1&index=13",
    summary: ""
  },
  {
    id: 1002,
    title: "Pronouns",
    url: "https://www.youtube.com/watch?v=DaeEzVk1Nt0&list=PLXurt65elwvjCJykW-mMvCZOpjqd9GyH1&index=3",
    summary: ""
  },
  {
    id: 1003,
    title: "Possesive Pronouns",
    url: "https://www.youtube.com/watch?v=vyvc1jcxh-E&list=PLXurt65elwvjCJykW-mMvCZOpjqd9GyH1&index=4",
    summary: "This is a good video to rewatch with all examples spelled. "
  },
  {
    id: 1004,
    title: "Passive Pronouns",
    url: "https://www.youtube.com/watch?v=2yHvERQCLvs&list=PLXurt65elwvjCJykW-mMvCZOpjqd9GyH1&index=5",
    summary: ""
  }
];

const sentences = [
  {
    id: 1,
    videoId: 189,
    english: "Today it's going to rain",
    punjabi: "",
    notes: "snow is 'pougi' because its a feminine word and 'mee' is 'pouga' because it's masculine.",
    audio: "audio/1.mp3"
  },
  {
    id: 2,
    videoId: 189,
    english: "Today it's going to snow",
    punjabi: "",
    notes: "snow is 'pougi' because its a feminine word and 'mee' is 'pouga' because it's masculine.",
    audio: "audio/2.mp3"
  },
  {
    id: 3,
    videoId: 189,
    english: "Today it's 30*C",
    punjabi: "",
    notes: "Pretty much same as English, or you can say 'Thee' for 30",
    audio: "audio/3.mp3"
  },
  {
    id: 4,
    videoId: 189,
    english: "Today will be a sunny day",
    punjabi: "",
    notes: "the verb is 'nicklna' meantnig to come out. So in future we say 'nicklougi'. 'Thop' is a feminine word so we say 'nicklougi'. 'Soorj' which means sun is a masculine word but still we say 'nicklougi' since 'thop' is feminine.",
    audio: "audio/4.mp3"
  },
  {
    id: 5,
    videoId: 189,
    english: "A snake came out of their house",
    punjabi: "",
    notes: "",
    audio: "audio/5.mp3"
  },
  {
    id: 6,
    videoId: 189,
    english: "Tomorrow the sun will come out/ it will rain/ it will snow",
    punjabi: "",
    notes: "",
    audio: "audio/6.mp3"
  },
  {
    id: 7,
    videoId: 189,
    english: "Today will be windy",
    punjabi: "",
    notes: "",
    audio: "audio/7.mp3"
  },
  {
    id: 8,
    videoId: 189,
    english: "A storm is coming",
    punjabi: "",
    notes: "Can use 'ajj' for today or 'kalnoo' for tomorrow, 'ona' is the verb so in future 'its' 'ougi' for feminine and 'ouga' for masculine. 'Neri' is smaller 'Dafoun' is bigger storm. ",
    audio: "audio/8.mp3"
  },
  {
    id: 9,
    videoId: 189,
    english: "I will come tomorrow (masculine and feminine)",
    punjabi: "",
    notes: "because we use the nasal sound for 'mehn' (I), that's why its 'ounga' but for the storm the 'dafoun' since its an object you would say 'ouga' losing the nasal sound",
    audio: "audio/9.mp3"
  },
  {
    id: 10,
    videoId: 189,
    english: "The sun will rise at 06:40",
    punjabi: "",
    notes: "'Charna' is th verb here so in future its 'charouga'",
    audio: "audio/10.mp3"
  },
  {
    id: 11,
    videoId: 189,
    english: "The sun will set at 17:46",
    punjabi: "",
    notes: "The verb is 'shipna'. 'Shipouga' meaning to set in future",
    audio: "audio/11.mp3"
  },
  {
    id: 12,
    videoId: 141,
    english: "I want to drive the car / I will drive the car",
    punjabi: "",
    notes: "",
    audio: "audio/12.mp3"
  }
  
,
  {
    id: 13,
    videoId: 141,
    english: "Sit in the back seat",
    punjabi: "",
    notes: "",
    audio: "audio/13.mp3"
  }
,
  {
    id: 14,
    videoId: 141,
    english: "One person sit in the front",
    punjabi: "",
    notes: "",
    audio: "audio/14.mp3"
  }
,
  {
    id: 15,
    videoId: 141,
    english: "Close the window (saying to one person)",
    punjabi: "",
    notes: "",
    audio: "audio/15.mp3"
  }
,
  {
    id: 16,
    videoId: 141,
    english: "Close the window (saying to two people)",
    punjabi: "",
    notes: "you can also say this to one person if you want to say respectfully 'karlo' for respect as opposed to 'karla'",
    audio: "audio/16.mp3"
  }
,
  {
    id: 17,
    videoId: 141,
    english: "Close the window/ open the window",
    punjabi: "",
    notes: "",
    audio: "audio/17.mp3"
  }
,
  {
    id: 18,
    videoId: 141,
    english: "Close the window (for yourself, for me)",
    punjabi: "",
    notes: "The difference between 'col'la' and 'col'de'",
    audio: "audio/18.mp3"
  }
,
  {
    id: 19,
    videoId: 141,
    english: "Don't drive the car so fast, you can hit somebody ",
    punjabi: "",
    notes: "",
    audio: "audio/19.mp3"
  }
,
  {
    id: 20,
    videoId: 134,
    english: "Why did you make such a mess",
    punjabi: "",
    notes: "",
    audio: "audio/20.mp3"
  }
,
  {
    id: 21,
    videoId: 134,
    english: "Alright bro my hands are up, now we're not working, we will work later",
    punjabi: "",
    notes: "This is an idiom",
    audio: "audio/21.mp3"
  }
,
  {
    id: 22,
    videoId: 134,
    english: "No more work now, I cannot continue",
    punjabi: "",
    notes: "",
    audio: "audio/22.mp3"
  }
,
  {
    id: 23,
    videoId: 134,
    english: "No bro, I'm done (my hands are up)",
    punjabi: "",
    notes: "for example when you're at the gym and bro says do another set",
    audio: "audio/23.mp3"
  }
,
  {
    id: 24,
    videoId: 134,
    english: "No bro, I'm done",
    punjabi: "",
    notes: "",
    audio: "audio/24.mp3"
  }
,
  {
    id: 25,
    videoId: 134,
    english: "I'm not speaking with that guy because i'm angry/dissapointed. ",
    punjabi: "",
    notes: "'Gusay' doesn't just mean angry. ",
    audio: "audio/25.mp3"
  }
,
  {
    id: 26,
    videoId: 134,
    english: "Why are you getting angry (male) ",
    punjabi: "",
    notes: "Instead of 'katho' could have also used 'kyon'",
    audio: "audio/26.mp3"
  }
,
  {
    id: 27,
    videoId: 134,
    english: "Why are you getting angry (female)",
    punjabi: "",
    notes: "The verb changed. 'Harkna' is the verb. In future it's 'harkouga' / 'harkougi', in past it's 'hark'gi' / 'hark'gya'",
    audio: "audio/27.mp3"
  }
,
  {
    id: 28,
    videoId: 134,
    english: "Yesterday she got really angry ",
    punjabi: "",
    notes: "",
    audio: "audio/28.mp3"
  }
,
  {
    id: 29,
    videoId: 134,
    english: "Yesterday he got so angry",
    punjabi: "",
    notes: "",
    audio: "audio/29.mp3"
  }
,
  {
    id: 30,
    videoId: 134,
    english: "Don't do that because she will get angry ",
    punjabi: "",
    notes: "",
    audio: "audio/30.mp3"
  }
,
  {
    id: 31,
    videoId: 134,
    english: "Don't do that or he will get very angry ",
    punjabi: "",
    notes: "",
    audio: "audio/31.mp3"
  }
,
  {
    id: 32,
    videoId: 134,
    english: "Who made him want to eat ice cream? David's son made him want to eat ice cream. ",
    punjabi: "",
    notes: "",
    audio: "audio/32.mp3"
  }
,
  {
    id: 33,
    videoId: 134,
    english: "I don't find it difficult, I've made it a habit",
    punjabi: "",
    notes: "",
    audio: "audio/33.mp3"
  }
,
  {
    id: 34,
    videoId: 134,
    english: "It's my habit. 2 variations",
    punjabi: "",
    notes: "'aadat' and 'pyos'",
    audio: "audio/34.mp3"
  }
,
  {
    id: 35,
    videoId: 191,
    english: "How are you (more formal)",
    punjabi: "",
    notes: "at end say 'ha' not 'hai' if want to be colloquial. ",
    audio: "audio/35.mp3"
  }
,
  {
    id: 36,
    videoId: 191,
    english: "How are you (saying to a friend)",
    punjabi: "",
    notes: "",
    audio: "audio/36.mp3"
  }
,
  {
    id: 37,
    videoId: 191,
    english: "How are you (Doaba region)",
    punjabi: "",
    notes: "",
    audio: "audio/37.mp3"
  }
,
  {
    id: 38,
    videoId: 191,
    english: "How are you/ what's new",
    punjabi: "",
    notes: "",
    audio: "audio/38.mp3"
  }
,
  {
    id: 39,
    videoId: 191,
    english: "I'm good",
    punjabi: "",
    notes: "",
    audio: "audio/39.mp3"
  }
,
  {
    id: 40,
    videoId: 191,
    english: "I'm good, and you?",
    punjabi: "",
    notes: "",
    audio: "audio/40.mp3"
  }
,
  {
    id: 41,
    videoId: 191,
    english: "I'm also good",
    punjabi: "",
    notes: "",
    audio: "audio/41.mp3"
  }
,
  {
    id: 42,
    videoId: 1000,
    english: "What is this thing called",
    punjabi: "",
    notes: "Answer is going to be the same replacing 'ki' with the thing e.g. 'ehno pathar kendae'a'",
    audio: "audio/42.mp3"
  }
,
  {
    id: 43,
    videoId: 1001,
    english: "Whats the name of this thing",
    punjabi: "",
    notes: "Answer 'ehda na pathar aa'",
    audio: "audio/43.mp3"
  }
,
  {
    id: 44,
    videoId: 1001,
    english: "I want to drink tea",
    punjabi: "",
    notes: "",
    audio: "audio/44.mp3"
  }
,
  {
    id: 45,
    videoId: 1002,
    english: "Where did you go yesterday (to more than 1 person, or respectfully to 1 person)",
    punjabi: "",
    notes: "",
    audio: "audio/45.mp3"
  }
,
  {
    id: 46,
    videoId: 1002,
    english: "Where did you go yesterday (to 1 person)",
    punjabi: "",
    notes: "",
    audio: "audio/46.mp3"
  }
,
  {
    id: 47,
    videoId: 1002,
    english: "He/She/They played football yesterday",
    punjabi: "",
    notes: "'khedia', 'khedi', 'kheday'. The verb changes. Same pronoun 'oh'",
    audio: "audio/47.mp3"
  }
,
  {
    id: 48,
    videoId: 1002,
    english: "That/This is my car",
    punjabi: "",
    notes: "if its far use 'oh'. If its close use 'eh or 'ah'",
    audio: "audio/48.mp3"
  }
,
  {
    id: 49,
    videoId: 1002,
    english: "These people are good",
    punjabi: "",
    notes: "",
    audio: "audio/49.mp3"
  }
,
  {
    id: 50,
    videoId: 1002,
    english: "Yesterday me and David were drinking tea, and he said to me I shouldn't drink tea",
    punjabi: "mein te David kall cha pee ee jande seegay te eh meinu kahnda, tu cha nahi peeni",
    notes: "cant use 'ah' here since david is not present. have to use 'eh' or 'oh'",
    audio: "audio/50.mp3"
  }
,
  {
    id: 51,
    videoId: 1003,
    english: "This is my pen",
    punjabi: "",
    notes: "'mera' because pen is a masculine thing",
    audio: "audio/51.mp3"
  }
,
  {
    id: 52,
    videoId: 1003,
    english: "This is my book",
    punjabi: "",
    notes: "'Meri' because book is feminine. ",
    audio: "audio/52.mp3"
  }
,
  {
    id: 53,
    videoId: 1003,
    english: "This is their car",
    punjabi: "",
    notes: "for example if 2 brothers own a car",
    audio: "audio/53.mp3"
  }
,
  {
    id: 54,
    videoId: 1003,
    english: "These are his cars",
    punjabi: "'eh ohdiea caran nay'",
    notes: "one person owns 2 cars",
    audio: "audio/54.mp3"
  }
,
  {
    id: 55,
    videoId: 1003,
    english: "These are his motorcycles",
    punjabi: "'eh ohday motorcycle aa'",
    notes: "",
    audio: "audio/55.mp3"
  }
,
  {
    id: 56,
    videoId: 1003,
    english: "I'ts my car",
    punjabi: "",
    notes: "meri car aa meri avdi car aa meri apni car aa eh ta apni car",
    audio: "audio/56.mp3"
  }
,
  {
    id: 57,
    videoId: 1004,
    english: "I'm going to school ",
    punjabi: "",
    notes: "",
    audio: "audio/57.mp3"
  }
,
  {
    id: 58,
    videoId: 1004,
    english: "I'm hungry",
    punjabi: "",
    notes: "",
    audio: "audio/58.mp3"
  }
,
  {
    id: 59,
    videoId: 1004,
    english: "Are you hungry",
    punjabi: "",
    notes: "'tennu' used with friends 'tohanu' used for respect or for plural",
    audio: "audio/59.mp3"
  }
,
  {
    id: 60,
    videoId: 1004,
    english: "Give me the money",
    punjabi: "",
    notes: "'ohna nu' for give them, 'ohnu' give him/her etc",
    audio: "audio/60.mp3"
  }
];
