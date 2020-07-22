var inputElement = document.querySelector('#app input')
var btnELement = document.querySelector('#app button')


function checaIdade(idade) {
    return new Promise(function(maior, menor) {
        var anos = idade
        if (anos >= 18) {
            maior ('Maior de idade')
        } else {
            menor ('Menor de idade')
        }
    })
   }


btnELement.onclick = function idadeConf() {
    var text = inputElement.value
    console.log(text)

    checaIdade(text)
    .then(function(demaior) {
        setTimeout(function(){console.log(demaior)}, 2000)
    })
    .catch(function(demenor) {
        setTimeout(function(){console.log(demenor)}, 2000)
    })
}



    