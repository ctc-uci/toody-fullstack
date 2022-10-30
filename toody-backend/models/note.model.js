const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  date: String,
  text: String,
});
const Note = mongoose.model('Note', noteSchema);

module.exports = Note;