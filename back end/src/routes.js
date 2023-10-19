const routes = require('express').Router();
const HelloController = require('./controllers/HelloControllers')


routes.get('/create_user', HelloController)


module.exports = routes