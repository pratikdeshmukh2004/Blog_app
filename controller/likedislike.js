const {Data} = require("../model/likedislike")


getLikedilike = (req, res) => {
    try {
        Data.find({}).populate("post_data").populate("user").exec((err, user) => {
            res.send(user)
        })
    } catch (err) {
        console.log(err);
    }
}

likeDislike = async (req, res) => {
    try {
        userdata = {
            like: req.body.like,
            dislike: req.body.dislike,
            user: res.tokendata.id,
            post_data:req.body.post_id


        };
        console.log(userdata);
        const result = await Data.insertMany(userdata)
        console.log(result);
        res.send(result)
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    likeDislike,
    getLikedilike
}