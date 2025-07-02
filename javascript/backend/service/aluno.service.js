const AlunoModel = require("../model/aluno")

const alunos = require("../data/aluno")

class AlunoService {
  async listar() {
    return alunos
  }

  static cadastrarAluno({ nome, curso, ira }) {
    const id = alunos.length > 0 ? alunos[alunos.length - 1].id + 1 : 1;
    const aluno = new AlunoModel(id, nome, curso, parseFloat(ira))

    alunos.push(aluno)
    
    return aluno
  }

  static atualizarAluno(id, { nome, curso, ira }) {
    const index = alunos.findIndex(a => a.id === id)
    
    if (index === -1) return null

    alunos[index] = { id, nome, curso, ira: parseFloat(ira) }
    
    return alunos[index]
  }

  static removerAluno(id) {
    const index = alunos.findIndex(a => a.id === id)
    if (index === -1) return null;

    const removido = alunos.splice(index, 1)[0]
    return removido
  }

}

module.exports = AlunoService;