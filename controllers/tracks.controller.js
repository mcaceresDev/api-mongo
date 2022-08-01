const { tracksModel } = require('../models/index.model')
/**
 * Obtener lista de la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {
    
    const data = await tracksModel.find({})

    res.send(data)
};

const getItem = (req, res) => {

};

const createItem = async (req, res) => {
    const { body } = req
    console.log(body);
    const data = await tracksModel.create(body)
    res.send({data})
};

const updateItem = (req, res) => {

};

const deleteItem = (req, res) => {

};


module.exports = { getItems, getItem, createItem, updateItem, deleteItem }