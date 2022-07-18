function authToken(req, res, next) {
    const bearer = req.headers['authorization']
    if(bearer) {
        const token = bearer.split(' ')[1];
        req.token = token; 
    } else {
        res.status(403).json({message: 'unauthorized'});
        return;  
    }
    next();
}

module.exports = {authToken}