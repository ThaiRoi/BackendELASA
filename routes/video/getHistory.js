const History = require('../../schema/History');
const axios = require('axios');


const getHistory = async (req, res) => {
  const body = req.body;
  console.log(body);
 const historyData = await History.find({ userid: body.userid }).exec();
  console.log(historyData);
  if (historyData === null) {
    res.status(404).json({
      error: "a",
      message: "a"
    })
  console.error(error);

  } 
  else {
    let videoArray=[];
    let finalRes =[];
    for(let i=0;i<historyData.length;i++){
      videoArray.push(historyData[i].videoid)
    }
    console.log(videoArray);

    axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoArray}&key=${apiKey}`)
        .then(response => {
            // Handle the response data
            console.log(response.data.items);
            // for (let i = 0; i < response.data.items.length; i++) {
            console.log(historyData);
            for(let i=0;i<historyData.length;i++){
              let match= response.data.items.find(e=> e.id == historyData[i].videoid);
              // console.log(historyData[i],"found match: ",match);
              finalRes.push({
                "userid": historyData[i].userid,
                "videoid":  historyData[i].videoid,
                "comprehensionlevel": historyData[i].comprehensionlevel,
                "watchdate": historyData[i].watchdate,
                "timeswatched": historyData[i].timeswatched,
                "watchtime": historyData[i].watchtime,
              "title" : match.snippet.title,
              "thumbnailurl" : match.snippet.thumbnails,
              "uploaddate" : match.snippet.publishedAt,
              "channelid" : match.snippet.channelId,
              "channelname" : match.snippet.channelTitle,
              })
              
              
            }
            console.log("finalres: ", finalRes);
            res.status(200).json({
              success: true,
              message: "Success",
              data: {
                finalRes
              }
          })
        //   finalRes.push({
        //     "videoid": response.data.items[i].id.videoId,
        //     "title": response.data.items[i].snippet.title,
        //     "thumbnailurl": response.data.items[i].snippet.thumbnails,
        //     "uploaddate": response.data.items[i].snippet.publishedTime,
        //     "channelid": response.data.items[i].snippet.channelId,
        //     "channelname": response.data.items[i].snippet.channelTitle
        // })
        //     //     recommendation.push({
            //         "videoid": response.data.items[i].id,
            //         "title": response.data.items[i].snippet.title,
            //         "thumbnailurl": response.data.items[i].snippet.thumbnails,
            //         "uploaddate": response.data.items[i].snippet.publishedAt,
            //         "channelid": response.data.items[i].snippet.channelId,
            //         "channelname": response.data.items[i].snippet.channelTitle
            //     });
            // }

     

     
        })
        .catch(error => {
            // Handle any errors
            res.status(404).json({
                error: "a",
                message: "a"
              })
            console.error(error);
        });
    
  }

 

}


module.exports = getHistory;