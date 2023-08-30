const axios = require('axios');
require('./connection.js');
const Recommendation = require('./schema/Recommendation');
require('./global.js');
const Subtitle = require('./schema/Subtitle');
const RawSubtitle = require('./schema/RawSubtitle.js');
// const Video = require('./schema/Video.js');
const fs = require('fs');
 

//   const youtubeScraper = require('youtube-captions-scraper');

async function Test(){

  fs.rename('./public/uploads/ma.jpeg', './public/uploads/a.jpeg', file =>{
    console.log(file);
  })



}



Test();


//   const testSubtitleDb = {
//   "_id": {
//     "$oid": "64ba475a731586bc1987e2d8"
//   },
//   "isauto": false,
//   "caption": [
//     {
//       "text": "3 liters of fresh whole milk (not reconstituted).",
//       "start": 1.466,
//       "dur": 7.467
//     },
//     {
//       "text": "3 tablespoons of lemon juice or 9% vinegar (you may need a little more).",
//       "start": 11.9,
//       "dur": 7.5
//     },
//     {
//       "text": "1-1.5 tablespoons of salt (depending on your taste, you can skip the salt).",
//       "start": 24.033,
//       "dur": 7.5
//     },
//     {
//       "text": "heat until the milk begins to curdle.",
//       "start": 45.666,
//       "dur": 10.767
//     },
//     {
//       "text": "strain through a sieve with gauze.",
//       "start": 66.1,
//       "dur": 10.766
//     },
//     {
//       "text": "Do not pour out milk whey! It makes excellent pancakes and cookies. Or you can make other homemade cheeses from it.",
//       "start": 87.2,
//       "dur": 10.733
//     },
//     {
//       "text": "Let stand under weight for 6 hours, preferably overnight.",
//       "start": 137.4,
//       "dur": 6.166
//     },
//     {
//       "text": "The cheese has a delicate structure, perfect for coffee, salads.",
//       "start": 180.766,
//       "dur": 6.2
//     },
//     {
//       "text": "Store in the refrigerator for up to 4 days. If stored in brine, store up to 7 days.",
//       "start": 190.9,
//       "dur": 6.166
//     },
//     {
//       "text": "Do you like soft cheese?",
//       "start": 199.433,
//       "dur": 4.3
//     },
//     {
//       "text": "Good Appetite!",
//       "start": 208.533,
//       "dur": 4.3
//     }
//   ],
//   "__v": 0,
//   "videorecordid": "64ba473b731586bc198794b8"
// }
// console.log(testSubtitleDb)
//   const testdb = [{
//     "videoid": "01wiHv2vgbg",
//     "title": "leckeres und schnelles Rezept für hausgemachten Panir Käse, nur 2 Zutaten - nur Milch und ? ohne Lab",
//     "thumbnailurl": {
//         "default": {
//             "url": "https://i.ytimg.com/vi/01wiHv2vgbg/default.jpg",
//             "width": 120,
//             "height": 90
//         },
//         "medium": {
//             "url": "https://i.ytimg.com/vi/01wiHv2vgbg/mqdefault.jpg",
//             "width": 320,
//             "height": 180
//         },
//         "high": {
//             "url": "https://i.ytimg.com/vi/01wiHv2vgbg/hqdefault.jpg",
//             "width": 480,
//             "height": 360
//         },
//         "standard": {
//             "url": "https://i.ytimg.com/vi/01wiHv2vgbg/sddefault.jpg",
//             "width": 640,
//             "height": 480
//         },
//         "maxres": {
//             "url": "https://i.ytimg.com/vi/01wiHv2vgbg/maxresdefault.jpg",
//             "width": 1280,
//             "height": 720
//         }
//     },
//     "uploaddate": "2021-02-24T11:08:11Z",
//     "channelid": "UCnpNtqtWMbv-YcZIIsRViVQ",
//     "channelname": "leckere Küche"
// },];
// const testNest = {
//   testFieldName : testdb,
//   testAnotherName: testdb
// }
// console.log(testNest)
//   const a = await Subtitle.updateMany( 
//     {},
    
//       { $rename: { "videoid": "videorecordid" }}
  
//     ,
//     { multi: true }
//  );

//  console.log(a)
//   const a = await RawSubtitle.updateMany( 
//     { "caption.t": { $exists: true },},
//     [{
//       $set: {
//         caption: {
//           $map: {
//             input: "$caption",
//             in: {
//               text: "$$this.t",
//               start: "$$this.-start",
//               dur: "$$this.-dur"
//             }
//           }
//         }
//       }
//     }],
//     { multi: true }
//  );




// const a = await RawSubtitle.find({foo:{$exists:true}})
    // youtubeScraper.getSubtitles({
    //   videoID: 'OwMlnkUX354', // youtube video id
    //   lang: 'en' // default: `en`
    // }).then(captions => {
    //   //console.log(captions);
    //   if(captions==[]) {
    //     // res.status(404).json({
    //     //         error: "Video not found",
    //     //         message: "from getSubtitle: the video subtitle not found in database"
    //     //       })
    //     console.log('nothing');
    //   }
    //   else {
    //   //   res.status(200).json({
    //   //   success: true,
    //   //   message: "video subtitle found",
    //   //   data: {
    //   //     captions
    //   //   }
    //   // })

    //   console.log(captions);
    //   }
      
    // })
    
// async function Test() {
//     const recommendid = await Recommendation.find({isactive: true}).exec();
//     //console.log(recommendid);
//     var videoId = [];
//     var res = [];
//     for (let i = 0; i < recommendid.length; i++) {
//             videoId.push(recommendid[i].videoid);
//     }


//     // console.log("recommendid belike: ",recommendid)
//      console.log("videoId belike: ",videoId)
//     //console.log("apikey is like: ", apiKey);
//     axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`)
//         .then(response => {
//             // Handle the response data
//             //console.log(response);
//             for (let i = 0; i < response.data.items.length; i++) {
                
//                 res.push({
//                     "videoid": response.data.items[i].id,
//                     "title": response.data.items[i].snippet.title,
//                     "thumbnailurl": response.data.items[i].snippet.thumbnails,
//                     "uploaddate": response.data.items[i].snippet.publishedAt,
//                     "channelid": response.data.items[i].snippet.channelId,
//                     "channelname": response.data.items[i].snippet.channelTitle
//                 });
//             }

//             console.log("res will be like: ", res);

//         })
//         .catch(error => {
//             // Handle any errors
//             console.error(error);
//         });
// }

// Test();
// const quickstart = require('./quickstart');
//    const sentences = [
// //     { "t" : "This is an example sentence."},
//     { "t" : "Another example of using regex."},
//     { "t" : "Regex patterns can be powerful."},
//     { "t" : "The word example is present here."},
//   ];
  
// quickstart.getChannel();

// async function Test() {

  // const video = await Video.findById('64ba473b731586bc198794e4').exec();
  // console.log(video);


//   const wordToFind = "milk";
//   const regexPattern = new RegExp(`\\b${wordToFind}\\b`, 'gi');
  
// //   const matchedSentences = Subtitle.caption.filter((sentence) => sentence.t.match(regexPattern));
//   const thai = await Subtitle.find({ videoid: ['64ba475a731586bc1987e300','64ba473b731586bc198794b8', '64ba473b731586bc198794e4'] ,"caption.t" : regexPattern }).limit(5).exec();
//   console.log(thai);



//   console.log(matchedSentences);
// function countUniqueWords(sentence) {
//     // Step 1: Split the sentence into individual words
//     const words = sentence.split(/\W+/);
  
//     // Step 2: Create an array to store unique words and their counts
//     const wordCounts = [];
  
//     // Step 3: Iterate through the words and update the counts
//     for (const word of words) {
//       // Convert the word to lowercase to make the counting case-insensitive
//       const lowercaseWord = word.toLowerCase();
  
//       // Skip empty strings and single characters (you can modify this condition if needed)
//       if (lowercaseWord.length <= 1) {
//         continue;
//       }
  
//       // Check if the word already exists in the wordCounts array
//       const existingWordIndex = wordCounts.findIndex(item => item.word === lowercaseWord);
  
//       // Update the count for the current word or add it to the array
//       if (existingWordIndex !== -1) {
//         wordCounts[existingWordIndex].count++;
//       } else {
//         wordCounts.push({ word: lowercaseWord, count: 1 });
//       }
//     }
  
//     return wordCounts;
//   }
  
//   // Test the function with a sample sentence
//   const sentence = "The quick brown fox jumps over the lazy dog. The dog barks, and the fox runs away.";
//   const uniqueWordCounts = countUniqueWords(sentence);
  
//   console.log(uniqueWordCounts);
// }
  // {"config": 
  //   {"adapter": ["xhr", "http"], 
  //   "data": "{\"wordToFind\":\"Milk\"}", 
  //   "env": {"Blob": [Function Blob], 
  //   "FormData": [Function FormData]}, 
  //   "headers": [Object], 
  //   "maxBodyLength": -1, 
  //   "maxContentLength": -1, 
  //   "method": "post", 
  //   "timeout": 0, 
  //   "transformRequest": [[Function transformRequest]], 
  //   "transformResponse": [[Function transformResponse]], 
  //   "transitional": {"clarifyTimeoutError": false, 
  //   "forcedJSONParsing": true, "silentJSONParsing": true}, 
  //   "url": "http://192.168.1.178:9000/video/search-subtitle", 
  //   "validateStatus": [Function validateStatus], 
  //   "xsrfCookieName": "XSRF-TOKEN", "xsrfHeaderName": "X-XSRF-TOKEN"}, 
  //   "data": {"data": {"finalRes": [Obje
  