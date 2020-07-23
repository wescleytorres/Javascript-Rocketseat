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

/*const arr = [1, 3, 4, 5, 8, 9]
// o metodo MAP passa por cada item do vetor (como um FOR/WHILE) possivel chamar o INDEX tbm
const newArr = arr.map(function(item, index) {
    return item + index
// item = 1, 3, 4, 5, 8, 9
//index = 0, 1, 2, 3, 4, 5
})

console.log(newArr)


const sum = arr.reduce(function(total, next) {
    return total + next
//primeira rodada: total = 0 next = 1
//segunda rodada: total = 1 next = 3
//terceira rodada: total = 4 next = 4
//quart rodada: total = 8 next = 5... NO FINAL ME RETORNA O RESULTADO
})

console.log(sum)

// o metodo FILTER vai retornar os itens True, conforme oq eu solicitar (exemp. retornar so num pares do vetor)
const filter = arr.filter(function(item) {
    return item % 2 === 0
})

console.log(filter)

//o FIND vai verificar dentro do vetor se contem o elemento solicitado (como um IF),  e retorna o resultado
const find = arr.find(function(item) {
    return item === 4
})

console.log(find)*/
// USANDO ARROW FUNCTION :
// voc pode compactar uma função exemplo:
// const arr = [1, 3, 4, 5, 6]
// aqui seria a função normal
// const newArr = arr.map(function(item) {
// return item * 2
//})
// aqui seria para diminuir o "function":
// const newArr = arr.map((item) => {
// return item * 2
//})
// quando a função recebe 1 parametro, pode remover o () por volta do parametro:
// const newArr = arr.map(item => {
// return item * 2
//})
// quando a função tem 1 parametro e apenas pedi um retorno, pode ficar assim:

/*const newArr = arr.map(item => item * 2)

console.log(newArr)

// para um objeto
const teste = () => ({Nome: 'Jean'})

console.log(teste())

//Valores padrões para função arrow
// igual no Py, deixa um valor caso nao escolha outro
const soma = (a = 6, b = 3) => a + b

console.log(soma(1))
console.log(soma())


//Desestruturação
const usuario = {
    nome: 'Jean',
    idade: 25,
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC'
    }
}
// Desestruturando eu posso chamar nome/idade/cidade sem precisar fazer varios console.log: usuario.
const {nome, idade, endereco: {cidade}} = usuario

console.log(nome)
console.log(idade)

// pode ser usado tbm nos parametros de funcoes:
function MostrarNome({nome}) {
    console.log(nome)
}

MostrarNome(usuario)*/
//REST

/*const usuario = {
    nome: 'Jean',
    idade: 25,
    empresa: 'ABC'
}
// com o REST voce pode desestruturar um objeto e alocar o resto em outra variavel
const {nome, ...resto} = usuario

console.log(nome)
console.log(resto)

// ...params é como *num em python.
// função usando arrow, desestruturação e Rest
function soma(...params) {
    //se eu usar apenas return params, ele vai me retornar uma array
    // pode isso, para uma soma usaria o .reduce
    return params.reduce((total, next) => total + next)
}


// SPREAD

// O SPREAD é com uma copia no Py [:]

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

const arr3 = [...arr1, ...arr2]

console.log(arr3)

// pode ser usado tbm para a troca de algum objeto. exemplo:

const usuario1 = {
    nome: 'Diego',
    idade: 23,
    empresa: 'Rocketseat'
}
// vai copiar todo obj usuario1 e alterar o "nome"
const usuario2 = { ...usuario1, nome: 'Jean'}

console.log(usuario2)*/
// TEMPLATE LITERALS
// para substituir a concatenação
var nome = 'Jean';
var idade = 25; //concatenando

console.log('Meu nome é ' + nome + ' e tenho ' + idade + ' anos'); //usando template

console.log("Meu nome \xE9 ".concat(nome, " e tenho ").concat(idade, " anos")); //OBJECT SHORT SYNTAX
//encusta a declaração de um objeto

var usuario = {
  // apenas informei q variavel puxaria para dentro do objeto
  nome: nome,
  idade: idade,
  empresa: 'ABC'
};
console.log(usuario);
