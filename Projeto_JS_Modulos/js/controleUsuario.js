//Arquivo Java Script para construção de funções de controle de usuário
 export default class Usuario {
    constructor (nome,idade,email) {
        this.nome = nome;
        this.idade = idade;
        this.email = email;
    }
    saudar(){
        return `Olá, meu nome é ${this.nome}, e minha idade é ${this.idade}`;
    }
}
