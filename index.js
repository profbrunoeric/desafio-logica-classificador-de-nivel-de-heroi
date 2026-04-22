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
let XP = 4999;
let nivel = "";

//O laço de repetição vai rodar 3 vezes.
//i começa em 1 e enquanto ele for menor do que 3, ele vai rodar o código dentro do laço, e a cada vez que ele rodar, o valor de i vai aumentar em 1 (i++ é a mesma coisa que i = i + 1).
for (let i = 1; i <= 3; i++) {


if (XP <= 1000) {
    nivel = "ferro";
} else if (XP >= 1001 && XP <= 2000) {
    nivel = "bronze";
} else if (XP >= 2001 && XP <= 5000) {
    nivel = "prata";
} else if (XP >= 5001 && XP <= 7000) {
    nivel = "ouro";
} else if (XP >= 7001 && XP <= 8000) {
    nivel = "platina";
} else if (XP >= 8001 && XP <= 9000) {
    nivel = "ascendente";
} else if (XP >= 9001 && XP <= 10000) {
    nivel = "imortal";
} else if (XP >= 10001) {
    nivel = "radiante";
}

console.log("O nome do herói é " + nome + " e ele é do nível " + nivel + ".");

//Inseri o comando abaixo aqui, pois eu queria mostrar o processo de evolução do herói mostrando o nível que ele iniciou e como ele vai subindo de nível conforme ganha mais XP.
//A cada repetição o herói ganhará 500 XP.
    XP += 500;

    //A chave abaixo fecha o laço de repetição.
}