const mongoose = require('mongoose')
const express = require('express')
const User = require('../db/models/User')

const router = express.Router();

router.get('/', (req, res) => {
  User.find().then(users => res.json(users))
    .catch(err => res.json(err))
})

router.post('/', (req, res) => {
  User.create(req.body)
    .then(user => { 
      res.json(user); 
      console.log(user)
    })
    .catch(err => res.status(400).json(err))
})

module.exports = router;

