/*

Objetivo: Ao clicar no botão, deve aparecer 
a imagem de fundo corresponde.

*/


//1. Dar um jeito de pegar o html dos botões

const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');
//2. Dar um jeito de identificar o clique do usuário
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

            //3. Desmarcar o botão selecionado anteriormente
            desativarBotaoSelecionado();

            //4. Marcar o botão marcado como se estivesse selecionado
            selecionarBotaoCarrossel(botao);

            //5. Esconder a imagem anterior
            esconderImagemAtiva();

            //6. Fazer aparecer a imagem correspondente ao botão clicado
            mostrarImagemFundo(indice); 

    })
})

function mostrarImagemFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
