const User = require('../../schema/User.js');


const signUp = async (req, res) => {
  const body = req.body;
  const thai = await User.findOne({ account: body.account }).exec();
  console.log(thai);
  if (thai === null) {
    createUser(req, res);
  }
  else {
    res.status(409).json({
      error: "Account already exists",
      message: "this is a message, we didn't land safely on mars, sadly"
    })
  }
}

const createUser = async (req, res) => {
  const { account, password } = req.body
 
  const thai =  await User.create({ account, password });
  res.status(201).json({
    success: true,
    message: "we have landed safely on mars, let's go",
    data: {
      userId: thai._id,
      account: thai.account,
    }
  })
}

module.exports = signUp;