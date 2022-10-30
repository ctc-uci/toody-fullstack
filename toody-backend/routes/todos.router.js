
const express = require('express');
const router = express.Router();

const Todo = require('../models/todo.model');

router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.json(todos);
  } catch (err) {
    console.log(err);
  }
});

router.post('/', async (req, res) => {
  const { text } = req.body;
  const newTodo = { text };
  try {
    const result = await Todo.create(newTodo);
    if (result.nModified === 0) {
      res.status(400).json({ status: 'failed' });
    } else {
      res.status(200).json({ status: 'success', todo: result._id });
    }
  } catch (err) {
    console.log(err);
  }
});

router.put('/', async (req, res) => {
  const { _id, text } = req.body;
  const updatedTodo = { text };
  try {
    const result = await Todo.findByIdAndUpdate({
      _id,
    }, {
      $set: updatedTodo,
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
    const result = await Todo.deleteOne({ _id });
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