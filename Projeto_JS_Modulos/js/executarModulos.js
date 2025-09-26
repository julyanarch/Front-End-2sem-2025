//Realizar a importação e execução dos módulos de matemática
import {PI,somar,subtrair} from './funcMatematica.js';
//Apresentar o valor de PI no console e HTML
let textoPI = `O valor de PI é : ${PI}`;
console.log(textoPI);
document.getElementById("ValorPI").innerText = textoPI;

//Apresentar o resultado de uma soma no console e HTML 
let resultSomar = `O valor da soma de 5 + 4 é: ${somar(5,4)}` ;
console.log(resultSomar);
document.getElementById("resultSomar").innerText = resultSomar;

//Paara importar todos os itens de uma única vez
import * as matematica from './funcMatematica.js'

//Apresentar o resultado de uma subtrair no console e HTML
let resultSubtrair = `O valor da subtração de 5-4 é: ${matematica.subtrair (5,4)}`;
console.log(resultSubtrair); document.getElementById("resultSubtrair").innerText= resultSubtrair;

//Como realizar o importar de uma exportação padrão
import ctrlUsuario from './controleUsuario.js';

//Aqui você está criando um novo objeto usuário que contém as informações do usuário
const userMarco = new ctrlUsuario (' Marco', 18,',arco@gmail.com');

//Apresentar as informações do usuário Marco
console.log(userMarco.saudar());
document.getElementById("resultUsuario").innerText = userMarco.saudar();