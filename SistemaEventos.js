// Sistema de cadastro para eventos

//Inicio
console.log("Olá, bem-vindo");

//informando nome
let primeiro =  require ("Qual o nome do evento?");
console.log (primeiro);

//informando data
let segundo = require ("qual a data do evento?");
console.log(segundo);

if (segundo => 01){
console.log("Data do evento escolhida")
} else {
    console.log("Data indisponivel")
};

//Inserindo dados do cliente

let terceiro = require ("qual seu nome?");
console.log(terceiro);
let quarto = require ("qual sua idade?");
console.log(quarto);

if (quarto => 18){
    console.log("Maior de idade, registrado")
} else {
    console.log("Menor de idade, não permitido")
};

// informando número de participantes

let quinto = require ("Qual o número de participantes?");
console.log(quinto);

if (quinto > 100){
    console.log("Número máximo é de 100 pessoas")
} else {
    console.log ("Evento registrado")
}

console.log("Fim do programa")