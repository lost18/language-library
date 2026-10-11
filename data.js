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
    id: 134,
    title: "How to use these verbs in Punjabi ਭਿਆਂ ਕਰਨਾ, ਭੁਸ ਪਾਉਣਾ etc",
    url: "https://www.youtube.com/watch?v=e0JaFH5mGuA",
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
];
