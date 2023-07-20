
const rawSubtitleSchema = mongoose.Schema({
   video: Object,
   contributions: Array,
   captions: Array
})

module.exports = mongoose.model('youtubeSubDataFull', rawSubtitleSchema, 'youtubeSubDataFull');