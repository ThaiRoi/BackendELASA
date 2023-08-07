// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=[YOUR_API_KEY]
const axios = require('axios');


const searchVideo = (req, res)=>{
    let finalRes = [];
console.log("it is i, search video")
const keyword = req.body.keyword;
console.log("keyowrd is:" , keyword);
axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${keyword}&relevanceLanguage=en&key=${apiKey}`)
    .then((response) =>{
        // console.log(response.data.items);
        for(let i=0;i<response.data.items.length;i++){
            if(response.data.items[i].id.kind == 'youtube#video'){
                  finalRes.push({
                "videoid": response.data.items[i].id.videoId,
                "title": response.data.items[i].snippet.title,
                "thumbnailurl": response.data.items[i].snippet.thumbnails,
                "uploaddate": response.data.items[i].snippet.publishedTime,
                "channelid": response.data.items[i].snippet.channelId,
                "channelname": response.data.items[i].snippet.channelTitle
            })
            }
          
        }
        res.status(200).json({
            success: true,
            message: "Success",
            data: {
              finalRes
            }
        })
    })
    .catch(e=>{
        console.log(e);
        
    })

}

module.exports = searchVideo;
