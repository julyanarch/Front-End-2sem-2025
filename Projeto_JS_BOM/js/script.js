//Como utilizar os métodos navegador (BOM) para obter a informação de resolução da janela
console.log(`Altura da janela: ${window.innerHeight} - Largura da janela: ${window.innerWidth}`);

console.log(`Largura da janela: ${window.innerWidth}`);

//Utilizando os métodos de janela do navegador para interagir com o usuário 
const nomeUsuario = prompt ("Qual é o seu nome?");
    if(confirm(`Tem certeza que o seu nome é ${nomeUsuario} ??`)){
        alert(`Olá, ${nomeUsuario}!! Bem vindo ao curso de FrondEnd =)`);
    }else{
        alert(`Olá, combinado, vou manter seu nome no anonimato! Bem vindo ao curso de FrondEnd =) `)
    };

    //Executar uma ação, após X tempo de espera 
    setTimeout(function(){
        console.log("Esta mensagem foi gerada após 8 segundos de espera!!");
        location.assign('https://www.sp.senai.br/')
    },8000); //Tempo de timeout é ms (milissegundos)
    

    //Como obter a informação do navegador do usuário 
    console.log(`Seu navegador é: ${navigator.userAgent}`);

    //Obter informações de Geolocalização do usuário 
    navigator.geolocation.getCurrentPosition(function(local_posicao){
        console.log(` Sua Latitude é ${local_posicao.coords.latitude}`);
        console.log(` Sua Longitude é ${local_posicao.coords.longitude}`);
    });