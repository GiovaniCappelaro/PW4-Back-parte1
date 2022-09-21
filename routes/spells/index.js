const router = require("express").Router();

//VER COMO VAMOS PEGAR OS DADOS

/* /feiticos... */

//listar todos
router.get("/", (req, res) => {
    res.send("todos os feitiços");
})

//cadastrar feitiço
router.post("/cadastrarFeitico", (req, res) => {
    res.send(`feitiço de nome ${req.body.nomeFeitco} e descrição ${req.body.descricao}`)
})

//Editar um feitiço
router.put("/editarFeitico/:id", (req, res) => {

})

//deletar um feitiço
router.delete("/deletarFeitico/:id", (req, res) => {

})

//Exibir um feitiço específico
router.get("/exibirFeitico/:id", (req, res) => {

})