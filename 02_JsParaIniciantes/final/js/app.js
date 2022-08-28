(function(){
    'use strict';
    // const $nome = ;
    // const $sobrenome = ;
    // const $peso = ;
    // const $altura = ;
    // const $btn =;

    const $form = document.querySelector("form");
    const $result = document.querySelector('.result');

    const pessoas = [];

    $form.addEventListener('submit', recebeEventoForm);


    function recebeEventoForm(evt){
        evt.preventDefault();

        const $nome = $form.querySelector('.nome');
        const $sobrenome = $form.querySelector('.sobrenome');
        const $peso = $form.querySelector('.peso');
        const $altura = $form.querySelector('.altura');

        pessoas.push({
            nome: $nome.value,
            sobrenome: $sobrenome.value,
            peso: $peso.value,
            altura: $altura.value      
        });
        console.log(pessoas);

        $result.innerHTML += `<h2>Cadastro</h2> nome: ${$nome.value} <br>sobrenome: ${$sobrenome.value} <br>peso: ${$peso.value} <br>altura: ${$altura.value}`
    }
})()