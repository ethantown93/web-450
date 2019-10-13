
/*
============================================
; Author: Ethan Townsend
; Date:   8/12/2019
; Description: web-425
;===========================================
*/ 

const mongoose = require('mongoose');

const quizSchema = mongoose.Schema({
    score: Number,
    employeeId: String,
    quizId: Number,
    quizName: String,

},{ collection: 'quizresultsdatas' });


module.exports = mongoose.model('QuizResultsData', quizSchema);