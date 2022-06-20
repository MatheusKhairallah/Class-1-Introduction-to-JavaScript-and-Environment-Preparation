/*Array é uma várial que pode armazenar mais de um valor dentro dela, podendo cada valor 
também ser de um tipo diferente de váriavel*/

/*O forEach() chama uma função para cada elemento em uma array*/
let carros = ["Palio 98", "Toro", "UNO", 10, true, new Date(), function(){}];

carros.forEach(function(value, index){

    console.log(index, value);

});