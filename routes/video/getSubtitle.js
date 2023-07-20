const Subtitle = require('../../schema/Subtitle');


const getSubtitle = async (req, res) => {
  const body = req.body;
  const thai = await Subtitle.findOne({ videoid: body.videoid }).exec();
  console.log(thai);
  if (thai === null) {
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
          thai
        }
      })
  }
}

module.exports = getSubtitle;