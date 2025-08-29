//Criar um evento de monitoramento de script para o click do botão

const elmBotao = document.getElementById("botao");
const elmParagrafo = document.querySelector("#mensagem");
// Função que escreve uma mensagem no parágrafo
function escreverMensagem() {
  elmParagrafo.textContent = "essa é a surpresa, kk =) Obrigada.";
}

//Criar o monitoramento do evento
elmBotao.addEventListener("click", escreverMensagem);

//Criar que retorna o objeto HTML que exeutou este evento
elmBotao.addEventListener("click", function (event) {
  //Imprimir no console o objeto que executou este evento
  console.log(event);
  console.log(event.type);
  console.log(event.target);
});

//Configurar um evento de monitoramento de clique no container, e obter qual objetivo filho do container foi efetivamente clicado.
const container = document.getElementById("container");

elmContainer.addEventListener("click", function (evt) {
  //Mostrar no console log qual dos objetos filhos do container foi pressionado
  console.log(evt.target.textContent);

  elmParagrafoResultado.textContent = `Você clicou no botão  ${evt.target.textContent}`;
});

//Monitorar o evento de envio do formulário e impedir que ele recarregue a página 
const elmForm = document.querySelector("#myform");
const elmImputName = document.querySelector("#nameUser");

elmForm.addEventListener("submit", function (e){
    //Método do event que interrompe a execução padrão do enviar formulário
    e.preventDefault();
    console.log("Podemos agora analisar os dados do formulário: " + e.target.textContent);
    console.log(`O usuário digitou o texto: $ {elmImputName.value}`);
});

//Criar evento para monitorar a insercção de caracteres no input
elmImputName.addEventListener('keydown',function(e){
    console.log(`A tecla pressionada foi: ${e.key}`);
    if (e.key === 'Enter'){
        alert('Você pressionou a tecla ENTER!!')
    };
});


