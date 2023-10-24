const bcrypt = require('bcrypt');

async function createPassword(password) {
    bcrypt.hash(password, 8);


}

function checkPassword(user, password) {
    bcrypt.compare(password, user.password);
}

module.exports = { createPassword, checkPassword }