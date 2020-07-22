// XMLHttRequest é a funcionalidade para usar o AJAX e recuperar algo do servidor
/* var minhaPromise = function() {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest()
        xhr.open('GET', 'https://api.github.com/users/wescleytorres')
        xhr.send(null)

        // depois pesquisar onreadystatechange/readystate/responseText
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText))
                } else {
                    reject('Erro na requisição')
                }
            }
        }
    })
}
// esse metodo vai ajudar na resposta para promise
minhaPromise()
    // ao percorrer a função Promise vai retornar RESOLVE se der tudo certo
    .then(function(response) {
        console.log(response)
    })
    // se der erro , vai retornar REJECT
    .catch(function(error) {
        console.warn(error)
    })*/
// OUTRA FORMA MAIS SIMPLES DE USAR O XMLHTTP do JS
axios.get('https://api.github.com/users/wescleytorres')
    .then(function(response) {
       console.log(response)
    })
    .catch(function(error) {
        console.warn(error)
    })