alert('boas vindas ao jogo do número secreto!');
let numeroMaximo = 10;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute;
let tentativas = 1;

// enquanto chute não for igual ao n.s.
while (chute != numeroSecreto) {
    chute = prompt(`Digite um número de 1 a ${numeroMaximo}`);
    console.log(numeroSecreto);
    // se chute for igual ao numero secreto
    if (chute == numeroSecreto) {
        break;
} else {
    if(chute > numeroSecreto) {
        alert(`O número secreto é menor que ${chute}`);
    } else {
        alert(`O número secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas ++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Parabéns! Você acertou o número secreto em ${tentativas} ${palavraTentativa}!`);

