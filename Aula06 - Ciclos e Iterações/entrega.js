let entrada1 = prompt("Insira o primeiro valor")
let entrada2 = prompt("Insira o segundo valor")

while (entrada1 != "sair" && entrada2 != "sair") {
    var soma = parseInt(entrada1) + parseInt(entrada2)
    var media = (parseInt(entrada1) + parseInt(entrada2)) / 2



    alert("A soma dos valores é: " + soma + "\nA média dos valores é: " + media)
    entrada1 = prompt("Insira o primeiro valor")
    entrada2 = prompt("Insira o segundo valor")

}