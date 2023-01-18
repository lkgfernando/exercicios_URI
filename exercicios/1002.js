/*
Área do Círculo
Adaptado por Neilor Tonin, URI  Brasil

Timelimit: 1
A fórmula para calcular a área de uma circunferência é: area = π . raio2. Considerando para este problema que π = 3.14159:

- Efetue o cálculo da área, elevando o valor de raio ao quadrado e multiplicando por π.

Entrada
A entrada contém um valor de ponto flutuante (dupla precisão), no caso, a variável raio.

Saída
Apresentar a mensagem "A=" seguido pelo valor da variável area, conforme exemplo abaixo, com 4 casas após o ponto decimal. Utilize variáveis de dupla precisão (double). Como todos os problemas, não esqueça de imprimir o fim de linha após o resultado, caso contrário, você receberá "Presentation Error".

*/

const input = require("fs").readFileSync("stdin", "utf8");

const PI = 3.14159;
let raio = parseFloat(input);

let area = PI * Math.pow(raio, 2);

console.log("A=" + area.toFixed(4));