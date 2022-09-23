const HomeModel = require('../models/HomeModels');

HomeModel.create({ //Vai retornar uma promessa
    titulo: 'Conexão com mongoDB',
    descricao: 'NAO ACREDITO QUE DEU CERTO MEU DEUUUUS'
})
.then(dados => console.log(dados))
.catch(e => console.log(e));

exports.paginaInicial = (req, res) => {
    res.render('index.ejs');
    return;
    
}

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
}