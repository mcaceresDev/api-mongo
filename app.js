require("dotenv").config()
const express = require("express")
const cors = require("cors")
const dbConnect = require('./config/mongo')
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static("storage"))

const port = process.env.PORT || 3050


app.use("/api", require("./routes/index.routes")) 

app.listen(port, (req, res) => {

    console.log(`Esta app esta corriendo en http://localhost:${port}`);
})

dbConnect()