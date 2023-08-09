const History = require('../../schema/History');


const createHistory = async (req, res) => {
    const body = req.body;
    console.log(body);
    
    if(body){
         res.status(200).json({
        success: true,
        message: "Video and data successfully saved!",
        data: {
            message: "lets goooooooo testing"
        }
    })
    const thai = await History.findOne({ userid: body.userid, videoid: body.videoid }).exec();
    console.log(thai);
    if (thai === null) {
        console.log("Tylung looks at the scroll and said: it's nothing!");
        //create a history record
        History.create({
            userid: body.userid,
            videoid: body.videoid,
            comprehensionlevel: [body.comprehensionlevel],
            watchdate: [Date.now()],
            timeswatched: 1,
            watchtime: body.watchtime
        })
    }
    else {
        //update history record
        thai.comprehensionlevel.push(body.comprehensionlevel);
        thai.watchdate.push(Date.now());
        thai.watchtime += body.watchtime;
        thai.timeswatched += 1;
        thai.save().then((updatedRecord)=>{
            console.log('updatedRecord: ', updatedRecord);
        });
    }
    }
    else {
        res.status(404).json({
            error: "Something went wrong",
            message: "request sent failed"
        })
    }
   
    
}


module.exports = createHistory;