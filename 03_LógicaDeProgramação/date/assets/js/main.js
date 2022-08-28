(function(){
    'use strict';

    // const data = new Date();
    // const $h1 = document.querySelector('h1');

    
    // function dayOfWeek(day){
        
    //     day = data.getDay();
        
    //     switch(day){
    //         case 0:  return 'Domingo';
    //         case 1:  return 'Segunda-feira'; 
    //         case 2:  return 'Terça-feira'; 
    //         case 3:  return 'Quarta-feira';
    //         case 4:  return 'Quinta-feira';
    //         case 5:  return 'Sexta-feira'; 
    //         case 6:  return 'Sabado';
    //         default: return 'Dia não existente';
    //     }  
    // }
    
    // function monthOfTheYear(monthNumber){
        
    //     monthNumber = data.getMonth();
        
        
    //     switch(monthNumber){
    //         case 0:  return 'janeiro';
    //         case 1:  return 'fevereiro'; 
    //         case 2:  return 'março'; 
    //         case 3:  return 'abril';
    //         case 4:  return 'maio';
    //         case 5:  return 'junho'; 
    //         case 6:  return 'julho';
    //         case 7:  return 'agosto'; 
    //         case 8:  return 'setembro'; 
    //         case 9:  return 'outubro';
    //         case 10:  return 'novembro';
    //         case 11:  return 'dezembro';            
    //         default: return 'Mes inexistente';
    //     }  
    // }
    // function creatDate(data){

    //     const diaSemana = data.getDay();
    //     const numeroMes = data.getMonth();

    //     data < 0 ? `0${data}` : data;

    //     const nomeDia = dayOfWeek(diaSemana);
    //     const nomeMes = monthOfTheYear(numeroMes);

    //     return( `${nomeDia}, ${data.getDate()} de ${nomeMes}` +
    //             ` de ${data.getFullYear()} <br> ${data.getHours()}:${data.getMinutes()}`
    //     )
    // }
    
    // $h1.innerHTML = creatDate(data);

    const data = new Date();
    const $h1 = document.querySelector('h1');
    const opcoes = {  
        dateStyle: 'full',
        // timeStyle: 'short'
    };
    $h1.innerHTML = data.toLocaleDateString('pt-BR', opcoes); 
    
})()