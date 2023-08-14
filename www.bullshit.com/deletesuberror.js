// require('../global.js');
// require('../connection.js');
// const async = require('async');
// const rawSubtitle = require('../schema/RawSubtitle.js');
// const Subtitle = require('../schema/Subtitle.js');
// const Video = require('../schema/Video.js');

// const Annihilate = async() =>{

//     const sub = await Subtitle.find().exec();

//     sub.forEach( async(element, index) => {
//         function getData(cb){
//             cb(null, element);
//         }
//         async function addVideoid(data){
//             const video = await Video.findOne({_id : data.videorecordid}).exec();
//         await (data.videoid = video.videoid);
//         data.save().then(result => {});
//         return (null, "done");
//         }
//         async.waterfall([
//             getData,
//             addVideoid
//         ], function (err, result) {
//             console.log("index: ", index);
//         });

//     });

    
// }

// Annihilate();