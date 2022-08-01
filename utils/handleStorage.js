const express = require("express")
const router = express.Router()

const multer = require("multer")

const uploadFile = multer.diskStorage({
    destination: function (req, file, cb) {
        const pathStorage = `${__dirname}/../uploads`

        cb(null, pathStorage) 
    },

    filename: function (req, file, cb) {
        const ext = file.originalname.split(".").pop()
        const filename = `file-${Date.now()}.${ext}`
        cb(null, filename)
    }
})

const uploadMiddleware = multer({storage:uploadFile});  

module.exports = uploadMiddleware