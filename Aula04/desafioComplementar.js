var custo = parseInt(prompt("Digite o custo do produto"))
var margem = parseInt(prompt("Você digitou o valor " + custo + " para o custo.\nDigite a margem desejada"))

console.log("O custo digitado foi: " + custo)
console.log("A margem digitada foi: " + margem)


var calcular = (a, b) => a / (1 - (b / 100))


var resultado = calcular(custo, margem).toFixed(2)
console.log("O preço líquido será: " + resultado)

var aliquotaImposto = parseInt(prompt("O preço resultante será: " + resultado + "\nDigite a aliquota do imposto:"))
console.log("A aliquota digitada foi: " + aliquotaImposto)

var calcularFinal = (c, d) => c / (1 - (aliquotaImposto / 100))
var precoFinal = parseFloat(calcularFinal(resultado, aliquotaImposto)).toFixed(2)

console.log("O preço de venda será: " + precoFinal)
alert("O preço de venda será: " + precoFinal)