exports.paginaInicial = (req, res) => {
    res.render('index.ejs')

}

exports.trataPost = (req, res) => {
    res.send('Hey sou sua nova rota de POST');
}