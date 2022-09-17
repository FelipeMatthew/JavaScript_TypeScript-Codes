const express = require('express');
const app = express();

// pagina inicial = /

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
        Nome: <input type="text" name="nome">
        <button>Enviar</button>
        </form>
    `)
});

app.post('/', (req, res) => {
    res.send('Formulário recebido, obigado');
})


app.get('/contato', (req, res) => {
    res.send(`mopa`);
})


app.listen(3000, () => {
    console.log('acessar http://localhost:3000');
    console.log('sever executando na porta 3000');
    console.log("para finalizar aperte 'ctrl + c'");
});