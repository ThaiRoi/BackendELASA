const { forEach } = require('async');
const Subtitle = require('../../schema/Subtitle')
const Video = require('../../schema/Video');
require('../../global')
const axios = require('axios');


const searchSubtitle = async (req, res) => {
    //console.log(req);
    const body = req.body;
    console.log("this is body: ", body);
    //  
    const wordToFind = body.wordToFind;
    const regexPattern = new RegExp(`\\b${wordToFind}\\b`, 'gi');

    //   const matchedSentences = Subtitle.caption.filter((sentence) => sentence.t.match(regexPattern));
    //const thai = await Subtitle.find({ videoid: ['64ba475a731586bc1987e300','64ba473b731586bc198794b8', '64ba473b731586bc198794e4'] ,"caption.t" : regexPattern }).limit(5).exec();  
    const subResult = await Subtitle.find({ videoid: ['64ba475a731586bc1987e300', '64ba473b731586bc198794b8', '64ba473b731586bc198794e4'], "caption.t": regexPattern }).limit(5).exec();
    // console.log(subResult);
    //   console.log(subResult);
    if (subResult === []) {
        res.status(404).json({
            error: "Video not found",
            message: "we can't find any video that has the word in your history or in our database"
        })
    }
    else {

        let videoResult = [];
        let finalRes = [];
        await subResult.forEach(async (value, index) => {
            console.log("value: ", value.videoid);
            const video = await Video.findById(value.videoid).exec();
            console.log("video: ", video);
            videoResult.push(video.videoid);
            // console.log("video result: ",videoResult)
            if (index == subResult.length - 1) {
                axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoResult}&key=${apiKey}`)
                    .then(response => {
                        // Handle the response data
                        //console.log(response);
                        for (let i = 0; i < response.data.items.length; i++) {

                            finalRes.push({
                                "videoid": response.data.items[i].id,
                                "title": response.data.items[i].snippet.title,
                                "thumbnailurl": response.data.items[i].snippet.thumbnails,
                                "uploaddate": response.data.items[i].snippet.publishedAt,
                                "channelid": response.data.items[i].snippet.channelId,
                                "channelname": response.data.items[i].snippet.channelTitle
                            });
                        }

                        //console.log("res will be like: ", response);

                        res.status(200).json({
                            success: true,
                            message: "Success",
                            data: {
                                finalRes
                            }
                        })
                    })
                    .catch(error => {
                        // Handle any errors
                        res.status(404).json({
                            error: "Video not found",
                            message: "something went wrong"
                        })
                        console.error(error);
                    });
         
            }
        })
        // console.log("video result: ",videoResult)

    }

}

module.exports = searchSubtitle;