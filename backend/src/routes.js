const express = require('express');
const ong = require('./controllers/ongController');
const incidents = require('./controllers/incidentController');
const profile = require('./controllers/profileController');
const session = require('./controllers/sessionController');


const routes = express.Router();

routes.post('/ongs', ong.create);
routes.get('/ongs', ong.all);

routes.post('/incidents', incidents.create);
routes.get('/incidents', incidents.all);
routes.delete('/incidents/:id', incidents.delete);

routes.get('/profile', profile.find);

routes.post('/session', session.create);



module.exports = routes;