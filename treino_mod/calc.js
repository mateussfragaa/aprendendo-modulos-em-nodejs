const prompt = require('prompt-sync')();

const n1 = Number(prompt("Digite um número: "));
const n2 = Number(prompt("Digite outro número: "));

const soma = require("./funcoes_calc/soma");
const subt = require("./funcoes_calc/subt");
const mult = require("./funcoes_calc/mult");
const divi = require("./funcoes_calc/divi");

console.log(soma(n1, n2));
console.log(subt(n1, n2));
console.log(mult(n1, n2));
console.log(divi(n1, n2));