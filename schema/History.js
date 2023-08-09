const historySchema = mongoose.Schema({
    userid: String,
    videoid: String,
    comprehensionlevel: [Number],
    watchdate: [Number],
    timeswatched: Number,
    watchtime: Number
 })
 
 module.exports = mongoose.model('History', historySchema, 'History');