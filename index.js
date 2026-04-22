// Desafio: classificador de nível de herói.
// Deve ser utilizado:
//-Variáveis
//-Operadores
//-Laços de repetição
//-Estruturas de decisões

//Objetivo: Criar uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:
//Se XP for menor do que 1.000 = Ferro
//Se XP for entre 1.001 e 2.000 = Bronze
//Se XP for entre 2.001 e 5.000 = Prata
//Se XP for entre 5.001 e 7.000 = Ouro
//Se XP for entre 7.001 e 8.000 = Platina
//Se XP for entre 8.001 e 9.000 = Ascendente
//Se XP for entre 9.001 e 10.000= Imortal
//Se XP for maior ou igual a 10.001 = Radiante

// Ao fina, deve-se exiir uma mensagem:
// "O nome do herói é [NOME] e ele é do nível [NÍVEL]"

let nome = "John";
let XP = "";

if (XP <= 1000) {
    let nivel = "ferro";
} else if (XP >= 1001 && XP <= 2000) {
    let nivel = "bronze";
} else if (XP >= 2001 && XP <= 5000) {
    let nivel = "prata";
} else if (XP >= 5001 && XP <= 7000) {
    let nivel = "ouro";
} else if (XP >= 7001 && XP <= 8000) {
    let nivel = "platina";
} else if (XP >= 8001 && XP <= 9000) {
    let nivel = "ascendente";
} else if (XP >= 9001 && XP <= 10000) {
    let nivel = "imortal";
} else if (XP >= 10001) {
    let nivel = "radiante";
}

for (nivel

console.log("O nome do herói é " + nome + " e ele é do nível " + nivel + ".");