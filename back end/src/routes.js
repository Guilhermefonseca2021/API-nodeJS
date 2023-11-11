const routes = require('express').Router();

const auth = require('./middlewares/auth')
const { UsersControllers, CreateUser, Show, UpdateUser, Destroy } = require('./controllers/UserController')
const { RepositoriesController, CreateRepository, DestroyRepository } = require('./controllers/RepositoriesControllers');
const CreateSession = require('./controllers/SessionController');


// public routes
routes.get('', () => {})

// routes.use(auth)
routes.post('/sessions', CreateSession)

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