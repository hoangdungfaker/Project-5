const category = require("../../models/category.model");

module.exports.list = async (req, res) => {
  res.render("admin/pages/category-list", {
    pageTitle: "Quản lý danh mục"
  });
}

module.exports.create = async (req, res) => {
  res.render("admin/pages/category-create", {
    pageTitle: "Tạo danh mục"
  });
}
module.exports.createPost = async (req, res) => {
  if (req.body.position) {
    req.body.position = parseInt(req.body.position);
  } else {
    const totalRecord = await category.countDocuments({});
    req.body.position = totalRecord + 1;
  }
  req.body.createdBy = req.account.id;
  req.body.updateBy = req.account.id;
  if (req.file) {
    req.body.avatar = req.file.path; // URL ảnh từ Cloudinary
  }
  const newRecord = new category(req.body);
  await newRecord.save();
  res.json({
    code: "success",
    message: "Tạo danh mục thành công"
  })



}