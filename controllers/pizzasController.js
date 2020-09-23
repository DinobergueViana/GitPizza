const listaPizzas = require('../data-base/pizzas.json');
const fs = require('fs');
const path = require('path');

const pizzasController = {
    index: (req, res) => {
        res.render('index', {listaPizzas});
    },
    show: (req, res) => {
        let indice = req.params.indice;
        let pizza = listaPizzas[indice];
        res.render('pizza',{pizza});

    },
    adicionar: (req, res) => {
        res.render('addPizza');
    },
    editar: (req, res) => {
        let {id} = req.params;
        let pizza = listaPizzas.find((pizza)=>{
            return pizza.id == id;
        })
        res.render('editarPizza', {pizza});
    },
    atualizarPizza: (req, res) => {
        let {id} = req.params;
        pizza = listaPizzas.find( (pizza) => {
            return pizza.id == id;
        });

        let { nome, ingredientes, preco } = req.body;
        pizza.nome = nome;
        pizza.ingredientes = ingredientes.split(',');
        pizza.preco = preco;
        fs.writeFileSync(path.join('data-base', 'pizzas.json'), JSON.stringify(listaPizzas));

        res.redirect('/');

    },
    salvarPizza: (req, res) => {
        let {nome, preco, ingredientes} = req.body;
        // transforma string em array
        ingredientes = ingredientes.split(',');
        // cria o id do registro
        let id = listaPizzas.length + 1

        //adiciona um registro de pizza na base de dados
        listaPizzas.push({
            id: id,
            nome: nome,
            preco: preco,
            img: "",
            ingredientes: ingredientes
        });

        //ecreve o arquivo na base de dados
        fs.writeFileSync(path.join('data-base', 'pizzas.json'), JSON.stringify(listaPizzas));
        res.send(listaPizzas);
    }
}

module.exports = pizzasController;