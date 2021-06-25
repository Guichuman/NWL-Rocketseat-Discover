const express = require('express')
const QuestionController = require('./controllers/QuestionController')

const route = express.Router()

/* Rotas */
route.get('/', (req, res) => res.render("index"))
route.get('/create-pass', (req, res) => res.render("create-pass"))

route.get('/room', (req, res) => res.render("room"))

//Formato que o formulário de dentro da modal tem que passar informação
route.post('/room/:room/:question/:action', QuestionController.index)


module.exports = route