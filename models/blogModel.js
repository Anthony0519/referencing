const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({
    title: {
        type:String,
    },
    desc: {
        type:String,
    },
    comments: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:"comments" 
    }]
}, {timestamps: true})

const blogModel = mongoose.model("blog",blogSchema)

module.exports = blogModel