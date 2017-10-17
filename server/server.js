const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('./db/mongoose.js').mongoose;
const Task = require('./models/Task.js').Task;
const User = require('./models/User.js').User;

const app = express();

app.use(bodyParser.json());

app.get('/tasks', (req, res) => {
  Task.find()
    .then((docs) => {
      res.send({
        tasks: docs,
      });
    }, (e) => {
      res.status(400).send(e);
    });
});

app.post('/tasks', (req, res) => {
  console.log(req.body);
  const newTask = new Task({
    title: req.body.title,
  });

  newTask.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
    // console.log('Unable to save task', e);
  });
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

module.exports = {
  app,
};
