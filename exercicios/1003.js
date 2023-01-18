/*
Soma Simples
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Leia dois valores inteiros, no caso para variáveis A e B. A seguir, calcule a soma entre elas e atribua à variável SOMA. A seguir escrever o valor desta variável.

Entrada
O arquivo de entrada contém 2 valores inteiros.

Saída
Imprima a mensagem "SOMA" com todas as letras maiúsculas, com um espaço em branco antes e depois da igualdade seguido pelo valor correspondente à soma de A e B. Como todos os problemas, não esqueça de imprimir o fim de linha após o resultado, caso contrário, você receberá "Presentation Error".

*/
const input = require("fs").readFileSync("stdin", "utf8");

let valores = input.split('\n');

let A = parseInt(valores.shift());
let B = parseInt(valores.shift());

let soma = A + B;

console.log("SOMA = " + soma)