const axios = require('axios');
require('./connection.js');
const Recommendation = require('./schema/Recommendation');
require('./global.js');
const Subtitle = require('./schema/Subtitle');
const RawSubtitle = require('./schema/RawSubtitle.js');
// const Video = require('./schema/Video.js');


//   const youtubeScraper = require('youtube-captions-scraper');

async function Test(){

  


  const regexPattern = new RegExp(`(?<!\\w)${"dad"}(?!\\w)`, 'gi');
  const array = []
  const a = await Subtitle.find({"caption.text": regexPattern }).limit(5).exec();
  // console.log(a);
  a.forEach(e => {
    for(let i=0;i<e.caption.length;i++){
       if (e.caption[i].text.match(regexPattern)){
      array.push({text: e.caption[i].text, video: e.videoid});
      break;
    }
    }
    // 
  });
   
 
  console.log(array);

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
    
}

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

Test();

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
  //     ct]}, "error": "test", "message": "okay"}, "headers": {"connection": "keep-alive", "content-length": "34282", "content-type": "application/json; charset=utf-8", "date": "Mon, 14 Aug 2023 09:25:34 GMT", "etag": "W/\"85ea-NCCSe81mL8tP2vTNvfa/P39FBfM\"", "keep-alive": "timeout=5", "x-powered-by": "Express"}, "request": {"DONE": 4, "HEADERS_RECEIVED": 2, "LOADING": 3, "OPENED": 1, "UNSENT": 0, "_aborted": false, "_cachedResponse": undefined, "_hasError": false, "_headers": {"accept": "application/json, text/plain, */*", "content-type": "application/json"}, "_incrementalEvents": false, "_lowerCaseResponseHeaders": {"connection": "keep-alive", "content-length": "34282", "content-type": "application/json; charset=utf-8", "date": "Mon, 14 Aug 2023 09:25:34 GMT", "etag": "W/\"85ea-NCCSe81mL8tP2vTNvfa/P39FBfM\"", "keep-alive": "timeout=5", "x-powered-by": "Express"}, "_method": "POST", "_perfKey": "network_XMLHttpRequest_http://192.168.1.178:9000/video/search-subtitle", "_performanceLogger": {"_closed": false, "_extras": [Object], "_isLoggingForWebPerformance": false, "_pointExtras": [Object], "_points": [Object], "_timespans": [Object]}, "_requestId": null, "_response": "{\"error\":\"test\",\"message\":\"okay\",\"data\":{\"finalRes\":{\"history\":[{}],\"other\":[{\"videoid\":\"1WySnb16OJQ\",\"title\":\"Hast du Milch und Schokolade Leckeres Dessert! KEIN Mehl, KEIN Ofen, KEINE Gelatine!\",\"thumbnailurl\":{\"default\":{\"url\":\"https://i.ytimg.com/vi/1WySnb16OJQ/default.jpg\",\"width\":120,\"height\":90},\"medium\":{\"url\":\"https://i.ytimg.com/vi/1WySnb16OJQ/mqdefault.jpg\",\"width\":320,\"height\":180},\"high\":{\"url\":\"https://i.ytimg.com/vi/1WySnb16OJQ/hqdefault.jpg\",\"width\":480,\"height\":360},\"standard\":{\"url\":\"https://i.ytimg.com/vi/1WySnb16OJQ/sddefault.jpg\",\"width\":640,\"height\":480},\"maxres\":{\"url\":\"https://i.ytimg.com/vi/1WySnb16OJQ/maxresdefault.jpg\",\"width\":1280,\"height\":720}},\"uploaddate\":\"2021-07-30T12:00:01Z\",\"channelid\":\"UCzpZg2N0drH4nrnPn0PJyNQ\",\"channelname\":\"Köstliches Essen\",\"samplesentence\":\"\"},{\"videoid\":\"5GOJmk4bpSc\",\"title\":\"SUB) 3일동안 배달음식 폭식하는 먹방VLOG/소곱창+막창떡볶이/엄청매운국물닭발+돈까스/신라면불닭볶음면+간지치킨/마라탕/컵라면/비빔냉면/마카롱/편의점디저트/크로플/민트초코\",\"thumbnailurl\":{\"default\":{\"url\":\"https://i.ytimg.com/vi/5GOJmk4bpSc/default.jpg\",\"width\":120,\"height\":90},\"medium\":{\"url\":\"https://i.ytimg.com/vi/5GOJmk4bpSc/mqdefault.jpg\",\"width\":320,\"height\":180},\"high\":{\"url\":\"https://i.ytimg.com/vi/5GOJmk4bpSc/hqdefault.jpg\",\"width\":480,\"height\":360},\"standard\":{\"url\":\"https://i.ytimg.com/vi/5GOJmk4bpSc/sddefault.jpg\",\"width\":640,\"height\":480},\"maxres\":{\"url\":\"https://i.ytimg.com/vi/5GOJmk4bpSc/maxresdefault.jpg\",\"width\":1280,\"height\":720}},\"uploaddate\":\"2021-09-10T08:59:16Z\",\"channelid\":\"UCowzNAHxPyiZoIfodZCouiw\",\"channelname\":\"비연Beeyeon\",\"samplesentence\":\"\"},{\"videoid\":\"6Gd6xWi6Hyo\",\"title\":\"훈훈함 주의!! 보면 볼수록 기분 좋아지는 제과제빵 5편 몰아보기 / we are happy! making a surprisingly popular bakery\",\"thumbnailurl\":{\"default\":{\"url\":\"https://i.ytimg.com/vi/6Gd6xWi6Hyo/default.jpg\",\"width\":120,\"height\":90},\"medium\":{\"url\":\"https://i.ytimg.com/vi/6Gd6xWi6Hyo/mqdefault.jpg\",\"width\":320,\"height\":180},\"high\":{\"url\":\"https://i.ytimg.com/vi/6Gd6xWi6Hyo/hqdefault.jpg\",\"width\":480,\"height\":360},\"standard\":{\"url\":\"https://i.ytimg.com/vi/6Gd6xWi6Hyo/sddefault.jpg\",\"width\":640,\"height\":480},\"maxres\":{\"url\":\"https://i.ytimg.com/vi/6Gd6xWi6Hyo/maxresdefault.jpg\",\"width\":1280,\"height\":720}},\"uploaddate\":\"2021-02-19T11:16:29Z\",\"channelid\":\"UCKjq5UrlxXqb7EgPwZl5JNg\",\"channelname\":\"푸드스토리 FoodStory\",\"samplesentence\":\"\"},{\"videoid\":\"7ZQTSTc_rCQ\",\"title\":\"American English Words | Daily Use English Words & Sentences | Self Study English ✔\",\"thumbnailurl\":{\"default\":{\"url\":\"https://i.ytimg.com/vi/7ZQTSTc_rCQ/default.jpg\",\"width\":120,\"height\":90},\"medium\":{\"url\":\"https://i.ytimg.com/vi/7ZQTSTc_rCQ/mqdefault.jpg\",\"width\":320,\"height\":180},\"high\":{\"url\":\"https://i.ytimg.com/vi/7ZQTSTc_rCQ/hqdefault.jpg\",\"width\":480,\"height\":360},\"standard\":{\"url\":\"https://i.ytimg.com/vi/7ZQTSTc_rCQ/sddefault.jpg\",\"width\":640,\"height\":480},\"maxres\":{\"url\":\"https://i.ytimg.com/vi/7ZQTSTc_rCQ/maxresdefault.jpg\",\"width\":1280,\"height\":720}},\"uploaddate\":\"2020-11-23T11:00:16Z\",\"channelid\":\"UCvUNfNinvW3vL8QV2GKBgtA\",\"channelname\":\"Self Study English\",\"samplesentence\":\"\"},{\"videoid\":\"7PXAuJ3AsH8\",\"title\":\"〔vlog〕事務職会社員の1週間｜私のボーナスの使い道｜a week in my life｜20代社会人OLの日常\",\"thumbnailurl\":{\"default\":{\"url\":\"https://i.ytimg.com/vi/7PXAuJ3AsH8/default.jpg\",\"width\":120,\"height\":90},\"medium\":{\"url\":\"https://i.ytimg.com/vi/7PXAuJ3AsH8/mqdefault.jpg\",\"width\":320,\"height\":180},\"high\":{\"url\":\"https://i.ytimg.com/vi/7PXAuJ3AsH8/hqdefault.jpg\",\"width\":480,\"height\":360},\"standard\":{\"url\":\"https://i.ytimg.com/vi/7PXAuJ3AsH8/sddefault.jpg\",\"width\":640,\"height\":480}},\"uploaddate\":\"2021-07-21T13:56:16Z\",\"channelid\":\"UCL-GHTqFP4sf9JkFKmjWHOg\",\"channelname\":\"meme. vlog\",\"samplesentence\":\"\"},{\"videoid\":\"AHjT5tgAsrc\",\"title\":\"(SUB) 26살 엄마의 육아브이로그 / 아이와 피자만들기, 소불고기  레시피, 남매일상\",\"thumbnailurl\":{\"default\":{\"url\":\"https://i.ytimg.com/vi/AHjT5tgAsrc/default.jpg\",\"width\":120,\"height\":90},\"medium\":{\"url\":\"https://i.ytimg.com/vi/AHjT5tgAsrc/mqdefault.jpg\",\"width\":320,\"height\":180},\"high\":{\"url\":\"https://i.ytimg.com/vi/AHjT5tgAsrc/hqdefault.jpg\",\"width\":480,\"height\":360},\"standard\":{\"url\":\"https://i.ytimg.com/vi/AHjT5tgAsrc/sddefault.jpg\",\"width\":640,\"height\":480},\"maxres\":{\"url\":\"https://i.ytimg.com/vi/AHjT5tgAsrc/maxresdefault.jpg\",\"width\":1280,\"height\":720}},\"uploaddate\":\"2021-12-08T10:00:04Z\",\"channelid\":\"UCBlrDQmlXSUbt2dmwvuC54A\",\"channelname\":\"츄 릅Chuuu\",\"samplesentence\":\"\"},{\"videoid\":\"aYzfDKL8n28\",\"title\":\"Ich habe noch nie so ein leckeres Abendessen gegessen! Meine ganze Familie ist glücklich!\",\"thumbnailurl\":{\"default\":{\"url\":\"https://i.ytimg.com/vi/aYzfDKL8n28/default.jpg\",\"width\":120,\"height\":90},\"medium\":{\"url\":\"https://i.ytimg.com/vi/aYzfDKL8n28/mqdefault.jpg\",\"width\":320,\"height\":180},\"high\":{\"url\":\"https://i.ytimg.com/vi/aYzfDKL8n28/hqdefault.jpg\",\"width\":480,\"height\":360},\"standard\":{\"url\":\"https://i.ytimg.com/vi/aYzfDKL8n28/sddefault.jpg\",\"width\":640,\"height\":480},\"maxres\":{\"url\":\"https://i.ytimg.com/vi/aYzfDKL8n28/maxresdefault.jpg\",\"width\":1280,\"height\":720}},\"uploaddate\":\"2021-10-05T18:03:12Z\",\"channelid\":\"UCpAnGnYxe4Lv59J6uo9s8KQ\",\"channelname\":\"Einfaches Essen\",\"samplesentence\":\"\"},{\"videoid\":\"cVv32VQPGVY\",\"title\":\"花屋vlog 2021 #15【Dahlia arrangement】花屋が作る9周年を祝うダリアのフラワーアレンジメント　お祝いの気持ちをお花で表現する花屋の仕事\",\"thumbnailurl\":{\"default\":{\"url\":\"https://i.ytimg.com/vi/cVv32VQPGVY/default.jpg\",\"width\":120,\"height\":90},\"medium\":{\"url\":\"https://i.ytimg.com/vi/cVv32VQPGVY/mqdefault.jpg\",\"width\":320,\"height\":180},\"high\":{\"url\":\"https://i.ytimg.com/vi/cVv32VQPGVY/hqdefault.jpg\",\"width\":480,\"height\":360},\"standard\":{\"url\":\"https://i.ytimg.com/vi/cVv32VQPGVY/sddefault.jpg\",\"width\":640,\"height\":480},\"maxres\":{\"url\":\"https://i.ytimg.com/vi/cVv32VQPGVY/maxresdefault.jpg\",\"width\":1280,\"height\":720}},\"uploaddate\":\"2021-04-14T09:27:13Z\",\"channelid\":\"UCue9GO1e4x-d-zozpDj_eCw\",\"channelname\":\"花屋のにぃにぃ\",\"samplesentence\":\"\"},{\"videoid\":\"CJzkGeasJcs\",\"title\":\"Schmilzt im Mund! schnelle ZITRONENTORTE aus Blätterteig! Erfrischend und saftig! Billig und lecker\",\"thumbnailurl\":{\"default\":{\"url\":\"https://i.ytimg.com/vi/CJzkGeasJcs/default.jpg\",\"width\":120,\"height\":90},\"medium\":{\"url\":\"https://i.ytimg.com/vi/CJzkGeasJcs/mqdefault.jpg\",\"width\":320,\"height\":180},\"high\":{\"url\":\"https://i.ytimg.com/vi/CJzkGeasJcs/hqdefault.jpg\",\"width\":480,\"height\":360},\"standard\":{\"url\":\"https://i.ytimg.com/vi/CJzkGeasJcs/sddefault.jpg\",\"width\":640,\"height\":480},\"maxres\":{\"url\":\"https://i.ytimg.com/vi/CJzkGeasJcs/maxresdefault.jpg\",\"width\":1280,\"height\":720}},\"uploaddate\":\"2021-04-11T17:19:01Z\",\"channelid\":\"UC6uB1mF3kaYmf2odmww-ckw\",\"channelname\":\"Tolle Rezepte\",\"samplesentence\":\"\"},{\"videoid\":\"CgkiahFZV_w\",\"title\":\"Mehr äpfel als Teig! Super cremiger Apfelkuchen!\",\"thumbnailurl\":{\"default\":{\"url\":\"https://i.ytimg.com/vi/CgkiahFZV_w/default.jpg\",\"width\":120,\"height\":90},\"medium\":{\"url\":\"https://i.ytimg.com/vi/CgkiahFZV_w/mqdefault.jpg\",\"width\":320,\"height\":180},\"high\":{\"url\":\"https://i.ytimg.com/vi/CgkiahFZV_w/hqdefault.jpg\",\"width\":480,\"height\":360},\"standard\":{\"url\":\"https://i.ytimg.com/vi/CgkiahFZV_w/sddefault.jpg\",\"width\":640,\"height\":480},\"maxres\":{\"url\":\"https://i.ytimg.com/vi/CgkiahFZV_w/maxresdefault.jpg\",\"width\":1280,\"height\":720}},\"uploaddate\":\"2020-11-08T12:01:50Z\",\"channelid\":\"UCMtnxx4iGMo-1fBa6evLCsA\",\"channelname\":\"leckere Rezepte\",\"samplesentence\":\"\"},{\"videoid\":\"DI7jGbBpb-M\",\"title\":\"〔vlog〕会社員の平日｜depound購入品｜社会人OLの日常\",\"thumbnailurl\":{\"default\":{\"url\":\"https://i.ytimg.com/vi/DI7jGbBpb-M/default.jpg\",\"width\":120,\"height\":90},\"medium\":{\"url\":\"https://i.ytimg.com/vi/DI7jGbBpb-M/mqdefault.jpg\",\"width\":320,\"height\":180},\"high\":{\"url\":\"https://i.ytimg.com/vi/DI7jGbBpb-M/hqdefault.jpg\",\"width\":480,\"height\":360},\"standard\":{\"url\":\"https://i.ytimg.com/vi/DI7jGbBpb-M/sddefault.jpg\",\"width\":640,\"height\":480}},\"uploaddate\":\"2021-06-18T11:28:21Z\",\"channelid\":\"UCL-GHTqFP4sf9JkFKmjWHOg\",\"channelname\":\"meme. vlog\",\"samplesentence\":\"\"},{\"videoid\":\"gNMr5E8jf4Y\",\"title\":\"Hast du 1 Ei und frische Erdbeeren? Mach diesen schnellen leckeren Erdbeerenkuchen! # 27\",\"thumbnailurl\":{\"default\":{\"url\":\"https://i.ytimg.com/vi/gNMr5E8jf4Y/default.jpg\",\"width\":120,\"height\":90},\"medium\":{\"url\":\"https://i.ytimg.com/vi/gNMr5E8jf4Y/mqdefault.jpg\",\"width\":320,\"height\":180},\"high\":{\"url\":\"https://i.ytimg.com/vi/gNMr5E8jf4Y/hqdefault.jpg\",\"width\":480,\"height\":360},\"standard\":{\"url\":\"https://i.ytimg.com/vi/gNMr5E8jf4Y/sddefault.jpg\",\"width\":640,\"height\":480}},\"uploaddate\":\"2021-05-03T18:51:35Z\",\"channelid\":\"UC6uB1mF3kaYmf2odmww-ckw\",\"channelname\":\"Tolle Rezepte\",\"samplesentence\":\"\"},{\"videoid\":\"IBOVDXTYuZE\",\"title\":\"有馬温泉グルメ&観光旅｜炭酸せんべい｜すだちそば｜温泉寺｜etc...\",\"thumbnailurl\":{\"default\":{\"url\":\"https://i.ytimg.com/vi/IBOVDXTYuZE/default.jpg\",\"width\":120,\"height\":90},\"medium\":{\"url\":\"https://i.ytimg.com/vi/IBOVDXTYuZE/mqdefault.jpg\",\"width\":320,\"height\":180},\"high\":{\"url\":\"https://i.ytimg.com/vi/IBOVDXTYuZE/hqdefault.jpg\",\"width\":480,\"height\":360},\"standard\":{\"url\":\"https://i.ytimg.com/vi/IBOVDXTYuZE/sddefault.jpg\",\"width\":640,\"height\":480}},\"uploaddate\":\"2021-06-13T10:36:57Z\",\"channelid\":\"UCycfFXIVo6Qh-BZlKhE5m2w\",\"channelname\":\"TEKUTEKU\",\"samplesentence\":\"\"},{\"videoid\":\"IoF7TlzoCtk\",\"title\":\"〔vlog〕Tokyo Disney Sea vlog🧞‍♂️🚢入場制限1万人のディズニーシーー｜社会人OLの休日\",\"thumbnailurl\":{\"default\":{\"url\":\"https://i.ytimg.com/vi/IoF7TlzoCtk/default.jpg\",\"width\":120,\"height\":90},\"medium\":{\"url\":\"https://i.ytimg.com/vi/IoF7TlzoCtk/mqdefault.jpg\",\"width\":320,\"height\":180},\"high\":{\"url\":\"https://i.ytimg.com/vi/IoF7TlzoCtk/hqdefault.jpg\",\"width\":480,\"height\":360},\"standard\":{\"url\":\"https://i.ytimg.com/vi/IoF7TlzoCtk/sddefault.jpg\",\"width\":640,\"height\":480},\"maxres\":{\"url\":\"https://i.ytimg.com/vi/IoF7TlzoCtk/maxresdefault.jpg\",\"width\":1280,\"height\":720}},\"uploaddate\":\"2021-10-24T12:22:59Z\",\"channelid\":\"UCL-GHTqFP4sf9JkFKmjWHOg\",\"channelname\":\"meme. vlog\",\"samplesentence\":\"\"},{\"videoid\":\"JlbWrEqFKSo\",\"title\":\"민통선 청정콩으로 만드는 두부 - 파주 월롱면 파주장단콩두부 / Tofu Made from King's Soybean - Paju Korea\",\"thumbnailurl\":{\"default\":{\"url\":\"https://i.ytimg.com/vi/JlbWrEqFKSo/default.jpg\",\"width\":120,\"height\":90},\"medium\":{\"url\":\"https://i.ytimg.com/vi/JlbWrEqFKSo/mqdefault.jpg\",\"width\":320,\"height\":180},\"high\":{\"url\":\"https://i.ytimg.com/vi/JlbWrEqFKSo/hqdefault.jpg\",\"width\":480,\"height\":360},\"standard\":{\"url\":\"https://i.ytimg.com/vi/JlbWrEqFKSo/sddefault.jpg\",\"width\":640,\"height\":480},\"maxres\":{\"url\":\"https://i.ytimg.com/vi/JlbWrEqFKSo/maxresdefault.jpg\",\"width\":1280,\"height\":720}},\"uploaddate\":\"2020-06-21T02:00:05Z\",\"channelid\":\"UC-rFnEMTQjpsVmte1Azb7wQ\",\"channelname\":\"궁금 한미식가 QriousGourmet\",\"samplesentence\":\"\"},{\"videoid\":\"jqfJ_OD3zrA\",\"title\":\"Ich koche es in 10 Minuten!So ein leckeres Frühstück, dass alles in wenigen Minuten aufgegessen ist\",\"thumbnailurl\":{\"default\":{\"url\":\"https://i.ytimg.com/vi/jqfJ_OD3zrA/default.jpg\",\"width\":120,\"height\":90},\"medium\":{\"url\":\"https://i.ytimg.com/vi/jqfJ_OD3zrA/mqdefault.jpg\",\"width\":320,\"height\":180},\"high\":{\"url\":\"https://i.ytimg.com/vi/jqfJ_OD3zrA/hqdefault.jpg\",\"width\":480,\"height\":360},\"standard\":{\"url\":\"https://i.ytimg.com/vi/jqfJ_OD3zrA/sddefault.jpg\",\"width\":640,\"height\":480},\"maxres\":{\"url\":\"https://i.ytimg.com/vi/jqfJ_OD3zrA/maxresdefault.jpg\",\"width\":1280,\"height\":720}},\"uploaddate\":\"2021-07-18T20:48:52Z\",\"channelid\":\"UCpAnGnYxe4Lv59J6uo9s8KQ\",\"channelname\":\"Einfaches Essen\",\"samplesentence\":\"\"},{\"videoid\":\"KOjNzPEbRgQ\",\"title\":\"leckeres Käse Rezept mit getrockneten Aprikosen machen Sie sich nur 3 Zutaaten und 10 Min Arbeit #47\",\"thumbnailurl\":{\"default\":{\"url\":\"https://i.ytimg.com/vi/KOjNzPEbRgQ/default.jpg\",\"width\":120,\"height\":90},\"medium\":{\"url\":\"https://i.ytimg.com/vi/KOjNzPEbRgQ/mqdefault.jpg\",\"width\":320,\"height\":180},\"high\":{\"url\":\"https://i.ytimg.com/vi/KOjNzPEbRgQ/hqdefault.jpg\",\"width\":480,\"height\":360},\"standard\":{\"url\":\"https://i.ytimg.com/vi/KOjNzPEbRgQ/sddefault.jpg\",\"width\":640,\"height\":480},\"maxres\":{\"url\":\"https://i.ytimg.com/vi/KOjNzPEbRgQ/maxresdefault.jpg\",\"width\":1280,\"height\":720}},\"uploaddate\":\"2021-02-24T18:53:09Z\",\"channelid\":\"UCmoojGHEjyeJxOYjcnRc_gg\",\"channelname\":\"Rezepte Deluxe\",\"samplesentence\":\"\"},{\"videoid\":\"jQXYsbOt_Y0\",\"title\":\"Ich kannte diese Methode des Kartoffelkochens nicht! Sie haben ein köstliches mageres Abendessen für\",\"thumbnailurl\":{\"default\":{\"url\":\"https://i.ytimg.com/vi/jQXYsbOt_Y0/default.jpg\",\"width\":120,\"height\":90},\"medium\":{\"url\":\"https://i.ytimg.com/vi/jQXYsbOt_Y0/mqdefault.jpg\",\"width\":320,\"height\":180},\"high\":{\"url\":\"https://i.ytimg.com/vi/jQXYsbOt_Y0/hqdefault.jpg\",\"width\":480,\"height\":360},\"standard\":{\"url\":\"https://i.ytimg.com/vi/jQXYsbOt_Y0/sddefault.jpg\",\"width\":640,\"height\":480},\"maxres\":{\"url\":\"https://i.ytimg.com/vi/jQXYsbOt_Y0/maxresdefault.jpg\",\"width\":1280,\"height\":720}},\"uploaddate\":\"2021-03-26T15:50:46Z\",\"channelid\":\"UC1qadRmOZ4SAc1x2KYROyNw\",\"channelname\":\"Schnell Lecker Kochen\",\"samplesentence\":\"\"},{\"videoid\":\"Lmo3o8NizGo\",\"title\":\"Sub)한파 속에서 생존하기 / 극한캠핑 / 야생 / 솔로캠핑 /\",\"thumbnailurl\":{\"default\":{\"url\":\"https://i.ytimg.com/vi/Lmo3o8NizGo/default.jpg\",\"width\":120,\"height\":90},\"medium\":{\"url\":\"https://i.ytimg.com/vi/Lmo3o8NizGo/mqdefault.jpg\",\"width\":320,\"height\":180},\"high\":{\"url\":\"https://i.ytimg.com/vi/Lmo3o8NizGo/hqdefault.jpg\",\"width\":480,\"height\":360},\"standard\":{\"url\":\"https://i.ytimg.com/vi/Lmo3o8NizGo/sddefault.jpg\",\"width\":640,\"height\":480},\"maxres\":{\"url\":\"https://i.ytimg.com/vi/Lmo3o8NizGo/maxresdefault.jpg\",\"width\":1280,\"height\":720}},\"uploaddate\":\"2021-01-22T13:00:15Z\",\"channelid\":\"UCeyU98dnBQ18KdThUqSvBtA\",\"channelname\":\"Rirang OnAir\",\"samplesentence\":\"\"},{\"videoid\":\"LsVDxKRCYl8\",\"title\":\"Puddingkuchen! Ein schnelles Rezept Puddingkuchen #20\",\"thumbnailurl\":{\"default\":{\"url\":\"https://i.ytimg.com/vi/LsVDxKRCYl8/default.jpg\",\"width\":120,\"height\":90},\"medium\":{\"url\":\"https://i.ytimg.com/vi/LsVDxKRCYl8/mqdefault.jpg\",\"width\":320,\"height\":180},\"high\":{\"url\":\"https://i.ytimg.com/vi/LsVDxKRCYl8/hqdefault.jpg\",\"width\":480,\"height\":360},\"standard\":{\"url\":\"https://i.ytimg.com/vi/LsVDxKRCYl8/sddefault.jpg\",\"width\":640,\"height\":480},\"maxres\":{\"url\":\"https://i.ytimg.com/vi/LsVDxKRCYl8/maxresdefault.jpg\",\"width\":1280,\"height\":720}},\"uploaddate\":\"2021-01-07T19:33:30Z\",\"channelid\":\"UCmoojGHEjyeJxOYjcnRc_gg\",\"channelname\":\"Rezepte Deluxe\",\"samplesentence\":\"\"},{\"videoid\":\"MbJNfAXb33I\",\"title\":\"bẫy dông cát, hàng khủng lại suất hiện @caucasanbat\",\"thumbnailurl\":{\"default\":{\"url\":\"https://i.ytimg.com/vi/MbJNfAXb33I/default.jpg\",\"width\":120,\"height\":90},\"medium\":{\"url\":\"https://i.ytimg.com/vi/MbJNfAXb33I/mqdefault.jpg\",\"width\":320,\"height\":180},\"high\":{\"url\":\"https://i.ytimg.com/vi/MbJNfAXb33I/hqdefault.jpg\",\"width\":480,\"height\":360},\"standard\":{\"url\":\"https://i.ytimg.com/vi/MbJNfAXb33I/sddefault.jpg\",\"width\":640,\"height\":480},\"maxres\":{\"url\":\"https://i.ytimg.com/vi/MbJNfAXb33I/maxresdefault.jpg\",\"width\":1280,\"height\":720}},\"uploaddate\":\"2021-05-21T01:00:03Z\",\"channelid\":\"UCEBZshzrFaeB3pV0UF2tS6A\",\"channelname\":\"câu cá, săn bắt\",\"samplesentence\":\"\"},{\"videoid\":\"NwuPDP3gKp4\",\"title\":\"5 Minuten und nur 2 Zutaten! Ohne Mehl und Öl! SEHR LECKER! Gesundes Essen! # 46\",\"thumbnailurl\":{\"default\":{\"url\":\"https://i.ytimg.com/vi/NwuPDP3gKp4/default.jpg\",\"width\":120,\"height\":90},\"medium\":{\"url\":\"https://i.ytimg.com/vi/NwuPDP3gKp4/mqdefault.jpg\",\"width\":320,\"height\":180},\"high\":{\"url\":\"https://i.ytimg.com/vi/NwuPDP3gKp4/hqdefault.jpg\",\"width\":480,\"height\":360},\"standard\":{\"url\":\"https://i.ytimg.com/vi/NwuPDP3gKp4/sddefault.jpg\",\"width\":640,\"height\":480},\"maxres\":{\"url\":\"https://i.ytimg.com/vi/NwuPDP3gKp4/maxresdefault.jpg\",\"width\":1280,\"height\":720}},\"uploaddate\":\"2021-05-24T19:14:05Z\",\"channelid\":\"UC6uB1mF3kaYmf2odmww-ckw\",\"channelname\":\"Tolle Rezepte\",\"samplesentence\":\"\"},{\"videoid\":\"oJ_WIdsStT4\",\"title\":\"WORKSHOP  Miss Mustard Seed's milk paint   1 svenska + English subtitles\",\"thumbnailurl\":{\"default\":{\"url\":\"https://i.ytimg.com/vi/oJ_WIdsStT4/default.jpg\",\"width\":120,\"height\":90},\"medium\":{\"url\":\"https://i.ytimg.com/vi/oJ_WIdsStT4/mqdefault.jpg\",\"width\":320,\"height\":180},\"high\":{\"url\":\"https://i.ytimg.com/vi/oJ_WIdsStT4/hqdefault.jpg\",\"width\":480,\"height\":360},\"standard\":{\"url\":\"https://i.ytimg.com/vi/oJ_WIdsStT4/sddefault.jpg\",\"width\":640,\"height\":480},\"maxres\":{\"url\":\"https://i.ytimg.com/vi/oJ_WIdsStT4/maxresdefault.jpg\",\"width\":1280,\"height\":720}},\"uploaddate\":\"2021-07-11T08:13:32Z\",\"channelid\":\"UCkJxGvh_xiQ6MUVntekHDwQ\",\"channelname\":\"Lina Ekstrand\",\"samplesentence\":\"\"},{\"videoid\":\"pHfX91xylis\",\"title\":\"夏🍉暑くても朝からよく食べる1人暮らしOLの日常｜KALDI購入品と免許更新 What I eat as Japanese office worker in Summer\",\"thumbnailurl\":{\"default\":{\"url\":\"https://i.ytimg.com/vi/pHfX91xylis/default.jpg\",\"width\":120,\"height\":90},\"medium\":{\"url\":\"https://i.ytimg.com/vi/pHfX91xylis/mqdefault.jpg\",\"width\":320,\"height\":180},\"high\":{\"url\":\"https://i.ytimg.com/vi/pHfX91xylis/hqdefault.jpg\",\"width\":480,\"height\":360},\"standard\":{\"url\":\"https://i.ytimg.com/vi/pHfX91xylis/sddefault.jpg\",\"width\":640,\"height\":480},\"maxres\":{\"url\":\"https://i.ytimg.com/vi/pHfX91xylis/maxresdefault.jpg\",\"width\":1280,\"height\":720}},\"uploaddate\":\"2021-07-17T11:00:33Z\",\"channelid\":\"UC_RDtmUq7RISJ4mFKAhjzTg\",\"channelname\":\"Namiのくらし\",\"samplesentence\":\"\"},{\"videoid\":\"_pLy_6PPJ6E\",\"title\":\"孫とばぁばで『ボーロ』お菓子作り  フライパンで作れる簡単な方法 子どもとおしゃべりしながら 作ってみませんか？\",\"thumbnailurl\":{\"default\":{\"url\":\"https://i.ytimg.com/vi/_pLy_6PPJ6E/default.jpg\",\"width\":120,\"height\":90},\"medium\":{\"url\":\"https://i.ytimg.com/vi/_pLy_6PPJ6E/mqdefault.jpg\",\"width\":320,\"height\":180},\"high\":{\"url\":\"https://i.ytimg.com/vi/_pLy_6PPJ6E/hqdefault.jpg\",\"width\":480,\"height\":360},\"standard\":{\"url\":\"https://i.ytimg.com/vi/_pLy_6PPJ6E/sddefault.jpg\",\"width\":640,\"height\":480},\"maxres\":{\"url\":\"https://i.ytimg.com/vi/_pLy_6PPJ6E/maxresdefault.jpg\",\"width\":1280,\"height\":720}},\"uploaddate\":\"2021-06-20T06:58:04Z\",\"channelid\":\"UCs-Dg5RNRD1JtFMh8Ff5skA\",\"channelname\":\"Misuzu mago6\",\"samplesentence\":\"\"},{\"videoid\":\"qI72mecJsZ8\",\"title\":\"[주재료 3가지] 우유로 간단하게 카라멜 만드는 방법\",\"thumbnailurl\":{\"default\":{\"url\":\"https://i.ytimg.com/vi/qI72mecJsZ8/default.jpg\",\"width\":120,\"height\":90},\"medium\":{\"url\":\"https://i.ytimg.com/vi/qI72mecJsZ8/mqdefault.jpg\",\"width\":320,\"height\":180},\"high\":{\"url\":\"https://i.ytimg.com/vi/qI72mecJsZ8/hqdefault.jpg\",\"width\":480,\"height\":360},\"standard\":{\"url\":\"https://i.ytimg.com/vi/qI72mecJsZ8/sddefault.jpg\",\"width\":640,\"height\":480},\"maxres\":{\"url\":\"https://i.ytimg.com/vi/qI72mecJsZ8/maxresdefault.jpg\",\"width\":1280,\"height\":720}},\"uploaddate\":\"2021-06-18T08:25:24Z\",\"channelid\":\"UCUAKaXyq2hVBCph1LOUtuqg\",\"channelname\":\"집밥요리 Home Cooking\",\"samplesentence\":\"\"},{\"videoid\":\"PQyOnPybpq4\",\"title\":\"Снова СЕРЕБРО! Здесь охотилась ПРУССКАЯ ЭЛИТА! Коп по старине. Коп по Войне.\",\"thumbnailurl\":{\"default\":{\"url\":\"https://i.ytimg.com/vi/PQyOnPybpq4/default.jpg\",\"width\":120,\"height\":90},\"medium\":{\"url\":\"https://i.ytimg.com/vi/PQyOnPybpq4/mqdefault.jpg\",\"width\":320,\"height\":180},\"high\":{\"url\":\"https://i.ytimg.com/vi/PQyOnPybpq4/hqdefault.jpg\",\"width\":480,\"height\":360},\"standard\":{\"url\":\"https://i.ytimg.com/vi/PQyOnPybpq4/sddefault.jpg\",\"width\":640,\"height\":480}},\"uploaddate\":\"2021-04-21T08:00:16Z\",\"channelid\":\"UCt0-YImfI9_7k-VtIOBl9bQ\",\"channelname\":\"Рыболов Копатель\",\"samplesentence\":\"\"},{\"videoid\":\"qYuJXQwfUqk\",\"title\":\"5 szybkich Keto przepisów  dla każdego ! Keto Łatwizna\",\"thumbnailurl\":{\"default\":{\"url\":\"https://i.ytimg.com/vi/qYuJXQwfUqk/default.jpg\",\"width\":120,\"height\":90},\"medium\":{\"url\":\"https://i.ytimg.com/vi/qYuJXQwfUqk/mqdefault.jpg\",\"width\":320,\"height\":180},\"high\":{\"url\":\"https://i.ytimg.com/vi/qYuJXQwfUqk/hqdefault.jpg\",\"width\":480,\"height\":360},\"standard\":{\"url\":\"https://i.ytimg.com/vi/qYuJXQwfUqk/sddefault.jpg\",\"width\":640,\"height\":480},\"maxres\":{\"url\":\"https://i.ytimg.com/vi/qYuJXQwfUqk/maxresdefault.jpg\",\"width\":1280,\"height\":720}},\"uploaddate\":\"2021-07-12T17:00:12Z\",\"channelid\":\"UCcL-GbwZ-0shO188RV89zZQ\",\"channelname\":\"Keto Łatwizna\",\"samplesentence\":\"\"},{\"videoid\":\"RQYnCZbovCw\",\"title\":\"YUMUŞACIK BALON BAZLAMA 😋 Sahurların , kahvaltıların vazgeçilmezi 🔝🔝\",\"thumbnailurl\":{\"default\":{\"url\":\"https://i.ytimg.com/vi/RQYnCZbovCw/default.jpg\",\"width\":120,\"height\":90},\"medium\":{\"url\":\"https://i.ytimg.com/vi/RQYnCZbovCw/mqdefault.jpg\",\"width\":320,\"height\":180},\"high\":{\"url\":\"https://i.ytimg.com/vi/RQYnCZbovCw/hqdefault.jpg\",\"width\":480,\"height\":360},\"standard\":{\"url\":\"https://i.ytimg.com/vi/RQYnCZbovCw/sddefault.jpg\",\"width\":640,\"height\":480},\"maxres\":{\"url\":\"https://i.ytimg.com/vi/RQYnCZbovCw/maxresdefault.jpg\",\"width\":1280,\"height\":720}},\"uploaddate\":\"2021-04-28T11:00:11Z\",\"channelid\":\"UCdrnZToxrVmow4aoGYT-Fcg\",\"channelname\":\"YASEMİN'İN YEMEK TARİFLERİ\",\"samplesentence\":\"\"},{\"videoid\":\"sV2a8Gq5q_U\",\"title\":\"鬼滅の刃グッズ開封で神引き！？ついにあれを開封したら！？｜Demon Slayer  Unboxing 귀멸의칼날 언박싱\",\"thumbnailurl\":{\"default\":{\"url\":\"https://i.ytimg.com/vi/sV2a8Gq5q_U/default.jpg\",\"width\":120,\"height\":90},\"medium\":{\"url\":\"https://i.ytimg.com/vi/sV2a8Gq5q_U/mqdefault.jpg\",\"width\":320,\"height\":180},\"high\":{\"url\":\"https://i.ytimg.com/vi/sV2a8Gq5q_U/hqdefault.jpg\",\"width\":480,\"height\":360},\"standard\":{\"url\":\"https://i.ytimg.com/vi/sV2a8Gq5q_U/sddefault.jpg\",\"width\":640,\"height\":480},\"maxres\":{\"url\":\"https://i.ytimg.com/vi/sV2a8Gq5q_U/maxresdefault.jpg\",\"width\":1280,\"height\":720}},\"uploaddate\":\"2021-08-10T11:30:02Z\",\"channelid\":\"UCU1WWedwNuscobEMA5M5TGA\",\"channelname\":\"るるまろ lulumaro\",\"samplesentence\":\"\"},{\"videoid\":\"T0I9rmqMElg\",\"title\":\"Najsmaczniejsza niemiecka sałatka! Nigdy nie zmęczę się jedzeniem tej sałatki! Proste i pyszne!\",\"thumbnailurl\":{\"default\":{\"url\":\"https://i.ytimg.com/  /vi/T0I9rmqMElg/default.jpg\",\"width\":120,\"height\":90},\"medium\":{\"url\":\"https://i.ytimg.com/vi/T0I9rmqMElg/mqdefault.jpg\",\"width\":320,\"height\":180},\"high\":{\"url\":\"https://i.ytimg.com/vi/T0I9rmqMElg/hqdefault.jpg\",\"width\":480,\"height\":360},\"standard\":{\"url\":\"https://i.ytimg.com/vi/T0I9rmqMElg/sddefault.jpg\",\"width\":640,\"height\":480},\"maxres\":{\"url\":\"https://i.ytimg.com/vi/T0I9rmqMElg/maxresdefault.jpg\",\"width\":1280,\"height\":720}},\"uploaddate\":\"2021-12-10T16:58:49Z\",\"channelid\":\"UCP3fNxzk3-39ACqZGbPTLLA\",\"channelname\":\"Przepisy od Katarzyny\",\"samplesentence\":\"\"},{\"videoid\":\"_txPPALHvrU\",\"title\":\"【助産師の実話】産後の悩み第1位！夫には理解できない『産後うつ』の闇\",\"thumbnailurl\":{\"default\":{\"url\":\"https://i.ytimg.com/vi/_txPPALHvrU/default.jpg\",\"width\":120,\"height\":90},\"medium\":{\"url\":\"https://i.ytimg.com/vi/_txPPALHvrU/mqdefault.jpg\",\"width\":320,\"height\":180},\"high\":{\"url\":\"https://i.ytimg.com/vi/_txPPALHvrU/hqdefault.jpg\",\"width\":480,\"height\":360},\"standard\":{\"url\":\"https://i.ytimg.com/vi/_txPPALHvrU/sddefault.jpg\",\"width\":640,\"height\":480},\"maxres\":{\"url\":\"https://i.ytimg.com/vi/_txPPALHvrU/maxresdefault.jpg\",\"width\":1280,\"height\":720}},\"uploaddate\":\"2021-10-16T10:00:30Z\",\"channelid\":\"UCroLKau4ZzKHloUO3XdamUw\",\"channelname\":\"大人のリカちゃん　非現実の闇世界\",\"samplesentence\":\"\"},{\"videoid\":\"vMbFV8NWJmM\",\"title\":\"SUB) 애플워치se사고⌚️, 부라타치즈 처음 먹어본 다이어트 식단 요리브이로그(콩불,오이고추무침,부라타샐러드,날치알밥,닭갈비)mukbang|food vlog|slow diet\",\"thumbnailurl\":{\"deffault\":{\"url\":\"https://i.ytimg.com/vi/vMbFV8NWJmM/default.jpg\",\"width\":120,\"height\":90},\"medium\":{\"url\":\"https://i.ytimg.com/vi/vMbFV8NWJmM/mqdefault.jpg\",\"width\":320,\"height\":180},\"high\":{\"url\":\"https://i.ytimg.com/vi/vMbFV8NWJmM/hqdefault.jpg\",\"width\":480,\"height\":360},\"standard\":{\"url\":\"https://i.ytimg.com/vi/vMbFV8NWJmM/sddefault.jpg\",\"width\":640,\"height\":480},\"maxres\":{\"url\":\"https://i.ytimg.com/vi/vMbFV8NWJmM/maxresdefault.jpg\",\"width\":1280,\"height\":720}},\"uploaddate\":\"2020-10-25T12:00:18Z\",\"channelid\":\"UCZN8KXIefDEhkuK8KRgAqhA\",\"channelname\":\"조은fine\",\"samplesentence\":\"\"},{\"videoid\":\"Xe1LC7228pU\",\"title\":\"ASMR CHOCOLATE MAGNUM ICE CREAM & CHOCOLATE CAKE MUKBANG 매그넘 아이스크림과 초콜릿 케이크 먹방 EATING SOUNDS\",\"thumbnailurl\":{\"default\":{\"url\":\"https://i.ytimg.com/vi/Xe1LC7228pU/default.jpg\",\"width\":120,\"height\":90},\"medium\":{\"url\":\"https://i.ytimg.com/vi/Xe1LC7228pU/mqdefault.jpg\",\"width\":320,\"height\":180},\"high\":{\"url\":\"https://i.ytimg.com/vi/Xe1LC7228pU/hqdefault.jpg\",\"width\":480,\"height\":360},\"standard\":{\"url\":\"https://i.ytimg.com/vi/Xe1LC7228pU/sddefault.jpg\",\"width\":640,\"height\":480},\"maxres\":{\"url\":\"https://i.ytimg.com/vi/Xe1LC7228pU/maxresdefault.jpg\",\"width\":1280,\"height\":720}},\"uploaddate\":\"2021-11-17T11:15:01Z\",\"channelid\":\"UCtkEFCQpEDPtzu4Mtv5ZIMA\",\"channelname\":\"CREAM ASMR\",\"samplesentence\":\"\"},{\"videoid\":\"X8ZS1VMAoDo\",\"title\":\"(SUB)미쯔 시리얼 | 미쯔시리얼 리뷰 | 미쯔시리얼 먹방 | 품절대란!!!미쯔시리얼 솔직리뷰!!\",\"thumbnailurl\":{\"default\":{\"url\":\"https://i.ytimg.com/vi/X8ZS1VMAoDo/default.jpg\",\"width\":120,\"height\":90},\"medium\":{\"url\":\"https://i.ytimg.com/vi/X8ZS1VMAoDo/mqdefault.jpg\",\"width\":320,\"height\":180},\"high\":{\"url\":\"https://i.ytimg.com/vi/X8ZS1VMAoDo/hqdefault.jpg\",\"width\":480,\"height\":360},\"standard\":{\"url\":\"https://i.ytimg.com/vi/X8ZS1VMAoDo/sddefault.jpg\",\"width\":640,\"height\":480}},\"uploaddate\":\"2020-10-19T08:00:04Z\",\"channelid\":\"UCTMypODpmTObLk7adIhsA_w\",\"channelname\":\"정쓰패밀리\",\"samplesentence\":\"\"},{\"videoid\":\"YKBJJjegUqU\",\"title\":\"鬼滅の刃グッズ大量開封で大発狂！？久しぶりのアニメイト🖤｜Demon Slayer Unboxing 귀멸의칼날 언박싱\",\"thumbnailurl\":{\"default\":{\"url\":\"https://i.ytimg.com/vi/YKBJJjegUqU/default.jpg\",\"width\":120,\"height\":90},\"medium\":{\"url\":\"https://i.ytimg.com/vi/YKBJJjegUqU/mqdefault.jpg\",\"width\":320,\"height\":180},\"high\":{\"url\":\"https://i.ytimg.com/vi/YKBJJjegUqU/hqdefault.jpg\",\"width\":480,\"height\":360},\"standard\":{\"url\":\"https://i.ytimg.com/vi/YKBJJjegUqU/sddefault.jpg\",\"width\":640,\"height\":480},\"maxres\":{\"url\":\"https://i.ytimg.com/vi/YKBJJjegUqU/maxresdefault.jpg\",\"width\":1280,\"height\":720}},\"uploaddate\":\"2021-07-17T11:30:13Z\",\"channelid\":\"UCU1WWedwNuscobEMA5M5TGA\",\"channelname\":\"るるまろ lulumaro\",\"samplesentence\":\"\"},{\"videoid\":\"zi76gb4Hznc\",\"title\":\"Sehr lecker! Und gesund! Ich werde nie aufhören, dieses Essen zu kochen  Gesunde rezepte.\\",\"thumbnailurl\":{\"default\":{\"url\":\"https://i.ytimg.com/vi/zi76gb4Hznc/default.jpg\",\"width\":120,\"height\":90},\"medium\":{\"url\":\"https://i.ytimg.com/vi/zi76gb4Hznc/mqdefault.jpg\",\"width\":320,\"height\":180},\"high\":{\"url\":\"https://i.ytimg.com/vi/zi76gb4Hznc/hqdefault.jpg\",\"width\":480,\"height\":360},\"standard\":{\"url\":\"https://i.ytimg.com/vi/zi76gb4Hznc/sddefault.jpg\",\"width\":640,\"height\":480},\"maxres\":{\"url\":\"https://i.ytimg.com/vi/zi76gb4Hznc/maxresdefault.jpg\",\"width\":1280,\"height\":720}},\"uploaddate\":\"2021-03-13T10:01:47Z\",\"channelid\":\"UCMln36Lf0LS8Q-2B9dRWZFA\",\"channelname\":\"Frische Rezepte\",\"samplesentence\":\"\"},{\"videoid\":\"7fonJZxe94k\",\"title\":\"Mélange Ceci Avec du Lait et tu me remercieras plus qu'un Médecin: Commencez à manger des graines de\",\"thumbnailurl\":{\"default\":{\"url\":\"https://i.ytimg.com/vi/7fonJZxe94k/default.jpg\",\"width\":120,\"height\":90},\"medium\":{\"url\":\"https://i.ytimg.com/vi/7fonJZxe94k/mqdefault.jpg\",\"width\":320,\"height\":180},\"high\":{\"url\":\"https://i.ytimg.com/vi/7fonJZxe94k/hqdefault.jpg\",\"width\":480,\"height\":360},\"standard\":{\"url\":\"https://i.ytimg.com/vi/7fonJZxe94k/sddefault.jpg\",\"width\":640,\"height\":480},\"maxres\":{\"url\":\"https://i.ytimg.com/vi/7fonJZxe94k/maxresdefault.jpg\",\"width\":1280,\"height\":720}},\"uploaddate\":\"2020-01-15T19:22:40Z\",\"channelid\":\"UCoxV940UEfBbB69erBSA5-g\",\"channelname\":\"MARIE LEONIE COACH\",\"samplesentence\":\"\"},{\"videoid\":\"-UVqqolZ--8\",\"title\":\"Xôi Xéo Món Ngon Mẹ Nấu - Cách Nấu Xôi Ăn Ngon\",\"thumbnailurl\":{\"default\":{\"url\":\"https://i.ytimg.com/vi/-UVqqolZ--8/default.jpg\",\"width\":120,\"height\":90},\"medium\":{\"url\":\"https://i.ytimg.com/vi/-UVqqolZ--8/mqdefault.jpg\",\"width\":320,\"height\":180},\"high\":{\"url\":\"https://i.ytimg.com/vi/-UVqqolZ--8/hqdefault.jpg\",\"width\":480,\"height\":360},\"standard\":{\"url\":\"https://i.ytimg.com/vi/-UVqqolZ--8/sddefault.jpg\",\"width\":640,\"height\":480},\"maxres\":{\"url\":\"https://i.ytimg.com/vi/-UVqqolZ--8/maxresdefault.jpg\",\"width\":1280,\"height\":720}},\"uploaddate\":\"2021-11-20T11:15:31Z\",\"channelid\":\"UC8vZl4AV2yTsQNHAH4nqlCA\",\"channelname\":\"Món Ngon Mẹ Nấu Mom's Best Food\",\"samplesentence\":\"\"},{\"videoid\":\"xj8yAxELyNY\",\"title\":\"徒歩キャンプ女子「一人クリスマス」キャンプ【Christmas料理】ひとり旅行vlog/バックパック/車なし電車バス移動/一人ぼっちキャンプ\",\"thumbnailurl\":{\"default\":{\"url\":\"https://i.ytimg.com/vi/xj8yAxELyNY/default.jpg\",\"width\":120,\"height\":90},\"medium\":{\"url\":\"https://i.ytimg.com/vi/xj8yAxELyNY/mqdefault.jpg\",\"width\":320,\"height\":180},\"high\":{\"url\":\"https://i.ytimg.com/vi/xj8yAxELyNY/hqdefault.jpg\",\"width\":480,\"height\":360},\"standard\":{\"url\":\"https://i.ytimg.com/vi/xj8yAxELyNY/sddefault.jpg\",\"width\":640,\"height\":480},\"maxres\":{\"url\":\"https://i.ytimg.com/vi/xj8yAxELyNY/maxresdefault.jpg\",\"width\":1280,\"height\":720}},\"uploaddate\":\"2021-12-21T12:00:13Z\",\"channelid\":\"UCrNu8mCOWITIHjHVoqbdSKg\",\"channelname\":\"徒歩キャンプいずみ\",\"samplesentence\":\"\"},{\"videoid\":\"gRHx6jSjXSM\",\"title\":\"[ASMR] Remove acne and keratin plugs (subtitles, amateur, No Talking)\",\"thumbnailurl\":{\"default\":{\"url\":\"https://i.ytimg.com/vi/gRHx6jSjXSM/default.jpg\",\"width\":120,\"height\":90},\"medium\":{\"url\":\"https://i.ytimg.com/vi/gRHx6jSjXSM/mqdefault.jpg\",\"width\":320,\"height\":180},\"high\":{\"url\":\"https://i.ytimg.com/vi/gRHx6jSjXSM/hqdefault.jpg\",\"width\":480,\"height\":360},\"standard\":{\"url\":\"https://i.ytimg.com/vi/gRHx6jSjXSM/sddefault.jpg\",\"width\":640,\"height\":480},\"maxres\":{\"url\":\"https://i.ytimg.com/vi/gRHx6jSjXSM/maxresdefault.jpg\",\"width\":1280,\"height\":720}},\"uploaddate\":\"2020-10-15T13:20:22Z\",\"channelid\":\"UC6RB8nY-uamGQqPvzxRf78g\",\"channelname\":\"ASMR ALICE\",\"samplesentence\":\"\"},{\"videoid\":\"_3KPH8xkFvk\",\"title\":\"Edremit Beyoba Köyü (Kaz Dağları'nda bir Yörük Köyü)\",\"thumbnailurl\":{\"default\":{\"url\":\"https://i.ytimg.com/vi/_3KPH8xkFvk/default.jpg\",\"width\":120,\"height\":90},\"medium\":{\"url\":\"https://i.ytimg.com/vi/_3KPH8xkFvk/mqdefault.jpg\",\"width\":320,\"height\":180},\"high\":{\"url\":\"https://i.ytimg.com/vi/_3KPH8xkFvk/hqdefault.jpg\",\"width\":480,\"height\":360},\"standard\":{\"url\":\"https://i.ytimg.com/vi/_3KPH8xkFvk/sddefault.jpg\",\"width\":640,\"height\":480},\"maxres\":{\"url\":\"https://i.ytimg.com/vi/_3KPH8xkFvk/maxresdefault.jpg\",\"width\":1280,\"height\":720}},\"uploaddate\":\"2021-05-14T13:30:06Z\",\"channelid\":\"UCVHAkYfWElFL_ALC6Mrdx_A\",\"channelname\":\"Deniz Sarı\",\"samplesentence\":\"\"},{\"videoid\":\"CvtWI88X_ik\",\"title\":\"Süper Oldu! Yemelere Doyamadık Bu TATLI TAM SENLİK | Kremalı Tatlı Tarifi\",\"thumbnailurl\":{\"default\":{\"url\":\"https://i.ytimg.com/vi/CvtWI88X_ik/default.jpg\",\"width\":120,\"height\":90},\"medium\":{\"url\":\"https://i.ytimg.com/vi/CvtWI88X_ik/mqdefault.jpg\",\"width\":320,\"height\":180},\"high\":{\"url\":\"https://i.ytimg.com/vi/CvtWI88X_ik/hqdefault.jpg\",\"width\":480,\"height\":360},\"standard\":{\"url\":\"https://i.ytimg.com/vi/CvtWI88X_ik/sddefault.jpg\",\"width\":640,\"height\":480},\"maxres\":{\"url\":\"https://i.ytimg.com/vi/CvtWI88X_ik/maxresdefault.jpg\",\"width\":1280,\"height\":720}},\"uploaddate\":\"2021-10-29T08:00:09Z\",\"channelid\":\"UCOYuKcf_dtZuVh7N5gZofBQ\",\"channelname\":\"Frontline Reports\",\"samplesentence\":\"\"},{\"videoid\":\"jU3FZX6xtaY\",\"title\":\"Kartoffelgratin | Kartoffelauflauf | ohne Vorkochen\",\"thumbnailurl\":{\"default\":{\"url\":\"https://i.ytimg.com/vi/jU3FZX6xtaY/default.jpg\",\"width\":120,\"height\":90},\"medium\":{\"url\":\"https://i.ytimg.com/vi/jU3FZX6xtaY/mqdefault.jpg\",\"width\":320,\"height\":180},\"high\":{\"url\":\"https://i.ytimg.com/vi/jU3FZX6xtaY/hqdefault.jpg\",\"width\":480,\"height\":360},\"standard\":{\"url\":\"https://i.ytimg.com/vi/jU3FZX6xtaY/sddefault.jpg\",\"width\":640,\"height\":480},\"maxres\":{\"url\":\"https://i.ytimg.com/vi/jU3FZX6xtaY/maxresdefault.jpg\",\"width\":1280,\"height\":720}},\"uploaddate\":\"2020-01-29T19:00:06Z\",\"channelid\":\"UCHJp8LY7O8DRENewUIaW-Ag\",\"channelname\":\"Selmas Recipes\",\"samplesentence\":\"\"},{\"videoid\":\"b4Ivy3Fwsco\",\"title\":\"Полезное пирожное Картошка! Без лактозы, без глютена, без сахара, без выпечки!\",\"thumbnailurl\":{\"default\":{\"url\":\"https://i.ytimg.com/vi/b4Ivy3Fwsco/default.jpg\",\"width\":120,\"height\":90},\"medium\":{\"url\":\"https://i.ytimg.com/vi/b4Ivy3Fwsco/mqdefault.jpg\",\"width\":320,\"height\":180},\"high\":{\"url\":\"https://i.ytimg.com/vi/b4Ivy3Fwsco/hqdefault.jpg\",\"width\":480,\"height\":360},\"standard\":{\"url\":\"https://i.ytimg.com/vi/b4Ivy3Fwsco/sddefault.jpg\",\"width\":640,\"height\":480},\"maxres\":{\"url\":\"https://i.ytimg.com/vi/b4Ivy3Fwsco/maxresdefault.jpg\",\"width\":1280,\"height\":720}},\"uploaddate\":\"2021-11-10T08:45:11Z\",\"channelid\":\"UCNIrpAy7Fa7vv0uvgyXW0xg\",\"channelname\":\"Лена ПП Кондитер\",\"samplesentence\":\"\"},{\"videoid\":\"64hEaaaygd4\",\"title\":\"Mac'n'Cheese (Käse-Makkaroni) einfach selber machen. Schnelles Rezept\",\"thumbnailurl\":{\"default\":{\"url\":\"https://i.ytimg.com/vi/64hEaaaygd4/default.jpg\",\"width\":120,\"height\":90},\"medium\":{\"url\":\"https://i.ytimg.com/vi/64hEaaaygd4/mqdefault.jpg\",\"width\":320,\"height\":180},\"high\":{\"url\":\"https://i.ytimg.com/vi/64hEaaaygd4/hqdefault.jpg\",\"width\":480,\"height\":360},\"standard\":{\"url\":\"https://i.ytimg.com/vi/64hEaaaygd4/sddefault.jpg\",\"width\":640,\"height\":480},\"maxres\":{\"url\":\"https://i.ytimg.com/vi/64hEaaaygd4/maxresdefault.jpg\",\"width\":1280,\"height\":720}},\"uploaddate\":\"2021-07-09T13:23:05Z\",\"channelid\":\"UCEqT0KhLPoPt6tn-0mRHHsw\",\"channelname\":\"CALLEkocht - Omas Rezepte\",\"samplesentence\":\"\"}]}}}", "_responseType": "", "_sent": true, "_subscriptions": [], "_timedOut": false, "_trackingName": "unknown", "_url": "http://192.168.1.178:9000/video/search-subtitle", "readyState": 4, "responseHeaders": {"Connection": "keep-alive", "Content-Length": "34282", "Content-Type": "application/json; charset=utf-8", "Date": "Mon, 14 Aug 2023 09:25:34 GMT", "ETag": "W/\"85ea-NCCSe81mL8tP2vTNvfa/P39FBfM\"", "Keep-Alive": "timeout=5", "X-Powered-By": "Express"}, "responseURL": "http://192.168.1.178:9000/video/search-subtitle", "status": 200, "timeout": 0, "upload": {}, "withCredentials": true}, "status": 200, "statusText": undefined}