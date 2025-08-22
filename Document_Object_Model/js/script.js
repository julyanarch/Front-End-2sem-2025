// Selecionar o elemento pelo ID
const TituloPrincipal = document.getElementById("TituloPrincipal");

TituloPrincipal.innerHTML = "Novo Titulo da Página!!"
//Imprimir o conteúdo de Titulo Principal no console
console.log(TituloPrincipal);

//Seleciona o elemento pela Classe
const arrParagrafos = document.getElementsByClassName("paragrafo");

//Imprimir os paragrafos retornados
console.log(arrParagrafos);
console.log(arrParagrafos[0]);
console.log(arrParagrafos[1]);

//Retornar a lista de itens pelo nome da tag 
const arrItemLista = document.getElementsByTagName("li");

//Imprimir todos os itens da lista 
console.log(arrItemLista[0].innerText);

//Selecionar os tags HTML através de códigos/regras CSS
//Acessar pelo CSS ID
const container = document.querySelector("#container");
//Acessar pelo CSS Class
const pDestaque = document.querySelector(".destaque");
//Acessar o primeiro P da Div
const primeiroP =document.querySelector("#container p");

console.log("Retorno dos elementos via comandos CSS");
console.log(container);
console.log(pDestaque);
console.log(primeiroP);

//Selecionar todos os paragrafos via comando CSS
const arrParagrafosCSS = document.querySelectorAll ("#container p");
const arrParagrafosCSSDiv = document.querySelectorAll ("#container>p");

//Imprimir todos os itens de paragrafo retornados pelo querySelectorAll
console.log("retorno da coleção de paragrafos via querySelectorAll")
arrParagrafosCSSDiv.forEach((paragrafo) => {
    console.log(paragrafo);
});

// Acessar elemento H1 pelo ID e trocar o texto 
const TituloPrincipal2 = document.querySelector("#TituloPrincipal2");

TituloPrincipal2.textContent = "Alterando o texto do título principal 2"

//Aplicar configurações CSS via JavaScript
TituloPrincipal.style.color = '#000000ff';
TituloPrincipal.style.backgroundColor = '#9768a0ff';
TituloPrincipal.style.fontSize = '2em';

//Selecionar o botão pelo ID 
const botao = document.getElementById("botaoJS");

//Adicionar a classe ao botão
botao.classList.add("ativar");

//Como criar elementos no HTML via JavaScript
const newParagrafo = document.createElement("p");
newParagrafo.innerHTML = "<strong> Este parágrafo foi criado via JavaScript </strong>"

//Para anexar um elemento na página, deve a partir do "PAI/Container" adicionar o "Filho"
container.appendChild(newParagrafo);

//Criar elemento e configurar um JavaScript, pelo JavaScript
const newDiv = document.createElement('div');

newDiv.innerHTML = 'Passe o mouse AQUI!';
newDiv.style.border = '2px solid black';
newDiv.style.padding = '10px';

//Código do JS para criar JS dinamicamente 
newDiv.funcMudarCorFundo = function(cor){
    this.style.backgroundColor = cor;
}

newDiv.addEventListener('mouseover' , function() { 
    this.funcMudarCorFundo('#967293')
})

newDiv.addEventListener('mouseout' , function() { 
    this.funcMudarCorFundo('white')
})

//Anexa a nova Div criada, no final do Body
document.body.appendChild(newDiv)





