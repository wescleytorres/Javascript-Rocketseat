"use strict";

/* OBJ USANDO YARN
// Objeto Pai
class List {
    constructor() {
        this.data = []
    }

    add(data) {
        this.data.push(data)
        console.log(this.data)
    }
}

//Objeto herança 'filho' com variaçoes
class TodoList extends List {
    constructor() {
       super()
       
       this.usuario = 'Jean'
    }

    mostraUsuario() {
        console.log(this.usuario)
    }

}

var MinhaLista = new TodoList()

document.getElementById('novotodo').onclick = function() {
    MinhaLista.add('Novo todo')
}

MinhaLista.mostraUsuario()

// metodo Static , ja lhe devolve um retorno rapido
class Matematica {
    static soma(a, b) {
        return a + b
    }
}

console.log(Matematica.soma(1, 2))*/
// const é como uma Tupla no Py: não pode ser alterada mas pode ter multação 

/*const usuario = {nome: 'Jean'}

usuario.nome = 'Cleiton'

console.log(usuario)*/
// o 'let' voce pode usar uma variavel não global

/*function teste(x) {
    let y = 2
    if (x > 5) {
        console.log(x, y)
    }
}

teste(10)*/
var arr = [1, 3, 4, 5, 8, 9]; // o metodo MAP passa por cada item do vetor (como um FOR/WHILE) possivel chamar o INDEX tbm

var newArr = arr.map(function (item, index) {
  return item + index; // item = 1, 3, 4, 5, 8, 9
  //index = 0, 1, 2, 3, 4, 5
});
console.log(newArr);
var sum = arr.reduce(function (total, next) {
  return total + next; //primeira rodada: total = 0 next = 1
  //segunda rodada: total = 1 next = 3
  //terceira rodada: total = 4 next = 4
  //quart rodada: total = 8 next = 5... NO FINAL ME RETORNA O RESULTADO
});
console.log(sum); // o metodo FILTER vai retornar os itens True, conforme oq eu solicitar (exemp. retornar so num pares do vetor)

var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(filter); //o FIND vai verificar dentro do vetor se contem o elemento solicitado (como um IF),  e retorna o resultado

var find = arr.find(function (item) {
  return item === 4;
});
console.log(find);
