const Subtitle = require('../../schema/Subtitle')
const Video = require('../../schema/Video');
const History = require('../../schema/History');
const axios = require('axios');
require('../../global')


const searchSubtitle = async (req, res) => {
    //console.log(req);
    const body = req.body;
    console.log("this is body: ", body);
    //  
    const history = [];
    const other = [];
    const finalRes = {};

    const historyIdArray = []
    const wordToFind = body.wordToFind;
    const trimmed = wordToFind.trim();
    const escapedSearchTerm = trimmed.replace(/[.*+?^${}()|[\]\\]/g, '');
    const regexPattern = new RegExp(`(?<!\\w)${escapedSearchTerm}(?!\\w)`, 'gi');
    // res.status(200).json({
    //     error: "test",
    //     message: "okay"
    // })
    async function findHistory() {
        console.log("find history is running");
        const historyData = await History.find({ userid: body.userId }).exec();
        if (historyData != null) {
            console.log("there is history")
            historyData.forEach(element => {
                historyIdArray.push(element.videoid);
            });

            const historyObjectIdArray = [];
            const historyVideoData = await Video.find({ videoid: historyIdArray }).exec();
            historyVideoData.forEach(element => {
                historyObjectIdArray.push(element._id.valueOf());
            });
            // console.log(historyObjectIdArray);

            const historySubMatch = await Subtitle.find({ videorecordid: historyObjectIdArray, "caption.text": regexPattern }).limit(50).exec();
            // console.log("this is history sub that matches search term: ", historySubMatch);

            if (historySubMatch.length > 0) {
                // console.log("this is history sub match",historySubMatch)
                const historyIdMatch = []
                historySubMatch.forEach(element => {
                    historyIdMatch.push(element.videoid)
                });
                await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${historyIdMatch}&key=${apiKey}`)
                    .then(async(response) => {
                        // Handle the response data
                        //console.log(response);
                        for (let i = 0; i < response.data.items.length; i++) {
                            let sampletext = "";
                            const a = await historySubMatch.find(({ videoid }) => videoid == response.data.items[i].id);
                            // console.log("this is a: ",a)
                            for (let i = 0; i < a.caption.length; i++) {
                                if (regexPattern.test(a.caption[i].text)) {
                                    sampletext = a.caption[i].text;
                                    // console.log("this is sample text: ", sampletext);
                                    break;

                                }
                            }
                            history.push({
                                "videoid": response.data.items[i].id,
                                "title": response.data.items[i].snippet.title,
                                "thumbnailurl": response.data.items[i].snippet.thumbnails,
                                "uploaddate": response.data.items[i].snippet.publishedAt,
                                "channelid": response.data.items[i].snippet.channelId,
                                "channelname": response.data.items[i].snippet.channelTitle,
                                "samplesentence": sampletext
                            });
                        }
                        // console.log("this is history response:", history);
            
                    })
                    .catch(error => {

               

                    });
            } else {
    
            }
        }
        else {
            
        }
        // console.log("this is history response:", history);

    }

    async function findOther() {
        console.log("find other is running")
        const subResult = await Subtitle.find({ "caption.text": regexPattern }).limit(50).exec();
        if (subResult.length == 0) {
            
        }
        else {
            let videoResultId = [];
            subResult.forEach((value) => {
             videoResultId.push(value.videoid);
            })         
            await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoResultId}&key=${apiKey}`)
                .then(async(response) => {
                    for (let i = 0; i < response.data.items.length; i++) {
                        let sampletext = "cum";
                        const a = await subResult.find(({ videoid }) => videoid == response.data.items[i].id);
                        for (let i = 0; i < a.caption.length; i++) {
                            // console.log(i,"omega",a.caption[i].text);

                            if (regexPattern.test(a.caption[i].text)) {
                                console.log(i, a.caption[i].text);
                                sampletext = a.caption[i].text;
                                break;
                            }
                        }
                        // a.caption.filter((item) => {regexPattern.test(item.text)}).map((v, i)=>{
                        //         sampletext = v.text;
                        //         console.log("this is sample text:", sampletext);
                        //         //break the map loop
                        // })
                            other.push({
                                "videoid": response.data.items[i].id,
                                "title": response.data.items[i].snippet.title,
                                "thumbnailurl": response.data.items[i].snippet.thumbnails,
                                "uploaddate": response.data.items[i].snippet.publishedAt,
                                "channelid": response.data.items[i].snippet.channelId,
                                "channelname": response.data.items[i].snippet.channelTitle,
                                "samplesentence": sampletext
                            });
                        }
                })
                
  
                    // .then(response => {
                    //     for (let i = 0; i < response.data.items.length; i++) {
                    //         let sampletext ="";
                    //         const a = subResult.find(({videoid})=>videoid == response.data.items[i].id);
                    //         for(let i = 0;i<a.caption.length;i++){
                    //             if (a.caption[i].text.match(regexPattern)){
                    //               sampletext = a.caption[i].text;
                    //               break;
                    //             }
                    //           }
                    //         other.push({
                    //             "videoid": response.data.items[i].id,
                    //             "title": response.data.items[i].snippet.title,
                    //             "thumbnailurl": response.data.items[i].snippet.thumbnails,
                    //             "uploaddate": response.data.items[i].snippet.publishedAt,
                    //             "channelid": response.data.items[i].snippet.channelId,
                    //             "channelname": response.data.items[i].snippet.channelTitle,
                    //             "samplesentence" :sampletext
                    //         });
                    //     }
                    //     console.log("this is other: ", other);
                    //     //console.log("res will be like: ", response);

                    //     // console.log("video result: ",videoResultId)
                    //     // res.status(200).json({
                    //     //     success: true,
                    //     //     message: "Success",
                    //     //     data: {
                    //     //         finalRes
                    //     //     }
                    //     // })
                    // })
                    // .catch(error => {
                    //     // Handle any errors
                    //     // res.status(404).json({
                    //     //     error: "Video not found",
                    //     //     message: "something went wrong"
                    //     // })
                    //     // console.error(error);
                    // });

                
            
            // console.log("video result: ",videoResultId)
            // console.log("this is other response ooutside for loops: ", other);
        }
        

    }



    await findHistory();
    await findOther();

    // console.log("this is history", history);
    // console.log("this is other", other); 
    if(history.length ==0){
        history.push({
            "videoid": "dQw4w9WgXcQ",
            "title": "",
        })
    }
    if(other.length ==0){
        other.push({
            "videoid": "dQw4w9WgXcQ",
            "title": "",
        })
    }
    finalRes.history = history;
    finalRes.other = other;



    res.status(200).json({
        success: true,
        message: "okay",
        data: {
            history: history,
            other: other
        }
    })


}

module.exports = searchSubtitle;