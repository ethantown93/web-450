const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const mongoose = require('mongoose');
const User = require('../models/users');

const db = "mongodb+srv://admin:Kellogs123@cluster0-rfwnt.mongodb.net/employees?retryWrites=true&w=majority"

mongoose.connect(db).then(() => {
    console.log('successfully connected to MongoDB')
}).catch(() => {
    console.log('connection failed.');
})

router.post('/users', (req, res, next) => {
    let userData = req.body;
    const user = new User(userData);
    user.save();
    res.status(201).json({
      message: user
    })
  })

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

  router.post('/login', (req, res, next) => {
    User.find({ id: req.body.id }).then(user => {
        console.log(user);
        if(!user) {
            return res.status(401).json({
                message: 'authentication failed. wow'
            })
        }
        const token = jwt.sign({userId: user.id}, 'this_is_my_secret_hash', {expiresIn: '4h'});
        res.status(200).json({
            message: 'authentication successful!',
            token: token
        })
    })
    .catch(err => {
        return res.status(401).json({
            message: 'authentication failed. bigtime.'
        })
    })
  })


  router.get('/dashboard', (req, res) => {
      let dashboard = [{
          content: 'welcome'
      }]
      res.json(dashboard);
  })


module.exports = router;