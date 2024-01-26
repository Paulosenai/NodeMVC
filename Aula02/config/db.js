//Conexão com o Banco de Dados
const mysql = require("mysql2/promise");

//criar a string de conexão
const client = mysql.createPool({
    host: "localhost",
    port:3306,
    user: 'root',
    password: '',
    database: 'colaborador'
});

module.exports = client;