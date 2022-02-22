const user = require('../models/user')

module.exports = {



  create(req, res, next){
    const userProps = req.body
    user.create(userProps)
      .then(user => res.status(201).send(user))
      .catch(next)
  },





}
