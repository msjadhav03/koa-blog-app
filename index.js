// Main Server File

const Koa = require("koa");
const bodyParser = require("koa-parser");
const router = require("./src/blog/route/blog.route");
require("dotenv").config({ path: "./config/local.env" });

// Creating Koa Application Instance
const app = new Koa();

// Parsing Body : middleware
app.use(bodyParser());

// Adding All Routes to App instance
app.use(router.routes());

// Error Event Handler
app.on("error", (error) => {
    throw error;
});

// Listening Incoming Request on PORT 3000
app.listen(process.env.PORT, () => {
    console.log(`Server Started on PORT ${process.env.PORT}`);
});