const jwt = require('jsonwebtoken')
const User = require('../models/User');
const authConfig = require('../config/auth')
const { checkPassword } = require('../services/auth');

async function CreateSession(request, response) {
    const { email, password } = request.body;

    try {
        const user = await User.findOne({ email })

        if(!user) {
            return response.status(401).json({ error: 'User or password invalid' })
        }
    
        if(!checkPassword(user, password)) {
            return response.status(401).json({ error: 'User or password invalid' })
        }

        const { id } = user;
  
        return response.json({
            user: {
                id,
                email
            },
            token: jwt.sign({ id }, authConfig.secret, {
                expiresIn: authConfig.expiresIn
            })
        });
    } catch(error) {
        return response.status(500).json(error)
    }
}

module.exports = CreateSession