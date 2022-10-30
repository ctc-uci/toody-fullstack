
const express = require('express');
const router = express.Router();

const Note = require('../models/note.model');

router.get('/', async (req, res) => {
  try {
    const notes = await Note.find({});
    res.json(notes);
  } catch (err) {
    console.log(err);
  }
});

router.post('/', async (req, res) => {
  const { date, text } = req.body;
  const newNote = { date, text };
  try {
    const result = await Note.create(newNote);
    if (result.nModified === 0) {
      res.status(400).json({ status: 'failed' });
    } else {
      res.status(200).json({ status: 'success', note: result._id });
    }
  } catch (err) {
    console.log(err);
  }
});

router.put('/', async (req, res) => {
  const { _id, date, text } = req.body;
  const updatedNote = { date, text };
  try {
    const result = await Note.findByIdAndUpdate({
      _id,
    }, {
      $set: updatedNote,
    }).setOptions({ sanitizeFilter: true });
    if (result.nModified === 0) {
      res.status(400).json({ status: 'failed' });
    } else {
      res.status(200).json({ status: 'success' });
    }
  } catch (err) {
    console.log(err);
  }
});

router.delete('/', async (req, res) => {
  const { _id } = req.body;
  try {
    const result = await Note.deleteOne({ _id });
    if (result.deletedCount === 0) {
      res.status(400).json({ status: 'failed' });
    } else {
      res.status(200).json({ status: 'success' });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;