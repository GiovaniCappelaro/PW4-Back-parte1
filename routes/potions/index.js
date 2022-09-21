const router = require("express").Router();

/* /pocoes...  */

//listar todas
router.get("/", (req, res) => {
    res.send("listando todas as poções (página inicial delas com as operações da wiki)")
})

//cadastrar nova poção
router.post("/cadastrarPocao", (req, res) => {

})

//editar uma poção
router.put("/editarPocao/:id", (req, res) => {

})

//deletar uma poção especifica
router.delete("/deletarPocao/:id", (req, res) => {
    //chamar operação de DELETE no banco
})

//listar uma poção específica
router.get("/exibirPocao/:id", (req, res) => {

})

