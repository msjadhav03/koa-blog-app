// Blog Route : File
const Router = require("koa-router");
const BlogController = require("../controller/blog.controller");
const router = new Router();

router.post("/create", BlogController.create);
router.get("/findAll", BlogController.findAll);
router.get("/findOne/:id", BlogController.findOne);
router.delete("/deleteOne/:id", BlogController.deleteOne);
router.patch("/updateOne/:id", BlogController.updateOne);

module.exports = router;