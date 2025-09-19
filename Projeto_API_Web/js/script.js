// Consultar a API e retornar o segundo item da secção TODOS, e apresentar no parágrafo do HTML 
//Carregando os itens iniciais da requisição 
const elmP_Exemplo01 = document.getElementById ("resultadoAPI_Exemplo01")
let apiURL = 'https://jsonplaceholder.typicode.com/todos/3'
//Realizar a solicitação para a API Web 
fetch(apiURL)
    //Comvertendo a resposta da API texto JSON para um objeto JavaScript
    .then(resposta => resposta.json())
    .then(dadosJSON => {
        //Imprimir a resposta no condole log do navegador (F12)
        console.log(dadosJSON);
        //Apresentar os dados da resquisição no HTML
        elmP_Exemplo01.innerText = `Mostrar todo objeto JSON ${JSON.stringify(dadosJSON.null,2)}, \n \n mostrar o título do objeto ${dadosJSON.title}` ;
    })
    .catch(erro =>{
        //Caso ocorre erro no código acima, imprimir a mensagem de erro no console log F12
        console.erro('Falha na requisição:',erro);
    });

    //Enviando uma requisição para API Web para criar um novo item POST
    const postApiUrl = "https://jsonplaceholder.typicode.com/todos/3"

    const noboPost = {
        title: 'Minha primeira requisição de POST para a WEB API',
        body: 'Olá API. Receba estas novas informações de POST!!', userId:5
    };

    //Realizar o envio do objeto novoPost para a WEB API
    fetch(postApiUrl , {
        method: 'POST',
        headers:{
            //Informando a WEB API que o conteúdo enviado é um JSON
            'Content-Type':'application/json'
        },
        //O conteúdo de envio, convertido de objeto JS para texto JSON 
        body: JSON.stringify(novoPost)
    })
    .then(resposta => resposta.json())
    .then(objJS => {
        console.log('Post criado com sucesso:', objJS)
    })
    .catch()