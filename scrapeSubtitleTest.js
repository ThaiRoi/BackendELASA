// ES6 / TypeScript
import { getSubtitles } from 'youtube-captions-scraper';

getSubtitles({
  videoID: 'JT5RkjpgC10', // youtube video id
  lang: 'en' // default: `en`
}).then(captions => {
  console.log(captions);
});

