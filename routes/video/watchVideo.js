const Video = require('../../schema/Video');
const Subtitle = require('../../schema/Subtitle');
const axios = require('axios');
const youtubeScraper = require('youtube-captions-scraper');



const watchVideo = async (req, res) => {
  const body = req.body;
  console.log("body: ", body);
  const thai = await Video.findOne({ videoid: body.videoid }).exec();
//   console.log(thai);
let sub;
  if (thai === null) {
    console.log('oh no nothing');
    //res sub scrape
    
   await youtubeScraper.getSubtitles({
        videoID: body.videoid, // youtube video id
        lang: 'en' // default: `en`
      }).then(caption => {
        res.status(200).json({
            success: true,
            message: "video subtitle found",
            data: {
              caption
            }
          });
        sub = caption;
         console.log("sub is now: ", sub )
         console.log("caption is: ", caption)
      }).then(
        
      )
    //create video record from youtube api
    axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${body.videoid}&key=${apiKey}`)
        .then( async (response) => {
            console.log(response.data.items);
  
            const video = await Video.create({
                videoid: response.data.items[0].id,
                title: response.data.items[0].snippet.title,
                viewcount: 0,
                duration: 0,
                thumbnailurl: response.data.items[0].snippet.thumbnails,
                category: response.data.items[0].snippet.categoryId,
                uploaddate: response.data.items[0].snippet.publishedAt,
                channelid: response.data.items[0].snippet.channelid,
                channelname: response.data.items[0].snippet.channelTitle
            })    
            console.log("created this video record: ", video);
            //create subtitle record from video object id, youtube subtitle scraper
            Subtitle.create({
                videorecordid: video._id,
                isauto: false,
                caption: sub
            })
        }

        )

    // console.log("sub is now: ", sub )    

  }
  else {
    console.log('oh yeah, something already');
  //return subtitle record 
    const subtitle = await Subtitle.findOne({videorecordid: thai._id})
    // console.log("this is something: ", subtitle.caption);
    const caption = subtitle.caption;
    // console.log("this is caption: ", caption);
    if(caption.length==0){
      caption.push({
        text: 'unfortunately we cannot find the english subtitle to this video',
        start: 1,
        dur: 1
      })
    }
    // console.log("this is caption: ", caption);

    res.status(200).json({
        success: true,
        message: "video subtitle found",
        data: {
          caption
        }
      });
  }

}


module.exports = watchVideo;
