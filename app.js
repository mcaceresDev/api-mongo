require("dotenv").config()
const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())

const port = process.env.PORT || 3050

app.get('/', (req, res)=> {
    res.send("TU API ESTA FUNCIONANDO")
})

app.listen(port, (req, res) => {

    console.log(`Esta app esta corriendo en http://localhost:${port}`);
})