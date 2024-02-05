const express = require ('express');
const user = express.Router()

const {loginpost} = require('../Controller/login.js')
user.post('/adminlogin', loginpost)

module.exports =  {user}



