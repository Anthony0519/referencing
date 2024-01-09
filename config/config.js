const mongoose = require("mongoose")
require("dotenv").config()

const DB = process.env.password

mongoose.connect(DB).then(()=>{
    console.log("dataBase connected");
}).catch((e)=>{
    console.log(e.message);
})

