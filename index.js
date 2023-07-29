require('./global.js');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
require('./connection.js');
// const User = require('./schema/User.js');
// const Video = require('./schema/Video.js');
// const quickstart= require('./quickstart.js');
const Subtitle = require('./schema/Subtitle.js');

const account = require('./routes/account')
const video = require('./routes/video')

app.post('/video/get-subtitle', video.getSubtitle);
app.post('/video/get-video', video.getVideo);
app.get('/video/get-recommendation', video.getRecommendation);
app.post('/video/search-subtitle', video.searchSubtitle);

// dang ki
app.post('/account/create-user', account.createUser);

//dang nhap
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


// // Assuming you have a collection named "captions"
// Subtitle.createIndex({ "t": "text" });
// const searchWord = "milk"; 
// console.log(Subtitle.find({ $text: { $search: `/${searchWord}/i` } }));



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

