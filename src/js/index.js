/*
    OBJETIVO 1 - quando clicarmos na deta de avançar temos que mostrar o próximo cartão da lista
        - passo 1 - dar um jeito de pegar o elemento HTML da deta avançar
        - passo 2 - dar um jeito de indentificar o clique do usuário na seta avançar
        - passo 3 - fazer aparecer o próximo cartão da lista
        - passo 4 - buscar o cartão que esta selecionando e esconder

    OBJETIVO 2 - quando clicarmos na deta de voltar temos que mostrar o próximo cartão da lista
        - passo 1 - dar um jeito de pegar o elemento HTML da deta voltar
        - passo 2 - dar um jeito de indentificar o clique do usuário na seta voltar
        - passo 3 - fazer aparecer o cartão anterior da lista
        - passo 4 - buscar o cartão que esta selecionando e esconder
*/

const btnAvancar = document.getElementById("btn-avançar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

function esconderCartaoSelecionado(){
    const cartaoSelecionado = document.querySelector(".selecionado")
    cartaoSelecionado.classList.remove("selecionado");
}

function mostrarCartao(indiceCartao){
    cartoes[indiceCartao].classList.add("selecionado");
}

btnAvancar.addEventListener("click", function () {
    if(cartaoAtual === cartoes.length - 1) cartaoAtual = -1;

    esconderCartaoSelecionado();

    cartaoAtual++;
    mostrarCartao(cartaoAtual);
})

btnVoltar.addEventListener("click", function () {
    if(cartaoAtual === 0) cartaoAtual = cartoes.length;

    esconderCartaoSelecionado();

    cartaoAtual--;
    mostrarCartao(cartaoAtual);
})