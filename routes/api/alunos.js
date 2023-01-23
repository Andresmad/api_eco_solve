const express = require('express');
const router = express.Router();
const alunosController = require('../../controllers/alunosController');
const verifyJWT = require('../../middleware/verifyJWT');

router.route('/')
    .get(verifyJWT, alunosController.getAllAlunos)
    .post(alunosController.createNewAluno)
    .put(alunosController.updateAluno)
    .delete(alunosController.deleteAluno);

router.route('/:id')
    .get(alunosController.getAluno);

module.exports = router;