(function(){
    'use strict';

    const elements = [
        {tag: 'p', texto: 'Frase 1'},
        {tag: 'div', texto: 'Frase 2'},
        {tag: 'footer', texto: 'Frase 3'},
        {tag: 'section', texto: 'Frase 4'}
    ];

    const $container = document.querySelector('.container');
    const $div = document.createElement('div');

    // Vai criar o elemento e nesse elemento vai adicionar tag e os textos, uasndo array e objestos;

    for(let i = 0; i < elements.length; i++){

        let { tag , texto} = elements[i];
        let tagCriada = document.createElement(tag);
        let textoCriado = document.createTextNode(texto);
        
        tagCriada.appendChild(textoCriado);
        $div.appendChild(tagCriada);
    }

    $container.appendChild($div);
})()