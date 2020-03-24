const express = require('express');
const ongController = require('./controllers/OngController')
const incidentsController = require('./controllers/incidentsController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router();

routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

routes.post('/incidents', incidentsController.create)
routes.get('/incidents', incidentsController.index)
routes.delete('/incidents/:id', incidentsController.delete)

routes.get('/profile', ProfileController.index)
routes.post('/session', SessionController.create)

module.exports = routes;