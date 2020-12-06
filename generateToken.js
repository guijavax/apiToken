const jwt = require('jsonwebtoken');
require("dotenv-safe").config();

exports.generateToken = function() {
    return jwt.sign({id : 1}, process.env.SECRET, {
        expiresIn: 300
    })
}