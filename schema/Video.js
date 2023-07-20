const videoSchema = mongoose.Schema({
    videoid: String,
    title: String,
    viewcount: Number,
    duration: Number,
    thumbnailurl: String,
    category: Array,
    uploaddate: String,
    channelid: String,
    channelname: String
})

module.exports = mongoose.model('Video', videoSchema, 'Video');