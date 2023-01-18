const input = require("fs").readFileSync("stdin", "utf8");

let valores = input.split('\n');

let X = parseInt(valores.shift());
let Y = parseInt(valores.shift());

let prod = X * Y ;

console.log("PROD = " + prod)