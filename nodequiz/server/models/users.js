
/*
============================================
; Author: Ethan Townsend
; Date:   8/12/2019
; Description: web-425
;===========================================
*/ 

const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    id: { type: String, required: true},
    firstName: { type: String, required: false },
    lastName: { type: String, required: false },
}, { collection: 'users'});

module.exports = mongoose.model('User', userSchema);