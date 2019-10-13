/*
============================================
; Author: Ethan Townsend
; Date:   8/12/2019
; Description: web-425
;===========================================
*/ 

const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const mongoose = require('mongoose');
const User = require('../models/users');
const Quiz = require('../models/quiz');
const QuizResultsData = require('../models/quiz-post');

const db = "mongodb+srv://admin:Kellogs123@cluster0-rfwnt.mongodb.net/employees?retryWrites=true&w=majority"

mongoose.connect(db).then(() => {
    console.log('successfully connected to MongoDB')
}).catch(() => {
    console.log('connection failed.');
})

// apit posting new user to database
router.post('/users', (req, res, next) => {
    let userData = req.body;
    const user = new User(userData);
    user.save();
    res.status(201).json({
      message: user
    })
  })

  // posts quiz results to the database
  router.post('/post', (req, res, next) => {
    let quizData = req.body
    console.log(quizData);
    const quiz = new QuizResultsData(quizData);
    quiz.save();
    res.status(201).json({
      message: quiz
    })
  })

  //retrieves quiz results from the database
  router.get('/summary/:employeeId', (req, res, next) => {
    QuizResultsData.find({'employeeId': req.params.employeeId}, (err, results) => {
        if(err) {
            console.log(err);
        } else 
            if(!results) {
                res.status(401).send('invalid id');
        } else {
            res.status(201).json({
                results: results
            })
        }
        console.log(results);
    })
  });
  // api retrieving specific user ID
router.get('/users/:id', (req, res, next) => {
    User.findOne({'id': req.params.id}, (err, users) => {
        if(err) {
            console.log(err);
        } else 
            if(!users) {
                res.status(401).send('invalid id');
        } else {
            res.status(201).json({
                users: users
            })
        }
        console.log(users);
    })
  }); 


// test api to get quiz with ID from database
  router.get('/quiz/:id', (req, res, next) => {
    Quiz.findOne({ 'quizId' : req.params.id}, (err, quiz) => {
      console.log(quiz);
        if(err) {
            console.log(err);
        } else 
            if(!quiz) {
                res.status(401).send('no quiz found.');
        } else {
            res.status(201).json({
              quiz
            })
        }
        console.log(quiz);
    })
  });
  
// login api
  router.post('/login', (req, res, next) => {
    let userData = req.body
    User.findOne({id: userData.id}, (err, user) => {
      if (err) {
        console.log(err)    
      } else {
        if (!user) {
          res.status(401).send('Invalid ID')
        } 
        else {
            let payload = { subject: user.id }
            let token = jwt.sign(payload, 'tokenKey', {expiresIn: '4h'})
          res.status(200).send({token,payload})
        }
      }
    })
  })

  router.get('/quiz', (req, res, next) => {
    Quiz.find({'quizId': req.body.quizId}, (err, res) => {
      if(err) {
        console.log(err)
      } else {
        if(!res) {
          console.log('no entries found')
        } else {
          console.log(res);
          res.status(200).send(res)
        }
      }
    })
  })
  




module.exports = router;