const  express = require("express")
const app = express()
const  {router} = require("./router/routes")
app.use(express.json())
app.use("/",router)
const port = process.env.PORT || 6000
app.listen(port,()=>{
    console.log("listining", port);
})