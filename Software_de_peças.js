let listapecas = 3;
let peso = 150;
let nompeca = "Cilindro Mestre";

if(peso >= 100){
    console.log("Peça tem peso suficiente para cadastrar");
}

if(listapecas >= 10){
    console.log("A lista esta cheia");
}

if (nompeca.length > 3) {
    console.log("Nome muito curto");
} else {
    console.log("Peça não será cadastrada");
}