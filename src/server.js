/* Importando express */
const express = require('express')
const route = require('./route')
const path = require('path')

const server = express()

server.set('view engine', 'ejs')

server.use(express.static("public"))

/* Caminho para a pasta views */
server.set('views', path.join(__dirname, 'views'))

server.use(express.urlencoded({ extended: true }))

server.use(route)

/* Iniciando servidor do node com uma porta */
server.listen(3000, () => console.log("RODANDO"))