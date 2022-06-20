/*As Classes são, de fato, "funções especiais". Uma maneira de definir uma classe é 
usando uma declaração de classe. Para declarar uma classe, você deve usar a palavra-chave 
class seguida pelo nome da classe*/

/*O método "constructor" é um tipo especial de método para criar e iniciar um objeto 
criado pela classe. Só pode existir um método especial com o nome "constructor" 
dentro da classe. */
class celular {

    constructor() {
        
        this.cor = "prata";

    }


}

let objeto = new celular();

console.log(objeto);