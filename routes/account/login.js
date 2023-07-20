const User = require('../../schema/User.js');

const login = async (req, res) => {
    const body = req.body;
    const thai = await User.findOne({ account: body.account }).exec();
    console.log(thai);
    if (thai === null) {
      res.status(404).json({
          error: "Account doesn't exist",
        message: "this is a message, we didn't land safely on mars, sadly"
      })
    }
    else if (thai.password === body.password) {
      res.status(201).json({
        success: true,
        message: "we have landed safely on mars, let's go",
        data: {
          userId: thai._id,
          account: thai.account,
        }
      })
    }
    else {
        res.status(409).json({
            error: "Password is not correct",
          message: "this is a message, we didn't land safely on mars, sadly"
        })
    }
  }

  module.exports = login;