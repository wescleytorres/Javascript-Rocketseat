// exportando e importando funções como modulos no Py

// para alterar o nome da funcao sem usar default , pode usar o AS e alterar o nome
// import {soma as somaFunction, sub} from './funcoes'

// na função default , é um aquivo com apenas uma class(função) e não precisa necessariamente ser chamada pelo nome. exemplo: (soma)
// import somaFunction from './soma'

// se tiver uma default + funcoes pode usar:
// import soma {sub} from './funcoes'

//importar todas funcoes no "modulo"
// import * as funcoes from '/.funcoes'

// console.log(somaFunction(1, 2))
// console.log(sub(4, 2))

//EXERCICIO 01
// import ClasseUsuario, {idade as IdadeUsuario} from './functions'


// ClasseUsuario.info()

// console.log(IdadeUsuario)

//MODULO 03
const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout (() => { resolve('OK')}, 2000)
})

// minhaPromise().then(response => ...)

//o ASYNC substitui o .then/.cath
// async function executaPromise() {
//     // outra função so sera executada depois q a acima terminar devido o AWAIT 
//     console.log( await minhaPromise())
//     console.log( await minhaPromise())
//     console.log( await minhaPromise())
//     // nao se usa AWAIT na frente de uma PROMISE, se nao estiver dentro de uma ASYNC
// }

//Pode usar ASYNC e AWAIT combinando com arrow functions
// const executaPromise = async () => {
//     console.log( await minhaPromise())
//     console.log( await minhaPromise())
//     console.log( await minhaPromise())
// }

// executaPromise()

import axios from 'axios'

class Api {
    static async getUserInfo(username) {
        // o TRY deve ser usado para se der erro, o CATCH respondera
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`)
            
            console.log(response)
        } catch (err) {
            console.warn('Erro na API')
        }
        
    }
}

Api.getUserInfo('wescleytorres')