const jwt = require('jsonwebtoken')
require('dotenv').config()
const secret = process.env.SECRET_KEY
console.log(secret);

const isLogin = (req, res, next) => {
  let token = req.headers.token
  console.log(token, 'idhfoshfoi');
  jwt.verify(token, secret, function(err, decoded) {
    if (!err) {
      req.headers.id = decoded.id
      console.log(decoded);
      next()
    } else {
      res.status(401).send({msg:'Please signin'})
    }
  })
}

module.exports = {
  isLogin
}
