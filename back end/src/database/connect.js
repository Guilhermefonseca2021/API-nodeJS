const mongoose = require('mongoose')
const config = require('../config/database')
// require('dotenv')


async function connectDataBase() {
    await mongoose.connect(
        config.default.url
    )
}

module.exports = connectDataBase