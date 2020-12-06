const http = require('http')
const express = require('express')
const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const generate = require('./generateToken')

app.post("/token", (req, res) => {
    let body = req.body
    if(body.user === 'Guilherme' && body.password === 2345 ) {
        return res.json({auth : true, token : generate.generateToken()})
    }
    res.status(500).json({message: 'Login inválido'})
})

const server = http.createServer(app)
server.listen(3000)