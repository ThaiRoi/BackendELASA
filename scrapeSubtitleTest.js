// ES6 / TypeScript
const yt = require('youtube-captions-scraper')
yt.getSubtitles({
  videoID: 'JT5RkjpgC10', // youtube video id
  lang: 'en' // default: `en`
}).then(captions => {
  console.log(captions);
});

