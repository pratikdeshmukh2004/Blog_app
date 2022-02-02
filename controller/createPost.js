const data = require("../model/createpost")

getAllPost = (req, res) => {
    try {
        data.find({}).populate('user').exec((err, user) => {
            console.log(err);
            res.send(user)
        })
    } catch (err) {
        console.log(err);
    }
}
createPost = async (req, res) => {
    try {
        const post = {
            title: req.body.title,
            description: req.body.description,
            user: res.tokendata.id

        }
        console.log(post);
        const result = await data.insertMany(post)
        // console.log(result);
        res.send(post)

    } catch (err) {
        res.send(err)
    }
}
module.exports = {
    createPost,
    getAllPost
}