const express = require("express")
const router = express.Router()
const { getItems, getItem, createItem } = require("../controllers/tracks.controller")
const { createValidator } = require("../validators/tracks.validator")

router.get("/", getItems)
router.get("/:id", getItem)
router.post("/", createValidator, createItem)

module.exports = router 