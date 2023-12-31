const { default: mongoose } = require("mongoose");

const subtitleSchema = mongoose.Schema({
    videorecordid: String,
    videoid: String,
    isauto: Boolean,
    caption: [mongoose.Schema.Types.Mixed],
})

module.exports = mongoose.model('Subtitle', subtitleSchema, 'Subtitle');