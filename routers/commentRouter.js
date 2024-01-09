const router = require("express").Router()
const {comment, getOne, updateComment, getAllComment, deleteComment} = require("../controllers/commentController")

router.post("/comment",comment)
router.get("/getone-comment/:id",getOne)
router.put("/update_comment/:id",updateComment)
router.get("/getall_comment",getAllComment)
router.delete("/delete_comment/:id",deleteComment)

module.exports = router