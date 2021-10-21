const { verifySignUp, authJWT } = require('./middleware')
module.exports = (app) => {
  //CRUD functions for user
  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Headers', 'x-access-token, Origin, Content-Type, Accept')
    next()
  })
  const auth = require('./controllers/auth.controller')
  app.post('/auth/signup', verifySignUp.checkDuplicateEmail, auth.signup)
  app.post('/auth/signin', auth.signin)
  const user = require('./controllers/user.controller')
  app.put('/user', authJWT.verifyToken, user.update)
  app.get('/user/:id', authJWT.verifyToken, user.findOne)
  const consignment = require('./controllers/consignment.controller')
  //CRUD functions for consignment
  app.post('/consignment', authJWT.verifyToken, consignment.create)
  app.get('/consignment', authJWT.verifyToken, consignment.getAll)
  app.put('/consignment/confirm', authJWT.verifyToken, consignment.confirm)
  app.put('/consignment/authenticate', authJWT.verifyToken, consignment.authenticate)
  app.put('/consignment/reject', authJWT.verifyToken, consignment.reject)
  //CRUD functions for intake
  const intake = require('./controllers/intake.controller')
  app.post('/intake', authJWT.verifyToken, intake.create)
  app.get('/intake', authJWT.verifyToken, intake.getAll)
  app.get('/intake/', authJWT.verifyToken, intake.findOne)
  app.put('/intake/:intakeId', authJWT.verifyToken, intake.update)
  app.delete('/intake/:intakeId', authJWT.verifyToken, intake.delete)
  app.delete('/intake', authJWT.verifyToken, intake.deleteAll)
  //CRUD functions for policy
  const policy = require('./controllers/policy.controller')
  app.post('/policy', authJWT.verifyToken, policy.create)
  app.get('/policy', authJWT.verifyToken, policy.getAll)
  app.get('/policy/:policyId', authJWT.verifyToken, policy.findOne)
  app.put('/policy/:policyId', authJWT.verifyToken, policy.update)
  app.delete('/policy/:policyId', authJWT.verifyToken, policy.delete)
  app.delete('/policy', authJWT.verifyToken, policy.deleteAll)
  //CRUD functions for Staff
  const staff = require('./controllers/staff.controller')
  app.post('/staff', authJWT.verifyToken, staff.create)
  app.get('/staff/:id', authJWT.verifyToken, staff.getAll)
  app.get('/staff', authJWT.verifyToken, staff.findOne)
  app.put('/staff', authJWT.verifyToken, staff.update)
  app.delete('/staff', authJWT.verifyToken, staff.delete)
  app.delete('/staff', authJWT.verifyToken, staff.deleteAll)
  //CRUD functions for venue
  const venue = require('./controllers/venue.controller')
  app.post('/venue', authJWT.verifyToken, venue.create)
  app.get('/venue/:id', authJWT.verifyToken, venue.getAll)
  app.get('/venue', authJWT.verifyToken, venue.findOne)
  app.put('/venue', authJWT.verifyToken, venue.update)
  app.delete('/venue', authJWT.verifyToken, venue.delete)
  app.delete('/venue', authJWT.verifyToken, venue.deleteAll)
}
