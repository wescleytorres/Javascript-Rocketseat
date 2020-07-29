// voce esta solicitando a aplicação ouvir a porta 3001 do navegador
//criando primeira estrutura
const express = require('express')

const app = express()

//criando primeira rota
app.get('/', (req, res) => {
// o '/' significa HOME
// o REQ vai servir para passar as informações desssa requisição: parametro, corpo da requisição, cabeçalho, o usuario, autenticação (se esta ou não esta), tudo e mais no REQ
// o RES estaram as respostas para o usuario
    res.send('Hello World!!!')

})
app.listen(3001)


// as devDependencies são servi enquanto estamos em desenvolvimento, o nodemon vai ajudar em sempre dar restart no server enquanto desenvolvemos