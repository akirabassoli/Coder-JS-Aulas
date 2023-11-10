let tarefas = []

function adicionarTarefa() {
    const tarefa = document.getElementById('tarefaInput').value
    if (tarefa !== '') {
        tarefas.push(tarefa)
        document.getElementById('tarefaInput').value
        alert('Tarefa enviada com sucesso!')
    } else {
        alert('Por favor, insira uma tarefa válida!')
    }
    console.log(tarefas)
}

function visualizarTarefas() {
    const listaElemento = document.getElementById('listaTarefas')

    if (tarefas.length == 0) {
        alert('A lista de tarefas está vazia')
    } else {
        for (const tarefa of tarefas) {
            const liElement = document.createElement('li')
            liElement.textContent = tarefa
            listaElemento.appendChild(liElement)

        }
    }

}

function apagarTarefas() {
    tarefas = [];
    document.getElementById('listaTarefas').innerHTML = ''
    alert('Lista de tarefas limpa com sucesso!')

}