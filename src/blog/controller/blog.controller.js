// Controller File : Blog
const MongoConnection = require("../../../common/database/mongo.database.connect");
const BlogModel = require("../model/blog.model");

module.exports = {
    async create(context) {
        try {
            const blogItem = new BlogModel(context.request.body);
            const result = await blogItem.save();
            context.body = result;
            // context.body = "First Route";
        } catch (err) {
            context.throw(500, "Internal Server Error", err);
        }
    },
    async findAll(context) {
        try {
            const result = await BlogModel.find();
            context.body = result;
        } catch (err) {
            context.throw(500, "Internal Server Error", err);
        }
    },

    async findOne(context) {
        try {
            const result = await BlogModel.findById({
                _id: context.request.params.id,
            });
            context.body = result;
        } catch (err) {
            context.throw(500, "Internal Server Error", err);
        }
    },
    async deleteOne(context) {
        try {
            const result = await BlogModel.findByIdAndRemove({
                _id: context.request.params.id,
            });
            context.body = result;
        } catch (err) {
            context.throw(500, "Internal Server Error", err);
        }
    },
    async updateOne(context) {
        try {
            const result = await BlogModel.findByIdAndUpdate({ _id: context.request.params.id },
                context.request.body
            );
            const resultAfterUpdate = await BlogModel.findById({
                _id: context.request.params.id,
            });
            context.body = resultAfterUpdate;
        } catch (err) {
            context.throw(500, "Internal Server Error", err);
        }
    },
};