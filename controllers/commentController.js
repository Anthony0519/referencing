const commentModel = require("../models/commentModel")
const blogModel = require("../models/blogModel")

exports.comment = async (req,res)=>{
    try {

        // get the post id
        const id = req.body.id

        // find the post
        const blog = await blogModel.findById(id)
        if(!blog){
            return res.status(404).json({
                error:"blog not found"
            })
        }

        // create the comment
        const comment = await commentModel.create(req.body)

        // post the comment to the post
        blog.comments.push(comment._id)
        comment.post = blog._id

        // save the changes to the dataBase
        await blog.save()
        await comment.save()

        // throw a success response
        res.status(200).json({
            message: "commented successfully",
            data:comment
        })
        
    } catch (error) {
        res.status(500).json({
            error:error.message
        })
    }
}

exports.getOne = async (req,res)=>{
    try {

        // get the id
        const id = req.params.id

        // find the post with the id
        const blog = await commentModel.findById(id)
        if (!blog) {
            return res.status(404).json({
                error:"blog not found"
            })
        }

        res.status(200).json({
            messaeg: "viewing comment",
            data:blog
        })
        
    } catch (error) {
        res.status(500).json({
            error:error.message
        })
    }
}


exports.getAllComment = async(req,res)=>{
    try {

        // get all post available in the database
        const allPost = await commentModel.find().select(commentModel._id, commentModel.post,  commentModel.comments)
        if (!allPost) {
            return res.status(404).json({
                error:"no post found"
            })
        }

        // throw a success message
        res.status(200).json({
            message:`there are ${allPost.length} comments availabe`,
            data:allPost
        })
        
    } catch (error) {
        res.status(500).json({
            error:error.message
        })
    }
}

exports.updateComment = async(req,res)=>{
    try {

        // get the post id
        const id = req.params.id
        if(!id){
            return res.status(400).json({
                error:'you need to pass an id in the params'
            })
        }
        

        // find the post with the id and update
        const updates = await commentModel.findByIdAndUpdate(id,req.body,{new:true})
        if (!updates) {
            return res.status(404).json({
                error:"post not found"
            })
        }

        res.status(200).json({
            message: "post updated successfuly",
            data: updates
        })
        
    } catch (error) {
        res.status(500).json({
            error:error.message
        })
    }
}

exports.deleteComment = async(req,res)=>{
    try {

        // get the post id
        const id = req.params.id
        if(!id){
            return res.status(400).json({
                error:'you need to pass an id in the params'
            })
        }

        // find the post with the id and delete
        const deletePost = await commentModel.findByIdAndDelete(id)
        if (!deletePost) {
            return res.status(400).json({
                error:"could not delete this comment"
            })
        }

        // throw a success message
        res.status(200).json({
            message: "comment deleted successfuly"
        })

        
    } catch (error) {
        res.status(500).json({
            error:error.message
        })
    }
}