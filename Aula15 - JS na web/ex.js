let produtos = document.getElementById('listaProdutos')
let resultado = []

for (const produto of produtos.children) {
    resultado.push(produto.innerText)
}

console.log(resultado)

console.log('---------')

let paragrafo = document.createElement('p')
paragrafo.innerHTML = '<h2>Olá, Mundo!</h2>'

document.body.append(paragrafo)

//Eliminar elementos

let paises = document.getElementsByClassName('paises')
paises[0].remove() // vai remover o primeiro item do array


//Obter dados do input

document.getElementById('nome').value = 'Akira'
document.getElementById('idade').value = 20

//-----------------------
console.log('---------')

//Obtemos o nó em que acrescentaremos os novos elementos
let pai = document.getElementById("pessoas");

//Array com a informação a ser acrescentada
let pessoas = ["HOMER", "MARGE", "BART", "LISA", "MAGGIE"];

//Iteramos o array com for...of
for (const pessoa of pessoas) {
    //Criamos um nó <li> e acrescentamos ao pai em cada ciclo
    let li = document.createElement("li");
    li.innerHTML = pessoa;
    pai.append(li);
}

//remova a lista não ordenada criada anteriormente

pai.remove()

//ordenar o array de pessoas
pessoas.sort()

//criar uma nova lista ol

pai = document.createElement('ol')

for (const pessoa of pessoas) {
    let li = document.createElement('li');
    li.innerHTML = pessoa;
    pai.append(li);
}

document.body.appendChild(pai)

//-----------------------
console.log('---------')
//Exercício


//Declare um array para armazenar as tarefas
//adicione um input para o usuário inserir o texto
//adicione um botao enviar que ao ser clicado insere no array o novo item
//adicione um botao visualizar para exibir todos os itens da lista na tela
//adicione um botao limpar para apagar todos os itens da lista

let tarefas = [];

//adicione um input para o usuário inserir o texto, add no HTML tb
let input = document.getElementById('inputUsuario')

//adicione um botao enviar que ao ser clicado insere no array o novo item
let botaoEnviar = document.getElementById('botaoEnviar')

botaoEnviar.onclick = () => {
    tarefas.push(input.value)

}

console.log(tarefas)

//adicione um botao visualizar para exibir todos os itens da lista na tela

let botaoVisualizar = document.getElementById('botaoVisualizar')

botaoVisualizar.onclick = () => {
    let papi = document.getElementById('listaTarefas')

    for (const tarefa of tarefas) {
        let li = document.createElement('li');
        li.innerHTML = tarefa;
        papi.append(li);
    }
    document.body.appendChild(papi)
}

//adicione um botao limpar para apagar todos os itens da lista

let botaoApagar = document.getElementById('botaoApagar')

botaoApagar.onclick = () => {
    tarefas = [];
}





