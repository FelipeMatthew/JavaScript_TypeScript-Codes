const express = require('express');
const routes = require('./routes');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs')

app.use(routes);

app.listen(3000, () => {
    console.log('acessar http://localhost:3000');
    console.log('sever executando na porta 3000');
    console.log("para finalizar aperte 'ctrl + c'");
});