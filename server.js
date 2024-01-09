const express = require("express")
const blogRouter = require("./routers/blogRouter")
const commentRouter = require("./routers/commentRouter")
require("./config/config")

const port = process.env.port

const app = express()
app.use(express.json())
app.use("/uploads", express.static("uploads"))
app.use("/api/V1/user", blogRouter)
app.use("/api/V1/user", commentRouter)

app.listen(port, ()=>{
    console.log(`server on port: ${port}`);
})