const mongoose = require('mongoose');
require('dotenv').config()
mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser: true ,useUnifiedTopology: true} ,(err)=>{
    if (err) throw err;
    console.log('connected');
})

module.exports = mongoose