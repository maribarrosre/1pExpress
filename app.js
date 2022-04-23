const express = require('express');

let app = express();

let usuario = "Digite seu nome"

app.get('/usuario', (req, res)=>res.send(usuario));

app.get('/usuario', (req, res)=>res.send(usuario));

app.post('/usuario/adicionar', (req, res)=>res.send(usuario));

app.put('/usuario/:id', (req, res)=>res.send(usuario));

app.delete('/usuario/:id', (req, res)=>res.send(usuario));

app.listen(3000, ()=>console.log(usuario));

console.log(usuario);
