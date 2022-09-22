exports.paginaInicial = (req, res) => {
    res.render('index.ejs');
    return;
    
}

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
}