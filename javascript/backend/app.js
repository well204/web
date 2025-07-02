const express = require("express");

const alunosRoute = require("./routes/listar")

const app = express()

app.use(express.json())

app.use("/alunos", alunosRoute);

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000")
});