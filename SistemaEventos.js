// Sistema de cadastro para eventos

//Inicio
console.log("Olá, bem-vindo");

//informando nome
var primeiro =  prompt ("Qual o nome do evento?");
console.log (primeiro);

//informando data
var segundo = prompt ("qual a data do evento?");
console.log(segundo);

if (segundo => 01){
console.log("Data do evento escolhida")
} else {
    console.log("Data indisponivel")
};

//Inserindo dados do cliente

var terceiro = prompt ("qual seu nome?");
console.log(terceiro);
var quarto = prompt ("qual sua idade?");
console.log(quarto);

if (quarto => 18){
    console.log("Maior de idade, registrado")
} else {
    console.log("Menor de idade, não permitido")
};

// informando número de participantes

var quinto = prompt ("Qual o número de participantes?");
console.log(quinto);

if (quinto > 100){
    console.log("Número máximo é de 100 pessoas")
} else {
    console.log ("Evento registrado")
}

//Fim, Sistema de Eventos criado