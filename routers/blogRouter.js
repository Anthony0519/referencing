const router = require("express").Router()
const { createPost, getOne, getAllPost, updatePost, deletePost} = require("../controllers/blogController")

router.post("/post", createPost)
router.get("/getone/:id",getOne)
router.put("/update_post/:id",updatePost)
router.get("/getall",getAllPost)
router.delete("/delete_post/:id",deletePost)

module.exports = router