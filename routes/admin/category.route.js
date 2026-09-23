const router = require("express").Router();
const multer = require("multer")
const upload = multer({ dest: "./public/uploads" })
const categoryController = require("../../controllers/admin/category.controller");


router.post(`/create`, upload.single("avatar"), categoryController.createPost);

router.get('/list', categoryController.list)

router.get('/create', categoryController.create)

module.exports = router;