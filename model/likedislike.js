const con = require("../config/con")
const mongoose = require("mongoose")
const likeDislike = new mongoose.Schema({
    like: {
        type: Boolean,
        required: true,
    },
    dislike: {
        type: Boolean,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    post_data: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post_data'
    },
});

Data = mongoose.model("likedislike", likeDislike);
module.exports = {
    Data
}