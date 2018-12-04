const LabNote = require('../models/labnote.js');

exports.createLabNote = (req, res, next) => {

  const labnote = new LabNote({
    title: req.body.title,
    content: req.body.content,
    date: new Date(Date.now())
  });



  labnote.save().then(createdLabNote => {
    res.status(201).json({
      message: 'Successfully created your labnote!',
      labnote: {
        ...labnote
      }
    });
  })
  .catch(error => {
    res.status(500).json({
      message: "Creating labnote failed!" + req
    })
  });
};
