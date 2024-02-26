function trocarFato(){
    const apiUrl = 'https://api.chucknorris.io/jokes/random';

    fetch(apiUrl).then(resposta => {
        if (!resposta.ok) {
        throw new Error('Erro ao fazer a solicitação à API');
        }
        return resposta.json(); 
    }).then(dados => {
        document.getElementById("fatos").innerHTML = dados.value;
        console.log(dados);
    }).catch(error => {
        console.error('Erro:', error);
    });  
    
}