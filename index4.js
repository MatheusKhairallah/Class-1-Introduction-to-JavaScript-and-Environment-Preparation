/*Uma função é um bloco de código projetado para executar uma tarefa específica.Uma função 
é executada quando "algo" a invoca (chama)*/
function calc(x1, x2, operator) {

    /*O eval() avalia ou executa um argumento. Se o argumento for uma expressão, 
    eval() avalia a expressão. Se o argumento for uma ou mais instruções JavaScript, 
    eval()executa as instruções.*/
    return eval(` ${x1} ${operator} ${x2}`);

}

let resultado = calc(7, 2, "*");

console.log(resultado);

//Arrow Function
let calc2 = (x1, x2, operator) => {

    return eval(` ${x1} ${operator} ${x2}`);

}

let resultado2 = calc2(7, 2, "+");

console.log(resultado2);