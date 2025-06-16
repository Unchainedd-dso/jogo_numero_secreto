function exibirTextoNaTela(tag, texto) {
    let container = document.querySelector(tag);
    container.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2});
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    let acertou = chute == numeroAleatorio;

    if(acertou){
        let textoTentativa = (tentativas == 1)? 'tentativa': 'tentativas';
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', `Você descobriu o número secreto em ${tentativas} ${textoTentativa}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numeroAleatorio){
            exibirTextoNaTela('p', 'O número secreto é menor');
        }else{
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparChute();

    }
}

function geraNumeroAleatorio(){
    return parseInt(Math.random() * 10 + 1);
}

function limparChute(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciaJogo(){
    tentativas = 1;
    numeroAleatorio = geraNumeroAleatorio();
    limparChute();
    geraMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled');

}

function geraMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número de 1 a 10');
}

// =========================================================================

let numeroAleatorio = geraNumeroAleatorio();
let tentativas = 1;

geraMensagemInicial()

