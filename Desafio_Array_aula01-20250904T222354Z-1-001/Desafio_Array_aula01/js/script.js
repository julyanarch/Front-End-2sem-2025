//****************************Exercício 1*********************************

const arrFrutas = [];
arrFrutas[0] = "Maçã";
arrFrutas[1] = "Banana";
arrFrutas[2] = "Morango";


let pPrintArrayFrutasNAOORDER = document.getElementById("txtPrintarrFrutasNAOORDER")
pPrintArrayFrutasNAOORDER.innerHTML = arrFrutas;


console.log(arrFrutas[0]);
console.log(arrFrutas[arrFrutas.length - 1]);

//****************************Exercício 2*********************************

arrFrutas.push("Laranja");
arrFrutas.shift()

console.log(arrFrutas);

//****************************Exercício 3*********************************

let x = [1,2,3];
let y = "Hello"

console.log(Array.isArray(x));
console.log(Array.isArray(y));

//****************************Exercício 4*********************************

let array = [10,20,30,40];
let novoArray = array.map(x=> x*2);

console.log(novoArray);

//****************************Exercício 5*********************************

let arrayIdades = [15,22,18,35,12,45];
let arrayPares = arrayIdades.filter(x=> x% 2 ===0);

console.log(arrayPares);

//****************************Exercício 6*********************************

let arrayPrecos = [5.50, 12.00, 8.75, 15.25];
let soma = arrayPrecos.reduce((acc,curr) => acc + curr,0);

console.log (soma);

//****************************Exercício 7*********************************

let arrAnimais = ['Cachorro', 'Gato', 'Elefante', 'Leão'];
arrAnimais.splice (2,1, 'Girafa' , 'Hipopótamo');

console.log (arrAnimais);

//****************************Exercício 8*********************************

let produtos = [
    {nome: 'Laptop', preco: 1200},
    {nome: 'Mouse', preco: 25}, 
    {nome: 'Teclado', preco: 75}
];
let produtosAcimaDe50 = produtos.filter (produto => produto.preco > 50);

let nomesProdutos = produtosAcimaDe50.map(produto => produto.nome);

console.log (nomesProdutos); 

//****************************Exercício 9*********************************

let usuarios = ['Ana', 'João', 'Maria', 'Pedro'];
let nomesComLetraM = usuarios.find(usuario => usuario[0] === 'M');

console.log(nomesComLetraM);

let existeJoao = usuarios.some(usuario => usuario === 'João');

console.log(existeJoao); 


//****************************Exercício 10********************************

let numerosDesordenados = [8, 2, 11, 4, 1];
numerosDesordenados.sort((a, b) => a - b);

console.log(numerosDesordenados);  

