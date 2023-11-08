console.log(document)
console.log(document.head)
console.log(document.body)

let div = document.getElementById('app')
console.log(div)

let paragrafo = document.getElementById('paragrafo1')
console.log(paragrafo)

console.log('--------------')

let containers = document.getElementsByTagName('div')
//aqui ele vai devolver um ARRAY, pois há mais de um DIV no corpo
console.log(containers[0])
console.log(containers[1])
console.log(containers[2])

console.log('--------------')
console.log('QUERY SELECTOR')

let paragrafo1 = document.querySelector('#paragrafo1')
console.log(paragrafo1)

console.log('--------------')
console.log('==>innerText')

let titulo = document.getElementById('titulo')
console.log(titulo.innerText)

//Modificando o conteúdo do elemento

titulo.innerText = 'Alterado pelo JS'
console.log(titulo.innerText)

console.log('--------------')
console.log('==>innerHTML')

let divVazia = document.getElementById('div_vazia')
div_vazia.innerHTML = '<h2> Código HTML pelo JS!</h2><p>tag p pelo JS!'
div_vazia.className = 'row'


console.log('--------------')
console.log('==>Event ')

//abaixo 3 formas de fazer o acionamento

//OPÇÃO1
let botao1 = document.getElementById('botao1')
//JS aguarda o clique do elemento e depois executa a ação
botao1.addEventListener('click', acaoClique)

function acaoClique() {
    alert('Resposta ao evento 1')
}

//OPÇÃO2
let botao2 = document.getElementById('botao2')

botao2.onclick = () => {
    alert('Resposta ao evento Opção 2')
}

//OPÇÃO3 (onclick no HTML)
function funcaoOpcao3() {
    alert("Resposta ao evento Opção 3")
}