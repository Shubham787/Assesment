const mongoose = require('mongoose');

const QuestionSchema = mongoose.Schema({
    quesno: Number,
    question: String,
    options: [{ answer: String }, { answer: String }, { answer: String }, { answer: String }],
    selected: Number,
    correct: Number,
    correctflag:Boolean

});

module.exports = mongoose.model('Question', QuestionSchema);