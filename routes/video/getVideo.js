const Video = require('../../schema/Video');


const getVideo = async (req, res) => {
  const body = req.body;
  console.log(body);
  const thai = await Video.findOne({ videoid: body.videoid }).exec();
  console.log(thai);
  if (thai === null) {
    res.status(404).json({
        error: "Video not found",
        message: "the video is not in the database"
      })
  }
  else {
        res.status(200).json({
        success: true,
        message: "video found",
        data: {
          thai
        }
      })
  }
}


module.exports = getVideo;