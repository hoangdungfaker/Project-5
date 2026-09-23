const mongoose = require("mongoose");
const schema = new mongoose.Schema({
    name: String,
    parent: String,
    position: String,
    avatar: String,
    description: String,
    createBy: String,
    updateBy: String,
    slug: String,
    deleted: {
        type: Boolean,
        default: false
    },
    deleteBy: String,
    deleteAt: Date,
}, {
    timestamps: true
})
const Category = mongoose.model("Category", schema, "categories");
module.exports = Category;