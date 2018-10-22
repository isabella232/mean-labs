const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

const router = express.Router();

router.post('/signup', (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then(hash => {
    const user = new User({
      email: req.body.email,
      password: hash
    });
    user
      .save()
      .then(result => {
      res.status(201).json({
        message: "User created",
        result: result
      });
    })
    .catch(err => {
      res.status(500).json({
        error:err
      })
    });
  });
});

router.post('/login', (req, res, next) => {
  let fetchedUser;
  console.log('Attempting login: ' + req.body.email);
      // return res.status(200).json({
      // message: "Found one!"
      // });
  User.findOne({email: req.body.email})
    .then(user => {
      if(!user) {
        return res.status(401).json({
          message: 'Auth failed'
        })
      }
      fetchedUser = user;
      return bcrypt.compare(req.body.password, user.password);
    })
    .then(result => {
      if(!result) {
        res.status(401).json({
          message: 'Auth failed'
        });
      }
      const token = jwt.sign({email: fetchedUser.email, userId: fetchedUser._id},
         'this_should_be_moved_to_config_or_sumthin',
         { expiresIn:'1h'});

      res.status(200).json({
        token: token,
        message: "Found one! Pass is: " + req.body.password + ", result was: " + token
      });
    })
    .catch(err => {
      return releaseEvents.status(401).json({
        message: 'Auth failed' + err
      })
    })
});


module.exports = router;
