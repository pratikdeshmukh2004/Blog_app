const router = require("express").Router()
const {signup,LogIn} = require("../controller/login")


router.post("/api/signup",signup)
router.post("/api/login",LogIn)



const cookiesParser = require("cookie-parser")
router.use(cookiesParser())


const {verify} = require("jsonwebtoken")
authentication = (req, res, next) => {
    token = req.cookies;
    // console.log(token,"ghjk");
    if (token == undefined) {
        res.send({
            succses: 0,
            message: "authentication error"
        })
    } else {
        verify(token.user, "priyanka", (err, tokendata) => {
            console.log(tokendata);
            if (err) {
                console.log(err);
                res.send({
                    message: "authentication  error"
                });

            } else if (tokendata.id == undefined) {
                res.send({
                    message: "authentication error"
                })
            } else {
                res.tokendata = tokendata
                next()
            }

        })
    }

}


const {createPost,getAllPost} = require("../controller/createPost")

router.post("/api/post",authentication,createPost)
router.get("/api/post",getAllPost)


const {likeDislike,getLikedilike} = require("../controller/likedislike")
router.post("/api/likedislike",authentication,likeDislike)
router.get("/api/getAlllike",getLikedilike)

 module.exports = {router}