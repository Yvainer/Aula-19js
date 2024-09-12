const input = document.querySelector("#numero")

function maisUm(){
    // obtém o valor atual e converter para número
    let valorAtual = Number(input.innerText);
    //Incrementa o valor
    valorAtual += 1;
    //Atualizae o texto do elemnento com o novo valor
    input.innerText = valorAtual
}

function menosUm(){
    // obtém o valor atual e converter para número
    let valorAtual = Number(input.innerText);
    //Incrementa o valor
    valorAtual -= 1;
    //Atualizae o texto do elemnento com o novo valor
    input.innerText = valorAtual
}

