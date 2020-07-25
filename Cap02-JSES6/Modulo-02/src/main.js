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
import ClasseUsuario, {idade as IdadeUsuario} from './functions'


ClasseUsuario.info()

console.log(IdadeUsuario)