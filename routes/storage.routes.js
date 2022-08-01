const express = require("express")
const router = express.Router()
const uploadMiddleware = require("../utils/handleStorage")
const { createItem } = require("../controllers/storage.controller")

router.post("/", uploadMiddleware.single("myfile"), createItem)

module.exports = router;