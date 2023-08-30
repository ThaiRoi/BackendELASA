const Memo = require('../../schema/Memo');
const axios = require('axios');


const getMemo = async (req, res) => {
  const body = req.body;
  console.log(body);
  const memoData = await Memo.find({ userid: body.userid }).exec();
  console.log(memoData);
  if (memoData === null) {
    res.status(404).json({
      error: "a",
      message: "a"
    })
  console.error(error);

  } 
  else {
    res.status(200).json({
        success: true,
        message: "Success",
        data: memoData
    })
  }

}


module.exports = getMemo;