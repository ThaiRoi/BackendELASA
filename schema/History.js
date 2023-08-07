const historySchema = mongoose.Schema({
    userid: String,
    videoid: String,
    comprehensionlevel: [String],
    watchtime: Number,
    timeswatched: Number
 })
 
 module.exports = mongoose.model('History', historySchema, 'History');