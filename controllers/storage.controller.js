const { storageModel } = require("../models/index.model")
const PUBLIC_URL = process.env.PUBLIC_URL

const getItems = async (req, res) => {
    const data = await storageModel.find({})
    res.send({data})
}

const createItem = async (req, res) => {
    const { body, file } = req //file Devuelve un objeto con los atributos basicos del archivo subido (nombreCampoEnviado, nombreImagenOriginal, nombreImagenGuardada, ruta, tamaño, etc)
    const fileData = {
        filename: file.filename,
        url: `${PUBLIC_URL}/${file.filename}`
    }
    const data = await storageModel.create(fileData)
    res.send({data})
};

module.exports = { getItems, createItem }