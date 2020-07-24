// //EXERCICIO 01
// class Usuario {
//     constructor(email, senha) {
//         this.email = email
//         this.senha = senha
//     }
//     isAdmin() {
//         return this.admin === true   
//     }
// }
// class Admin extends Usuario {
//     constructor(email, senha) {
//         super(email,senha)
//         this.admin = true
//     }
// }
// const User1 = new Usuario('abc@abc.com','senha123')
// const Adm1 = new Admin('abc@abc.com', 'senha123')
// console.log(User1.isAdmin())
// console.log(Adm1.isAdmin())
// //EXERCICIO 02
// const usuarios = [
//     { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
//     { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
//     { nome: 'Lucas', idade: 30, empresa: 'Facebook' }
// ]
// //2.1
// const map = usuarios.map(item => item['idade'])
// console.log(map)
// //2.2
// const filter = usuarios.filter(item => item['idade'] >= 18 && item['empresa'] === 'Rocketseat')
// console.log(filter)
// //2.3
// const find = usuarios.find(item => item['empresa'] === 'Google')
// console.log(find)
// //2.4
// const map2 = usuarios.map(function(item) {
//     item['idade'] = item['idade'] * 2
//     return item
// })
// const filter2 = map2.filter(function(item) {
//     return item['idade'] < 50
// })
// console.log(filter2)
// // EXERCICO 03
// // 3.1
// const arr = [1, 2, 3, 4, 5];
// // NORMAL
// /*const arr = [1, 2, 3, 4, 5];
// arr.map(function(item) {
//  return item + 10;
// });*/
// // ARROW FUNCTION
// const map3 = arr.map(item => item + 10)
// console.log(map3)
// // 3.2
// // Dica: Utilize uma constante pra function
// // const usuario = { nome: 'Diego', idade: 23 }
// // NORMAL
// /*function mostraIdade(usuario) {
//  return usuario.idade
// }
// console.log(mostraIdade(usuario))*/
// // ARROW FUNCTION
// const mostraIdade = () => ({ nome: 'Jean', idade: 25 })
// console.log(mostraIdade()['idade'])
// 3.3
// Dica: Utilize uma constante pra function
// Dica: const soma = (a = 6, b = 3) => a + b
// NORMAL
// const nome = "Jean";
//const idade = 25;

/*function mostraUsuario(nome = 'Diego', idade = 18) {
 return { nome, idade };
}
console.log(mostraUsuario(nome, idade))
console.log(mostraUsuario(nome))*/
// const mostraUsuario = (nome = 'Jean', idade = 18) => ({nome, idade})
// console.log(mostraUsuario(nome, idade))
// console.log(mostraUsuario(nome))
// 3.4
// NORMAL

/*const promise = function() {
    return new Promise(function(resolve, reject) {
    return resolve()
    })
}*/
// const promise = () => new Promise((resolve, reject) => resolve())
//EXERCICIO 04 - DESESTRUTURAÇÃO
//4.1
// const empresa = {
//     nome: 'Rocketseat',
//     endereco: {
//     cidade: 'Rio do Sul',
//     estado: 'SC',
//     }
// }
// const {nome, endereco: {cidade, estado}} = empresa
// console.log(nome); // Rocketseat
// console.log(cidade); // Rio do Sul
// console.log(estado); // SC
// //4.2
// const mostraInfo = ({nome, idade}) => (`${nome} tem ${idade} anos.`)
// console.log(mostraInfo({ nome: 'Diego', idade: 23 }))
// EXERCICIO 05
// 5.1
// const arr = [1, 2, 3, 4, 5, 6]
// const [x, ...y] = arr
// console.log(x)
// console.log(y)
// const soma = (...params) => params.reduce((total,next) => total + next)
// console.log(soma(1, 2, 3, 4, 5, 6))
// console.log(soma(1, 2))
// 5.2
// const usuario = {
//     nome: 'Diego',
//     idade: 23,
//     endereco: {
//     cidade: 'Rio do Sul',
//     uf: 'SC',
//     pais: 'Brasil',
//     }
// };
// const usuario2 = {...usuario, nome: 'Gabriel'}
// const usuario3 = {...usuario, endereco:{...usuario.endereco, cidade: 'Lontras'}}
// console.log(usuario2)
// console.log(usuario3)
// EXERCICIO 06
// const usuario = 'Diego';
// const idade = 23;
// console.log(`O usuário ${usuario} possui ${idade} anos`)
// const nome = 'Diego'
// const idade = 23
// const usuario = {
//  nome,
//  idade,
//  cidade: 'Rio do Sul',
// }
// console.log(usuario)
"use strict";
