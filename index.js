//Um igual "=" é atribuição de uma váriavel
let a = 10;

const b = "10";

//Dois iguais "==" é comparação de valor de váriaveis
console.log(a == b);

//Três iguais "===" é comparação de valor e igualdade de váriaveis
console.log(a === b);

//Esclamação e dois iguais "!==" é comparação de diferença de valor de váriaveis
console.log(a !== b);

//Compara se as duas condições são verdadeiras
console.log(a == b && typeof a == "string");

//Compara se pelomenos uma das condições são verdadeiras
console.log(a === b || typeof a == "number");

                //<=====================================================>

let cor = "verde";

/*Estrutura que controla quais comandos serão executados baseados em cada condição 
especificada*/
//If - "Se"; Else If - "Senão se"; Else - "Senão"
if (cor === "verde") {
    
    console.log("siga");
    
} else if (cor === "amarelo") {
    
    console.log("atenção");

} else {
    
    console.log("pare");

}