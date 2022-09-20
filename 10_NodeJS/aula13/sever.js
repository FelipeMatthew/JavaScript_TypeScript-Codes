const express = require('express');
const routes = require('./routes');
const path = require('path');
const { middlewareGlobal } = require('./src/middlewares/middlewares');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));


app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs')

// Nossos proprios Middlewares
app.use(middlewareGlobal);

app.use(routes);

app.listen(3000, () => {
    console.log('acessar http://localhost:3000');
    console.log('sever executando na porta 3000');
    console.log("para finalizar aperte 'ctrl + c'");
});