// Escrever conteúdo dentro do texto dinâmico 

let pDinamico = document.getElementById("txtDinamico")
pDinamico.innerHTML = '<em> Texto dinamico inserido através do JavaScript </em>'

// Criando um Array no JavaScript

const arrCarros = ["Ferrari", "Volvo"];

// arrCarros = ["Geladeira", "Microondas"]; ERRO! não pode reescrever um array em uma variável const

arrCarros[2] = "Fiat";

pDinamico.innerHTML += " - inserido o carro: " +  arrCarros[1];

//Inicia Array vazio, e depois preenche os valores;
const arrFrutas = [];
arrFrutas[0] = "Banana";
arrFrutas[1] = "Manga";
arrFrutas[2] = "Uva";


let pArrayCarros = document.getElementById("txtArrayCarros")
pArrayCarros.innerHTML = arrCarros.toString();

//Imprimir todo o array, usando o nome do array
let pPrintArrayCarros = document.getElementById("txtPrintArrayCarros")
pPrintArrayCarros.innerHTML = arrCarros;

//Imprimir o array de frutas, da forma como foi criado
let pPrintArrayFrutasNAOORDER = document.getElementById("txtPrintarrFrutasNAOORDER")
pPrintArrayFrutasNAOORDER.innerHTML = arrFrutas;

//Ordenar o conteúdo do array, e apresentar no HTML
let pPrintArrayFrutasORDER = document.getElementById("txtPrintarrFrutasORDER")
pPrintArrayFrutasORDER.innerHTML = arrFrutas.sort();

//Ordenar o número de frutas dentro do array
let pnumArrFrutas = document.getElementById("numArrFrutas")
pnumArrFrutas.innerHTML = arrFrutas.length;

arrFrutas.push("Limão");

//Apresentar o número de frutas dentro do array
let pnumArrFrutasAdd = document.getElementById("numArrFrutasAdd")
pnumArrFrutasAdd.innerHTML = "Numero: " + arrFrutas.length + "<br>" + " - Frutas: " + arrFrutas.toString();

//Remover o primeiro elemento do array 
arrFrutas.shift()

//Apresentar o número de frutas dentro do array
let pnumArrFrutasRmv = document.getElementById("numArrFrutasRmv")
pnumArrFrutasRmv.innerHTML = "Numero: " + arrFrutas.length + "<br>" + " - Frutas: " + arrFrutas.toString();

//Ponteiro de Array
const newPonteiroArrFrutas = arrFrutas;

//Efetivamente um novo elemento
const newArrFrutas = new Array (arrFrutas);

//Concatenar are
const newArrCarrosFrutas = arrCarros.concat(arrFrutas)

//Verificar para saber se o item é realmente um Array 
let resultArray = frutas instanceof Array;

//Imprimir resultado no console do navegador (DevTools = F12)
console.log(resultArray)





