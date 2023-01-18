const prompt = require('prompt-sync')();

const respostas = [];

let condicao = false;

const resposta1 = () => {
    let pergunta1 = prompt('Digite uma propriedade CSS: ');
    respostas.push(pergunta1);
    return(pergunta1);
}

const resposta2 = () => {

    let pergunta2 = prompt('Você quer continuar? Y/SAIR ').toUpperCase();
    switch(pergunta2){
        case 'SAIR':
            condicao = true;
            respostas.sort();
            console.log(respostas)
            break;
        case 'Y':
            condicao = false;
            resposta1();
            break;
        default:
            console.log('Opção inválida')
    }
    return pergunta2;
}

resposta1();

while(!condicao) {

    resposta2();

}
