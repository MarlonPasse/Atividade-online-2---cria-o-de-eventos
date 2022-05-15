// variável, seu valor pode ser alterado no decorrer do programa
let nomeEstudante = "Helena";
console.log(nomeEstudante);

// constante, seu valor não pode ser alterado
const nomeDoEstudante = "Helena";
console.log(nomeDoEstudante);

//Em outras linguagens, portanto, você encontrará algo semelhante a:
String: nomeEstudante = "Helena";



//Com o do:
let listaDeEstudantes = ["Helena", "Chico", "Mário"];
let quantidadeDeEstudantes = listaDeEstudantes.length;
let inicio = 0;

do {
	console.log(listaDeEstudantes[inicio]);
	inicio++;
} while (inicio < quantidadeDeEstudantes);

//------------------------------------------------//

//Com o while:
while (inicio < quantidadeDeEstudantes) {
	console.log(listaDeEstudantes[inicio]);
	inicio++;
}


for (let numero = 1; numero <= 10; numero++) {
	console.log(numero);
}


let listaDeEstudantes = ["Helena", "Chico", "Mário"];
let quantidadeDeEstudantes = listaDeEstudantes.length;

listaDeEstudantes.push("José");
console.log(listaDeEstudantes);


//impressão na horizontal 

let listaDeEstudantes = ["Helena", "Chico", "Mário"];
let quantidadeDeEstudantes = listaDeEstudantes.length;
if (quantidadeDeEstudantes < 5) {
	listaDeEstudantes.push("José");
}
console.log(listaDeEstudantes);

//não é possivel imprimir mais nomes 

let listaDeEstudantes = ["Helena", "Chico", "Mário", "José", "Maria"];
let quantidadeDeEstudantes = listaDeEstudantes.length;
if (quantidadeDeEstudantes < 5) {
	listaDeEstudantes.push("João");
	console.log(listaDeEstudantes);
} else {
	console.log("Não é possível inserir mais alunos nessa turma");
}


//exercicios feitos 

if (notas.length === 3) {
    console.log(notas[0]);
 }