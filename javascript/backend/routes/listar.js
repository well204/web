const express = require('express')
const AlunoService = require("../service/aluno.service")
const router = express.Router()

router.get("/listar", (request, response) => {
        const lista = AlunoService.listar();
        return response.status(200).json(lista);
    }
) 

router.post(
    "/cadastrar"
    ,
    (request, response) => {
        const { nome, curso, ira } = request.body;
  
        const aluno = AlunoService.cadastrar({ nome, curso, ira });
        response.status(201).json({ mensagem: "Aluno cadastrado", aluno });
    }
)

router.put(
    "/:id"
    ,
    (request, response) => {
        try {
            const id = parseInt(request.params.id)
            const {nome, curso, ira} = request.body

            const alunoAtualizado = AlunoService.atualizarAluno(id, { nome, curso, ira });

            response.json({ mensagem: "Aluno atualizado", aluno: alunoAtualizado });
        } catch(error) {
            console.error("Erro ao atualizar o aluno: ",error)
            return response.status(500).json(
                {
                    message: "Erro no server ao atualizar",
                    error: error.message
                }
            )
        }
    }
)

router.delete(
    "/:id"
    ,
    (request, response) => {
        try {
            const id = ParseInt (request.params.id)
            AlunoService.removerAluno(id)
            return response.json({message: `Aluno removido com o ${id} removido sucesso!`})
        } catch (error) {
            console.error("Erro ao remover o aluno: ",error)
            return response.status(500).json(
                {
                    message: "Erro ao remover o aluno",
                    error: error.message
                }
            )
        }
    }
)

module.exports = router