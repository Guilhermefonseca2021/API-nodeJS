const User = require('../models/User');
const bcrypt = require('bcrypt')


async function UsersControllers(request, response) {
    try { 
        const users = await User.find();

        return response.json(users);
    } catch(error) {
        console.log(error);
        return response.status(500).json({ error: 'Internal server error.' })
    }
}

async function Show(request, response) {
    const { id } = request.params;

    try {
        const user = await User.findById(id)

        if(!user) {
            return response.status(404).json();
        }

        return response.json(user);    
        
    } catch(error) {
        return response.status(500).json({ error: ''})
    }
}

async function CreateUser(request, response) {
    const { email, password} = request.body;

    try {
        const user = await User.findOne({ email });

        if (user) {
            return response.status(422).json({ message: `User ${email} already exists`})
        }
        
        const hashPassword = await bcrypt.hash(password, 10)
        
        const newUser = await User.create({ 
            email, 
            password: hashPassword
        });

        return response.status(200).json(newUser)
    } catch(error) {
        console.log(error)
        return response.status(500).json({ error: 'Internal error.' })
    }
}

async function UpdateUser(request, response) {
    const { id } = request.params;
    const { email, password } = request.body;

    try {
        const updatePerson = await User.findByIdAndUpdate({_id: id}, person)

        if(!updatePerson) {
            return response.status(404).json();
        }

        return response.status(200).json(updatePerson);
    } catch(error) {
        return response.status(500).json({ error: 'Error server error.'})
    }
}

async function Destroy(request, response) {
    const { id } = request.params;

    try {
        const user = await User.findByIdAndDelete(id);

        if(!user) {
            return response.status(404).json();
        }

        return response.status(200).json(user);
    } catch(error) {
        return response.status(500).json({ error: 'Error server error.'})
    }
}

module.exports = { UsersControllers, Show, CreateUser, Destroy, UpdateUser}

