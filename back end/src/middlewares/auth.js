const jwt = require('jsonwebtoken');

const authConfig = require('../config/auth');
const promisify = require('util');

async function Auth(request, response, next) {
    const authHeader = request.headers.authorization;

    if(!authHeader) {
        return response.status(401).json({ error: 'token was not provided '})
    }
    // take token 
    const [, token ] = authHeader.split(' ');

    try {
        // compare token
        const decoded = await promisify(jwt.verify(token, authConfig.secret));
        request.userId = decoded.id

        return next()
    } catch(error) {
        return response.status(401).json();
    }

    const authenticated = true;

    if(authenticated) {
        return next();
    }   else {
        return response.status(401).json()
    }
}

module.exports = Auth
