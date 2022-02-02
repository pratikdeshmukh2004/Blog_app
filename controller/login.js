const {
    User
} = require("../model/db")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
signup = async (req, res) => {
    const Data = new User({
        name: req.body.name,
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, 10)
    });
    console.log(Data);
    try {
        const a = await User.insertMany(Data)
        res.send(a)
    } catch (err) {
        res.send(err)
        console.log(err);
    }
}

LogIn = async (req, res) => {
    const result = await User.findOne({
        email: req.body.email
    })
    if (!result) {
        return res.send("Incorrect email")
    }
    const validPassword = await bcrypt.compare(req.body.password, result.password)
    // console.log(result);
    if (validPassword) {
        const accessToken = jwt.sign({
            "id": result._id
        }, "priyanka", {
            expiresIn: "6h"
        })
        // console.log(accessToken);
        res.cookie("user", accessToken)
    }

    if (!validPassword) {
        return res.send("incorrect password")
    }
    res.send("login succesfully")
}
module.exports = {
    signup,
    LogIn
}