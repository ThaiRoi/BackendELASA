// const axios = require('axios');
// require('./connection.js');
// const Recommendation = require('./schema/Recommendation');
// require('./global.js');
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

// quickstart.getChannel();