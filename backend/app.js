const path = require('path');
const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const postRoutes = require('./routes/posts');
const userRoutes = require('./routes/user');
const labnotebookRoutes = require('./routes/labnotebook');
const app = express();

mongoose.connect('mongodb+srv://Jimmy:' + process.env.MONGO_ATLAS_PW + '@cluster0-y6kem.mongodb.net/node-angular?retryWrites=true') //should use config file or something since this will be up in git
  .then(() => {
    console.log('Connected to the DB!')
  })
  .catch(() => {
    console.log('Connection failed!')
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(process.env.BACKEND_IMAGES_URL, express.static(path.join(process.env.BACKEND_IMAGES_PATH)));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use('/api/posts', postRoutes);
app.use('/api/user', userRoutes);
app.use('/api/labnotebook', labnotebookRoutes);

module.exports = app;
