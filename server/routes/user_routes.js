const userController = require('../controllers/users_controller')
module.exports = (app) => {
  // get all
  // app.get('/api/user', userController.all)
  // details
  // app.get('/api/user/:id', userController.details)
  // put
  // app.put('/api/user/:id', userController.edit)
  // create
  app.post('/register', userController.create)
  // delete
  // app.delete('/api/user/:id', userController.delete)
}
