const mongoose = require('mongoose');

const labNoteSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: Date, required: true}
});

module.exports = mongoose.model('LabNote', labNoteSchema);
