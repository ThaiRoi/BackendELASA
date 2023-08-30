const memoSchema = mongoose.Schema({
    title: String,
    userid: String,
    username: String,
    description: String,
    imageurl: String,
   videoid: String,
   captionstart: Number
 })
 
 module.exports = mongoose.model('Memo', memoSchema, 'Memo');