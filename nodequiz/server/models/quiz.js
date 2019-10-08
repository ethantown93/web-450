
/*
============================================
; Author: Ethan Townsend
; Date:   8/12/2019
; Description: web-425
;===========================================
*/ 

const mongoose = require('mongoose');

const answerSchema = mongoose.Schema({
    id: Number ,
    answer_1: { type: String },
    answer_2: { type: String },
    answer43: { type: String },
    answer_1: { type: String },
})

const questionsSchema = mongoose.Schema({
    id: Number ,
    question: String ,
    correct_answer: Number,
    question_answers: [answerSchema]
})

const quizSchema = mongoose.Schema({
    quizId: String,
    quiz_name: String ,
    questions: [questionsSchema] 
}, { collection: 'questions_answers' });


module.exports = mongoose.model('Quiz', quizSchema);