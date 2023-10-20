const mongoose = require('mongoose')
const config = require('../config/database')

async function connectDataBase() {
    await mongoose.connect(`${config.url}`)
}

module.exports = connectDataBase