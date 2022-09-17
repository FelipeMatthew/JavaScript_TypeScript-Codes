const { urlencoded } = require('express');
const express = require('express');
const app = express();

// http://facebook.com/profiles/userId

app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
)

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
        Nome: <input type="text" name="nome">
        <button>Enviar form</button>
        </form>
    `)
});

app.get('/testes/:idDosUser?/:parametro?', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(req.query.nome);
});

app.post('/', (req, res) => {
    res.send(`O que voce me mandou foi: ${req.body.nome}`);
})

app.listen(3000, () => {
    console.log('acessar http://localhost:3000');
    console.log('sever executando na porta 3000');
    console.log("para finalizar aperte 'ctrl + c'");
});