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

exports.getNotes = (req, res, next) => {
  const pageSize = +req.query.pagesize;
  const currentPage = +req.query.page;
  const notesQuery = LabNote.find();
  let fetchedNotes;
  if(pageSize && currentPage) {
    notesQuery
    .skip(pageSize * (currentPage - 1))
    .limit(pageSize);
  }

  notesQuery.then(documents => {
    fetchedNotes = documents;
    return LabNote.countDocuments()
  }).then(count => {
    console.log('Check4 count: ' + count);
    res.status(200).json({
      message : 'Fetched notes sucess!',
      notes: fetchedNotes,
      maxNotes: count
    });
  })
  .catch(error => {
    res.status(500).json({
      message: "Fetching notes failed!",
      error: error
    })
  });
};
