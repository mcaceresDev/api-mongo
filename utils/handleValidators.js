const { validationResult } = require("express-validator")

const validateResults = (req, res, next) => {
    try {
        validationResult(req).throw()
        return next() //Continua hacia el siguiente middleware o el controlador
    }
    catch (err) {
        res.status(403)
        res.send({ errors: err.array() })
    }
}

module.exports = validateResults