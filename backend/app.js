const express = require('express');
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) =>
{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  next();
});

app.post('/api/posts', (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: 'All done'
  });
});

app.use('/api/posts', (req, res, next) => {
  const posts = [
    {id: 'fadf12421l', title: 'First server-sidepost', content: 'comes from server'},
    {id: 'fadf12421k', title: '2nd server-sidepost', content: 'comes from server as well'}
  ];
  return res.status(200).json({
    message : 'Fetched posts sucess!',
    posts: posts
  });
});

module.exports = app;
