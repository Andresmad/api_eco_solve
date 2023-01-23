const data = {};
data.alunos = require('../model/users.json');

const getAllAlunos = (req, res) => {
    res.json(data.alunos);
}

const createNewAluno = (req, res) => {
    res.json({
        "firstname": req.body.firstname,
        "lastname": req.body.lastname
    });
}

const updateAluno = (req, res) => {
    res.json({
        "firstname": req.body.firstname,
        "lastname": req.body.lastname
    });
}

const deleteAluno = (req, res) => {
    res.json({"id": req.body.id})
}

const getAluno =(req, res) => {
    res.json({"id": req.params.id });
}

module.exports = {
    getAllAlunos,
    createNewAluno,
    updateAluno,
    deleteAluno,
    getAluno
}