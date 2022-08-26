require('dotenv').config(); //Dados restritos salvos no .env 

const express = require('express'); //Chamando express 
const app = express(); // Atribuindo-o a função em uma variavel

const mongoose = require('mongoose'); //Chamando mongoose modelador de dados
//Se usa o Schema para falar como os dados devem ser salvos nessa 'Tabela'
// nome: sobrenome: Email: 
mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => { //Retorna uma Promisse
    app.emit('pronto'); //Vai transmitir um sinal(evento) falando que está pronto para conectar
})
.catch(e => console.log(e));

const session = require('express-session'); //Identifica navegador do cliente, cookie com id, e sempre que ele mandar id da seção vai entrar direto = conta facebook
const MongoStore = require('connect-mongo'); //Sessões serão salvas em banco de dados ao inves de memória
const flash = require('connect-flash'); //Mensagens autodestrutiva, manda algum feedback para usuarios
const routes = require('./routes'); // Rotas da aplicação - /home /contato /blabla
const path = require('path'); // Trabalha com caminhos
const helmet = require('helmet'); // Aplicação mais segura
const csrf = require('csurf'); // São csrfToken, faz com que sites externos nao consiga modificar nossa aplicação
const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middlewares'); // Funções executadas na rota no meio do caminho, faz uma função e passa para outro podendo fazer verificações por etapas

app.use(helmet());

app.use(express.urlencoded({ extended: true })); // Pode postar formulários para dentro da aplicação
app.use(express.json()); // Pode fazer parse de json para dentro da aplicação
app.use(express.static(path.resolve(__dirname, 'public'))); // São arquivos estáticos que podem ser acessados diretamentes, 'Arquivos publicos'

const sessionOptions = session({ // Configurações da sessão
    secret: 'atumalakaatumalakaabilaetchuculaticticticatumalaca',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, //Tempo que vai durar a sessao 7 dias
        httpOnly: true
    }
})

app.use(sessionOptions); // Chamando as configs
app.use(flash()); // Chamando função flash

app.set('views', path.resolve(__dirname, 'src', 'views')); // Arquivos que reenderiza na tela - HTML - EJS
app.set('view engine', 'ejs'); // Expecificando a ferramenta que será utilizada que vai ser o EJS

app.use(csrf()); // Chamando os TOKENS do csrf

// Middlewares
app.use(middlewareGlobal); //Default
app.use(checkCsrfError); // Retorna pagina de erro
app.use(csrfMiddleware); // Token
app.use(routes); // Rotas

app.on('pronto', () => { //Vai ouvir o evento do emit assim liberando para ouvir requisições
    app.listen(3000, () => {
        console.log('Url: http://localhost:3000');
        console.log("Stop code: 'ctrl + c'");
    });
});
