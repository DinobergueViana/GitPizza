const listaPizzas = require('../data-base/pizzas.json')
const users = require('../data-base/users.json');
const fs = require('fs');
const path = require('path');

const usersControler = {
    index: (req, res) => {
        res.render('user-menu', {listaPizzas});
    },
    create: (req, res) => {
        res.render('createUser')
    },
    show: (req, res) => {
        res.render('login-user')
    },
    store: (req, res) => {
        let { nome, email, senha, confirma } = req.body;
        // validação de dados
        if(nome != "" && senha == confirma) {
            users.push({nome, email, senha});
            fs.writeFileSync(path.join('data-base', 'users.json'), JSON.stringify(users))
        } else {
            res.send("Usuario ou senha inválidos! :(");
        }
    },
    login: (req, res) => {
        let {email, senha} = req.body;
        let user = users.find(
            user => (user.email == email && user.senha == senha)
        );

        if(user){
            // guarda as informações individualmente

            // req.session.username = user.name;
            // req.session.useremail = user.email;

            // guarda todas as informações de maneira geral
            req.session.user = user;
            return res.redirect('/');
        } else {
            return res.redirect('/user/login');
        }
    }
}

module.exports = usersControler;