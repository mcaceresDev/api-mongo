const { storageModel } = require("../models/index.model")

const getItems = async (req, res) => {
    const data = await storageModel.find({})
    res.send({data})
}

const createItem = async (req, res) => {
    const { body, file } = req //file Devuelve un objeto con los atributos basicos del archivo subido (nombreCampoEnviado, nombreImagenOriginal, nombreImagenGuardada, ruta, tamaño, etc)
    console.log(body);
    const data = await tracksModel.create(body)
    res.send({data})
};

module.exports = { getItems, createItem }