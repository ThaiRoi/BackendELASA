const Subtitle = require('../../schema/Subtitle');
// import { getSubtitles } from 'youtube-captions-scraper';
const youtubeScraper = require('youtube-captions-scraper');

const getSubtitle = async (req, res) => {
  const body = req.body;
  youtubeScraper.getSubtitles({
    videoID: body.videoid, // youtube video id
    lang: 'en' // default: `en`
  }).then(captions => {
    //console.log(captions);
    if(captions==[]) {
      res.status(404).json({
              error: "Video not found",
              message: "from getSubtitle: the video subtitle not found in database"
            })
    }
    else {
      res.status(200).json({
      success: true,
      message: "video subtitle found",
      data: {
        captions
      }
    })
    }
    
  })
  
  // const thai = await Subtitle.findOne({ videoid: body.videoid }).exec();
  // console.log(thai);
  // if (thai === null) {
  //   res.status(404).json({
  //       error: "Video not found",
  //       message: "from getSubtitle: the video subtitle not found in database"
  //     })
  // }
  // else {
  //   res.status(200).json({
  //       success: true,
  //       message: "video subtitle found",
  //       data: {
  //         thai
  //       }
  //     })
  // }
}

module.exports = getSubtitle;