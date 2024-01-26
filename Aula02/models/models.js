const connection = require("../config/db");

const employee = {

    getAllEmployes: async () =>{
        const [result] = await connection.query("SELECT * FROM cadastro")
        .catch(erro => console.log(erro));
        return result;
    },

    getEmployeeById: async (id) => {
        const [result] =  await connection.query("SELECT * FROM cadastro WHERE id=?")
        .catch(erro => console.log(erro));
        return result;
    },

    createNewEmployes: async(id,nome,sobrenome,idade) =>{
        const [result] = await connection.query("INSERT INTO cadastro values(?,?,?,?)",[id,nome,sobrenome,idade])
        .catch((erro) => console.log(erro));
        return result; 
    },

    updateEmployee: async(id,nome,sobrenome,idade) => {
        const [result] = await connection.query("UPDATE cadastro SET nome=?, sobrenome=?, WHERE id=?",[nome,sobrenome])
        .catch((erro) => console.log(erro))
        return result;
    },

    deleteEmployee: async(Id) =>{
        const [result] = await connection.query("DELETE FROM cadastro WHERE id=?", [id])
        .catch((erro) => console.log(erro))
        return result;
    }
};

module.exports = employee;