const users = require('../data-base/users.json');
const fs = require('fs');
const path = require('path');
const { json } = require('express');

const usersControler = {
    create: (req, res) => {
        res.render('createUser')
    },
    store: (req, res) => {
        let { nome, email, senha, confirma } = req.body;

        if(nome != "" && senha == confirma) {
            users.push({nome, email, senha});
            fs.writeFileSync(path.join('data-base', 'users.json'), JSON.stringify(users))
        } else {
            res.send("Usuario ou senha inválidos! :(");
        }

    }
}

module.exports = usersControler;