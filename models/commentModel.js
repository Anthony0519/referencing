const mongoose = require("mongoose")

const commentSchema = new mongoose.Schema({
    comments: {
        type:String,
    },
    post: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"blog" 
    }
}, {timestamps: true})

const commentModel = mongoose.model("comments",commentSchema)

module.exports = commentModel