const clientModel = require("../models/models");

const clientController = {
    
    getAllClients: async (res,res) => {
        try{
            const client = await clientModel.getAllEmployes()
            res.status(200).json(client)
        }
        catch(erro){
            res.status(500).json({msg:"Erro ao obter a lista de colaboradores"})
        }
    },

    getById: async (req,res) => {
        try{
            const sql = await clientController.getById(req.params.id)

            if (sql.length > 0) {
                res.status(200).json(sql)
            }
            else{
                res.status(404).json({msg:'Colaborador não encontrado'})
            }
        }
        catch(erro) {
            if (erro) {
                res.status(500).json({msg:'Erro no servidor'+erro})
            }
        }
    },

    updateEmployde: async (req,res) => {
        const {nome,sobrenome} = req.body;

        try{
            const sql = await clientController.getById(req.params.id)

            if (sql.length) {
                await clientController.updateEmployde(nome,sobrenome,id)
                res.status(200).json({msg:"Atualizado com sucesso"})
            }
            else{
                res.status(401).json({msg:"O ID não existe na base de dados"})
            }
        }
        catch(erro){
            if (erro) {
                res.status(500).json({msg:"Erro no servidor"+erro})
            }
        }
    },

    deleteEmployes: async(req,res) => {
        try{
            const sql = await clientController.getById(req.params.id)

            if (sql.length > 0) {
                await clientController.deleteEmployes(req.params.id);
                res.status(200).send('Deletado com Sucesso')
            }
            else{
                res.status(400).json({msg:"O ID não existe no banco de dados"})
            }
        }
        catch(erro){
            if (erro) {
                res.status(500).json({msg:"Erro no servidor"+erro})
            }
        }
    }
}

module.exports = clientController;