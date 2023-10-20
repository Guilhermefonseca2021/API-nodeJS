const routes = require('express').Router();
const HelloController = require('./controllers/HelloControllers')
const { UsersControllers, CreateUser, Show, UpdateUser, Destroy } = require('./controllers/UserController')


routes.get('/hello', HelloController)
routes.get('/users', UsersControllers)
routes.post('/users', CreateUser)
routes.get('/users/:id', Show)
routes.put('/users/:id', UpdateUser)
routes.delete('/users/:id', Destroy)


module.exports = routes