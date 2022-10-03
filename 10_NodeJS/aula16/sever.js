require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    app.emit('pronto');
})
.catch(e => console.log(e));

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');


const routes = require('./routes');
const path = require('path');
const { middlewareGlobal } = require('./src/middlewares/middlewares');

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({
    secret: 'atumalakaatumalakaabilaetchuculaticticticatumalaca',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, //Tempo que vai durar a sessao 
        httpOnly: true
    }
})

app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs')

// Nossos proprios Middlewares
app.use(middlewareGlobal);

app.use(routes);

app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Url: http://localhost:3000');
        console.log("Stop code: 'ctrl + c'");
    });
});
