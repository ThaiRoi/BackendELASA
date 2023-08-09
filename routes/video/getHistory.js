const History = require('../../schema/History');


const getHistory = async (req, res) => {
  const body = req.body;
  console.log(body);
  res.status(200).json({
    success: true,
    message: "Success",
    data: {
      message: "lets goooooooo testing"
    }
})
  // const thai = await History.findOne({ videoid: body.videoid }).exec();
  // console.log(thai);
  // if (thai === null) {
    
   
  // }
//create a history record
}


module.exports = getHistory;