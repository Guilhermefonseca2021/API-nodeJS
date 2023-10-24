const routes = require('express').Router();
const HelloController = require('./controllers/HelloControllers')

const auth = require('./middlewares/auth')
const { UsersControllers, CreateUser, Show, UpdateUser, Destroy } = require('./controllers/UserController')
const { RepositoriesController, CreateRepository, DestroyRepository } = require('./controllers/RepositoriesControllers');
const CreateSession = require('./controllers/SessionController');


// public routes
routes.get('/hello', HelloController)
routes.get('', () => {})

routes.use(auth)
// routes.put('/sessions', CreateSession)

// private routes
routes.get('/users', UsersControllers)
routes.post('/users', CreateUser)
routes.get('/users/:id', Show)
routes.put('/users/:id', UpdateUser)
routes.delete('/users/:id', Destroy)

routes.get('/users/:user_id/repositories', RepositoriesController)
routes.post('/users/:user_id/repositories', CreateRepository)
routes.delete('/users/:user_id/repositories', DestroyRepository)


module.exports = routes