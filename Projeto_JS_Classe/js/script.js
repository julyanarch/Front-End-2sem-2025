// Construir a classe de modelo para produtos da minha loja
// A classe é como se fosse uma regra - ideia - abstração
class Produto{
    // Construtor de propriedades da classe
    constructor(strNome,numPreco,numEstoque){
        this.nome = strNome;
        this.preco = numPreco;
        this.estoque = numEstoque;
    }
    // Método para realizar venda de produto
    vender(quantidade){

        // Verificar a qtd de itens q tem no estoque, se negativo, avisa que não pode realizar a venda
        if(quantidade>this.estoque){
            console.log(`Estoque de produtos ${this.nome} insuficiente!!`);
            return false; //Encerra a função (STOP/BREAK)
        }

        // Subtraindo itens do estoque
        this.estoque -= quantidade;
        
        // Informar que a venda ocorreu com sucesso
        console.log(`${quantidade} de unidade(s) de ${this.nome} vendida(s).`);
    }
}

// Criar meus produtos através do modelo classe produto
// Agora tenho um objeto instanciado da classe Produto com 3 atributos

const notebookDell = new Produto("Notebook Gamer", 8499.99,18)

const Teclado = new Produto("Teclado Mecânico", 229.80,42);

// Mostrar no console o nome do notebook
console.log(notebookDell.nome);

// Realizar a venda de 10 itens notebook e mostrar no console
notebookDell.vender(10);

// Vender + 15 notebook
notebookDell.vender(15);



// Criar uma nova classe Animal
class Animal {
    constructor(nome,color,size){
        this.nome = nome;
        this.cor = color;
        this.tamanho = size;

    }
    dormir(){
        console.log(`O animal ${this.nome} está dormindo!!!`);
    }
}

// Especificar uma nova classe Cao que extende as funções de animal
class Cao extends Animal{
    constructor(nome,color,size,tipoRaca){
        // super dispara o construtor de extensão Cao que é o Animal
        super(nome,color,size)
        this.raca = tipoRaca;
    }

    latir(){
        console.log(`O cão está latindo!!!`);        
    }
}

// Especificar uma nova classe passaro que absorve/herda todas as características de Animal
class Passaro extends Animal{
    voar(){
        console.log(`O pássaro está voando!!!`);        
    }
}

// Especificar a classe Papagaio que vai herdar tudo de passaro e de animal
class Papagaio extends Passaro{
    falar(){
        console.log(`O papagaio está falando!!!`);        
    }
}

// Criar objeto animal geral
const gato = new Animal("Frajola","Preto",60);


// Criar objeto animal cão e pássaro - recebe as funções da classe Animal geral e da classe cão/pássaro
const cao = new Cao("Pluto","Marrom",180,"SRD");
console.log(cao); 

const passaro = new Passaro("Piu-piu","Amarelo",10);

// Executa o método latir da classe Cao
cao.latir()

//O cao também pode executar os metodos de animal, por ser uma extensão de animal
cao.dormir()

// Classe carro com propriedades "protegidas", prática de proteção
class carro{
    constructor(marca){
        // propriedade real é _marca, que está "protegida" (convenção)
        this._marca = marca;
    }
    // Método que permite ler a marca do carro
    get marca(){
        return this._marca;
    }
    // método que permite escrever o nome da marca do carro
    set marca(valorMarca){
        if(typeof valorMarca !== 'string' || valorMarca.trim() === ''){
            console.error('Erro: A marca do carro deve ser uma string não vazia!!');
            return;//encerra o método set
        }
        this._marca = valorMarca.trim();
    }
}

// Criar um carro para testar o método get e set
const meuCarro = new carro('Ford');

// Mostrar a marca do carro
console.log(meuCarro.marca);

// Escrever um valor de marca não valido
meuCarro.marca - 12345;

// Escrever um valor de marca não valido
meuCarro.marca - 'Volvo';

// Mostrar a marca do carro
console.log(meuCarro.marca);
