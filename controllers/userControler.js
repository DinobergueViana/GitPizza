const users = require('../data-base/users.json');
const fs = require('fs');
const path = require('path');

const userControler = {
    create: (req, res) => {
        res.render('createUser')
    },
    store: (req, res) => {
        let { nome, email, senha }
    }
}

module.exports = userControler;