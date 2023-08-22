// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=[YOUR_API_KEY]
const axios = require('axios');

function change_alias(alias) {
    var str = alias;
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
    str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
    str = str.replace(/đ/g,"d");
    // str = str.replace(/!|@|%|^|*|(|)|+|=|<|>|?|/|,|.|:|;|'|"|&|#|[|]|~|$|_|`|-|{|}|||\/g," ");
    // str = str.replace(/ + /g," ");
    str = str.trim(); 
    return str;
}
const searchVideo = (req, res)=>{
    let finalRes = [];
console.log("it is i, search video")
const keyword = change_alias(req.body.keyword.trim());
console.log("keyowrd is:" , keyword);
axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${keyword}&relevanceLanguage=en&key=${apiKey}`)
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
