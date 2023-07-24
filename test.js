// const axios = require('axios');

// const videoId = 'xmBUSYgGeVs'; 

// const apiKey = 'AIzaSyDil_bOsqhaiAFE3wNeraXB5wQrq_vsLBc'; 

// axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`)
//   .then(response => {
//     // Handle the response data
//     console.log(response.data.items[0].snippet);
//   })
//   .catch(error => {
//     // Handle any errors
//     console.error(error);
//   });
 
const quickstart = require('./quickstart');

quickstart.getChannel();