const express = require('express'); 
const usersRouter = express.Router(); 
const {getUserInfo } = require('../controllers/users'); 
const {authToken} = require('../midlewares/auth'); 


usersRouter.get('/user-:userId', authToken, getUserInfo); 

module.exports = usersRouter; 