const express = require("express");
const router = express.Router();

const uploadController = require("../controller/upload_controller");

router.post("/", uploadController.Upload);
router.use("/file", require("./file"));
module.exports = router;