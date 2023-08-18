const memoSchema = mongoose.Schema({
    title: String,
    userid: String,
    videoid: String,
    comprehensionlevel: [Number],
    watchdate: [Number],
    timeswatched: Number,
    watchtime: Number
 })
 
 module.exports = mongoose.model('Memo', memoSchema, 'Memo');