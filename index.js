const express = require('express');
const expressMongoDb = require('express-mongo-db');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3080;

app.use(expressMongoDb('mongodb://localhost/pMagic'));
app.use(bodyParser());
app.use(cors());


// métodos para inserir e visualizar informações no banco de dados
// usuario
app.get('/usuario', function(req, res) {
    req.db.collection('usuario').find().toArray(function(erro, dados) {
        if (erro) {
            res.status(500).send('Um erro ocorreu!');
            return;
        }

        res.send(dados);
    });
});

app.post('/usuario', function(req, res) {
    req.db.collection('usuario').insert(req.body, function(erro, dados) {
        if (erro) {
            res.status(500).send('Um erro ocorreu!');
            return;
        }
        res.send('Dados inseridos!');
    });
});

// ==============================FIM DOS MÉTODOS===============================



// métodos para inserir e visualizar informações no banco de dados
// LOGIN
app.get('/login', function(req, res) {
    req.db.collection('login').find().toArray(function(erro, dados) {
        if (erro) {
            res.status(500).send('Um erro ocorreu!');
            return;
        }

        res.send(dados);
    });
});

app.post('/login', function(req, res) {
    req.db.collection('login').insert(req.body, function(erro, dados) {
        if (erro) {
            res.status(500).send('Um erro ocorreu!');
            return;
        }
        res.send('Dados inseridos!');
    });
});

// ==============================FIM DOS MÉTODOS===============================

//Porta por onde o servidor vai estar escutando

app.listen(port, function() {
    console.log('Servidor rodando na porta 3080');
});