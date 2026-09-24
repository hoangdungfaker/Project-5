const router = require("express").Router();
const categoryController = require("../../controllers/admin/category.controller");
const uploadCloud = require("../../helpers/cloudinary.helper");

router.post(`/create`, uploadCloud.single("avatar"), categoryController.createPost);

router.get('/list', categoryController.list)

router.get('/create', categoryController.create)

module.exports = router;