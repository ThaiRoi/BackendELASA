require('../global');
const recommendation = mongoose.Schema({
    videoid : String,
    isactive: Boolean
 })
 
 module.exports = mongoose.model('CreatorRecommendation', recommendation, 'CreatorRecommendation');