require('./global.js');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');
require('./connection.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
const Memo = require('./schema/Memo.js');
// const User = require('./schema/User.js');
// const Video = require('./schema/Video.js');
// const quickstart= require('./quickstart.js');
// const Subtitle = require('./schema/Subtitle.js');

const account = require('./routes/account')
const video = require('./routes/video')
app.use(express.static('public'));

const upload = multer({ dest: './public/uploads/' })
app.post('/uploadfile', upload.single('myFile'), (req, res, next) => {
  console.log("thisisFuke ",req.file);
  console.log("this is dada: ", req.body.data)
  const data = req.body.data;
  const file = req.file 
  if (file) {
    //process file: rename, get path
    console.log(file);
    fs.rename(`./public/uploads/${file.filename}`,`./public/uploads/${file.filename}.jpeg` , (a)=>{
      console.log("newfilename: ", a)
    })
  }
  else {
    console.log("ohno no file aaaaaaaaaaaaaaaaaa");
  }
  //create memo record
  console.log("let's create memo records");
  const newlyCreatedMemo = Memo.create({
    title: data.title,
    userid: data.userid,
    username: data.username,
    description: data.description,
    imageurl: file ? file.filename : "",
   videoid: data.videoid,
   captionstart: data.captionstart
  })
  res.status(200).json({
    success: true,
    message: "video found",
    data: newlyCreatedMemo
  })
})

app.post('/video/create-history', video.createHistory);
app.post('/video/get-history', video.getHistory);
app.post('/video/search-video',video.searchVideo);
app.post('/video/watch-video', video.watchVideo);
app.post('/video/get-subtitle', video.getSubtitle);
app.post('/video/get-video', video.getVideo);
app.get('/video/get-recommendation', video.getRecommendation);
app.post('/video/search-subtitle', video.searchSubtitle);
app.post('/account/sign-up', account.signUp);
app.post('/account/login', account.login);

// setTimeout(()=> {
//   youtubeapi.subscriptions.list({
//       auth : auth,
//       part: 'snippet,contentDetails',
//       mine: true,
//       maxResults: 50
//     }, (err, res) => {
//         if(err) {
//           console.log('The API returned an erroe: ', err);
//         }
//         console.log('response, please for the love of god: ', res.data.items[0]);
  
//     });
// }, 3000)




const PORT = 9000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})


















let people = [
  {
    name: "Hannah Rickard",
    number: "06-51-99-56-83",
    id: 1
  },
  {
    name: "Hyun Namkoong",
    number: "10987654",
    id: 2
  },
  {
    name: "Courtney Martinez",
    number: "3691215",
    id: 3
  }
]
const getst = (request, response) => {
  response.send('<h1>Phonebook</h1>')
}
app.get('/', getst)


app.post('/api/people', (request, response) => {
  response.json(people);
  console.log(request.query);
})

