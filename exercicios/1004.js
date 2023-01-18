/*
Produto Simples
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
Leia dois valores inteiros. A seguir, calcule o produto entre estes dois valores e atribua esta operação à variável PROD. A seguir mostre a variável PROD com mensagem correspondente.   

Entrada
O arquivo de entrada contém 2 valores inteiros.

Saída
Imprima a mensagem "PROD" e a variável PROD conforme exemplo abaixo, com um espaço em branco antes e depois da igualdade. Não esqueça de imprimir o fim de linha após o produto, caso contrário seu programa apresentará a mensagem: “Presentation Error”.
*/

const input = require("fs").readFileSync("stdin", "utf8");

let valores = input.split('\n');

let X = parseInt(valores.shift());
let Y = parseInt(valores.shift());

let prod = X * Y ;

console.log("PROD = " + prod)