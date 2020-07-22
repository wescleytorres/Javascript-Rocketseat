// chamando input e botao para Users GITHUB
var inputElement2 = document.querySelectorAll('#app input')[1]
var btnElement2 = document.querySelectorAll('#app button')[1]
var listElement = document.querySelector('#app ul')
var linkElement = document.querySelector('#git p')

btnElement2.onclick = function() {    
    var text = inputElement2.value
        inputElement2.value = ''
        listElement.innerHTML = ''
        linkElement.innerHTML = ''

    // Chama api do github usando esse lindo do AXIOS
    axios.get('https://api.github.com/users/'+text+'/repos')
        // se tudo der certo
        .then(function(response) {
            GitHub(text)
            var listElement = document.getElementById('lista').innerHTML                        
            let iterable = response.data
            for (entry of iterable) {
                listElement = listElement + "<li>"+entry['name']+"</li>"
            }
            document.getElementById('lista').innerHTML = listElement
            
        })
        
        // se der errado
        .catch(function() {
            var listElement = document.getElementById('lista').innerHTML
                listElement = listElement + "<li>"+'ERRO 404 - NO FOUND'+"</li>"
            document.getElementById('lista').innerHTML = listElement        
        })

}
function GitHub(msg) {
        
    var linkElement = document.querySelector('#git p')
    var textElement = document.createTextNode('Repositorio de '+msg)
    linkElement.appendChild(textElement)
    var containerElement = document.querySelector('#git')
    containerElement.appendChild(linkElement)
}
