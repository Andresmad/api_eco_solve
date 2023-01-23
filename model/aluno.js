const mongoose = require('mongooose');
const Schema = mongoose.Schema;

const alunosSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Aluno', alunosSchema);