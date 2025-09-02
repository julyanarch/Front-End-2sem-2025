//Aprender a criar um objeto  literal 
//let aluno {}; //Criar um objeto VAZIO

//Criando um objeto literal com propriedades/atributos declarados

let aluno = {
    nome: "Julyana Silva",
    matricula: "202512345",
    curso: "Análise e Desenvolvimento de Sistemas",
    ativo: true 
};

//Imprimir o nome do usuário no elemento P do HTML
const elmParagNomeUsuario = document.getElementById("NomeUsuario");
elmParagNomeUsuario.innerText = `Nome do aluno é: ${aluno.nome}`;

//Visualizar toda estrutura do aluno
console.log(aluno);

// Como alterar um valor de uma propriedade do objeto 
aluno.nome = "Antonio Silva"

//Adicionando uma nova propriedade/ atributo no objeto aluno 
aluno.semestre = 2;

const elmParagNomeUsuarioMod = document.getElementById("NomeUsuarioMod");
elmParagNomeUsuarioMod.innerText = `O nome do aluno foi alterado para: ${aluno.nome}, e o seu semestre é o: ${aluno.semestre}`;

//Criar um novo objeto de forma literal, para armazenar produto
let produto ={
    nome: "Notbook GAMER",
    preco: 8000.00,
    estoque: 15,
    descrever: function(){
        console.log(`Produto: ${this.nome} | Preço: ${this.preco.toFixed(2)}`);
    },
    // Método para realizar a venda de produto
    vender:function(quantidade){
        console.log(`Quantidade do estoque antes da venda ${this.estoque}`);
        if (quantidade <= this.estoque){
            this.estoque -= quantidade;
            console.log(`Venda de ${quantidade} unidade(s) de ${this.nome} realizada com sucesso!!`);
        } else{
            console.log(`Estoque insuficiente de ${this.nome}... Temos apenas ${this.estoque} unidade(s).`);
        }

        console.log(`Quantidade do estoque após a venda ${this.estoque}`);
    }
};

// Como executar uma função/metódo de um objeto 
produto.descrever();

produto.vender(3);

produto.vender(14);

//Criando um construtor de objetos utilizando funções
function Carro(marca,modelo,cor){
    this.marca = marca;
    this.modelo = modelo;
    this.cor = cor;
}

//Criar objetos carros a partir do construtor Carro
const CarroJulyana = new Carro ("BMW" , "302" , "Preto");
const CarroFernanda = new Carro ("Ferrari", "F8" , "Vermelho");

//Retornar os atributos/propriedades do carro Instânciado/Criado anteriormente
console.log(`A marca ${CarroJulyana.marca} e modelo do carro é ${CarroJulyana.modelo}`);

//Configurando novas funções para o objeto Carro a partir da "extensão" prototype
Carro.prototype.ligar = function(){
    console.log(`O modelo ${this.modelo} foi ligado!!`);
};

// Como executar a novo método/função criado no prototype do construtor Carro
CarroJulyana.ligar();

// Como descobrir as propriedades que um objeto possui 
console.log(Object.keys(carroMarco)); //Propriedades
console.log(Object.values(carroMarco)); //Valores
console.log(Object.entries(carroMarco)); //Propriedades e Valores 

