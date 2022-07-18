const User = require('../models/User'); 
const jwt = require('jsonwebtoken'); 

const getUserInfo = async (req, res) => {
    const {token} = req;
    const isAuthorized = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET); 
    if(isAuthorized) {
        const { userId:id } = req.params; // <=> isAuthorized.userId
        const user = await User.findOne({
            where: {id},
            attributes: ['id', 'username'],
        });
        res.status(200).json(user);
    } else {
        res.status(403).json({message: 'Unauthorized'});
    }
}

module.exports = {getUserInfo}