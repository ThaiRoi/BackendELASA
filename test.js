const axios = require('axios');
require('./connection.js');
const Recommendation = require('./schema/Recommendation');
require('./global.js');
const Subtitle = require('./schema/Subtitle')
const Video = require('./schema/Video.js');
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

async function Test() {

  const video = await Video.findById('64ba473b731586bc198794e4').exec();
  console.log(video);


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
  
}

Test();

  