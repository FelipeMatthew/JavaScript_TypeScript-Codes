exports.paginaInicial = (req, res) => {
    res.send(`
        <form action="/" method="POST">
        Nome: <input type="text" name="nome"><br>
        Sobrenome: <input type="text" name="nome">
        <button>Enviar form</button>
        </form>
    `);

}

exports.trataPost = (req, res) => {
    res.send('Hey sou sua nova rota de POST');
}