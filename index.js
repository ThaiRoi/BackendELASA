require('./global.js');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');
require('./connection.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

// const User = require('./schema/User.js');
// const Video = require('./schema/Video.js');
// const quickstart= require('./quickstart.js');
// const Subtitle = require('./schema/Subtitle.js');

const account = require('./routes/account')
const video = require('./routes/video')
app.use(express.static('public'));

const upload = multer({ dest: './public/uploads/' })
app.post('/uploadfile', upload.single('myFile'), (req, res, next) => {
  const file = req.file
  if (!file) {
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    return next(error)
  }
  res.send(file)
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

