/*Com o HTML DOM, o JavaScript pode acessar e alterar todos os elementos de 
um documento HTML*/

/*Os eventos HTML DOM permitem que o JavaScript registre diferentes manipuladores 
de eventos em elementos em um documento HTML. Os eventos são normalmente usados ​​em 
combinação com funções, e a função não será executada antes que o evento ocorra 
(como quando um usuário clica em um botão)*/
window.addEventListener('focus', event => {

    console.log("focus");

});

document.addEventListener('click', event => {

    console.log("click");

});

let agora = new Date();

console.log(agora.toLocaleDateString("pt-BR"));