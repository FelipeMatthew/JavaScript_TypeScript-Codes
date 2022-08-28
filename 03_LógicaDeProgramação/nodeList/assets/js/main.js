(function(){
    'use strict';

    const $container = document.querySelector('.container');
    const $paragrafos = $container.querySelectorAll('p');

    const bodyStyle = getComputedStyle(document.body);
    const bodyBgColor = bodyStyle.backgroundColor; 
    
    for(let p of $paragrafos){
        
        p.style.backgroundColor = bodyBgColor;
        p.style.color = 'white';
        
        
    }


})()