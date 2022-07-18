const User = require('../models/User');
const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken'); 

const handleRegister = async (req, res) => {
    const { username, email, password } = req.body
    const user = await User.findOne({ where: { email } });
    if (user) {
        res.status(403).json({ message: 'This Email Already Used' });
    } else {
        User.create({
            username, 
            email, 
            password: await bcrypt.hash(password, 14),
        });
        res.sendStatus(200);
    }
}

const handleLogin = async (req, res) => {
    const {email, password} = req.body; 
    const user = await User.findOne({where: {email}});
    if(user) {
        const isMatch = await bcrypt.compare(password, user.password); 
        if(isMatch) {
            // Create JWT
            const accessToken = jwt.sign({userId: user.id}, process.env.ACCESS_TOKEN_SECRET);
            res.status(200).json(accessToken); 
        } else {
            res.status(403).json({message: 'Email / Password Incorrect'})
        }
    } else {
        res.status(403).json({message: 'Email / Password Incorrect'})
    }
}

module.exports = { handleLogin, handleRegister }