
const userSchema = mongoose.Schema({
    account: String,
    password: String,
    name: String,
    email: String,
    phone: String,
    facebook: String,
    ispro: Boolean
})

module.exports = mongoose.model('User', userSchema, 'User');