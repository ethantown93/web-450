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
const Quiz = require('../models/quiz')

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
          res.status(200).send({token})
        }
      }
    })
  })

  router.get('/quiz', (req, res, next) => {
    Quiz.find({'quizId': req.body.quizId}, (err, quiz) => {
      if(err) {
        console.log(err)
      } else {
        if(!quiz) {
          console.log('no entries found')
        } else {
          console.log(quiz);
          res.status(200).send(quiz)
        }
      }
    })
  })


module.exports = router;