const mongoose = require('mongoose')
const con = require("../config/con")
const post = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
      }

})


const data = mongoose.model('post_data', post)

module.exports = data