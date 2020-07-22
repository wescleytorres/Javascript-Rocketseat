//chamando elementos do HTML
var listElement = document.querySelector('#app ul')
var inputElement = document.querySelector('#app input')
var buttonElement = document.querySelector('#app button')

var todos = JSON.parse(localStorage.getItem('list_todos')) || []

// criando função para lista
function renderTodos() {
    // para n repetir o item na lista sempre que chamar a função
    listElement.innerHTML = ''
    // esse for serve para percorrer todo
    for (todo of todos) {
        var todoElement = document.createElement('li')
        var todotext = document.createTextNode(todo)
        
        var linkElement = document.createElement('a')
        linkElement.setAttribute('href', '#')

        //indexOf vai numerar o todo
        var pos = todos.indexOf(todo)
        linkElement.setAttribute('onclick', 'deleteTodo('+pos+')')
        
        var linkText = document.createTextNode('Excluir')
        linkElement.appendChild(linkText)

        todoElement.appendChild(todotext)
        todoElement.appendChild(linkElement)
        listElement.appendChild(todoElement)
    }
}
// chamando a lista <ul>
renderTodos()

function addTodo() {
    // pegando valor do input
    var todoText = inputElement.value
    // inserindo ao final da lista <ul>
    todos.push(todoText)
    // pagando o txt escrito no input
    inputElement.value = ''
    // chamando a função para atualizar a lista
    renderTodos()
    saveToStorage()
}

buttonElement.onclick = addTodo

//ira deletar o todo
function deleteTodo(pos) {
    todos.splice(pos, 1)
    renderTodos()
    saveToStorage()
}


//salvar a lista mesmo dando F5
function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos))
}