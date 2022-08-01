const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.send("MENSAJE DESDE USERS")
})

module.exports = router