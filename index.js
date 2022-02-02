const  express = require("express")
const app = express()
const  {router} = require("./router/routes")
app.use(express.json())
app.use("/",router)
app.listen(6000,()=>{
    console.log("listining");
})