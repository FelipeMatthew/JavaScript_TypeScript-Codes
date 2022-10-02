exports.paginaInicial = (req , res) => {
    res.send(`
    <form action="/" method="POST">
    Telefone residencial: <input type="text" name="nome"><br>
    Celular: <input type="text" name="nome"><br>
    <button>Enviar contato</button>
    </form>`);
};


