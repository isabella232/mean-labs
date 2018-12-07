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

exports.getNote = (req, res, next) => {
  LabNote.findById(req.params.id).then(note => {
    if(note) {
      res.status(200).json(note);
    }
    else {
      res.status(404).json({message: 'Note not found!'});
    }
  });
};

exports.getNextNote = (req, res, next) => {
  LabNote.find({_id: {$gt: req.params.id}}).sort({_id: 1 }).limit(2).then(note => {
    if(note.length > 0) {
      res.status(200).json(note);
    }
    else if(note.length === 0) {
      res.status(200).json({message: 'No next note found, this is the last note!'});
    }
    else {
      res.status(404).json({message: 'Note not found!'});
    }
  });
};

exports.getPreviousNote = (req, res, next) => {
  LabNote.find({_id: {$lt: req.params.id}}).sort({_id: -1 }).limit(2).then(note => {
    if(note.length > 0) {
      res.status(200).json(note);
    }
    else if(note.length === 0) {
      res.status(200).json({message: 'No previous note found, this is the first note!'});
    }
    else {
      res.status(404).json({message: 'Note not found!'});
    }
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

exports.updateNote = (req, res, next) => {
  const note = new LabNote({
  _id: req.body.id,
  title: req.body.title,
  content: req.body.content
  });

  LabNote.updateOne({ _id: req.params.id}, note).then( result => {
    if(result.nModified > 0) {
      console.log('Sucess update on: ' + note);
      res.status(200).json({ message: "Update successful!" });
    } else {
      console.log('Not authorized update on: ' + note);
      res.status(401).json({ message: 'Not authorized!' })
    }
  })
  .catch(error => {
    res.status(500).json({
      message: "Couldn't update notes!"
    })
  })
};
