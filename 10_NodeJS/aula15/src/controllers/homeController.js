exports.paginaInicial = (req, res) => {
    
    console.log(req.session.user);
    res.render('index.ejs');
    return;
    
}

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
}