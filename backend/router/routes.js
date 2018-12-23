const UserController = require('../controllers/userController');
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1, // limit each IP to 100 requests per windowMs
  message: {msg: 'Nope in JSON form.'}
});

module.exports = (app) => {
  app.get('/api/test', (req, res) => {
    console.log('Test route hit.');
    res.send({msg: 'oh herrrrrrro!'})
  })

  app.get('/api/test2', limiter, (req, res) => {
    console.log('Test route 2 hit.');
    res.send({msg: 'This is test route 2, yay. This route should not count towards the limit.'})
  })

  app.get('/api/users', limiter, UserController.readAll)
}
