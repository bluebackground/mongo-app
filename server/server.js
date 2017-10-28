const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('./db/mongoose.js').mongoose;
const Task = require('./models/Task.js').Task;
const User = require('./models/User.js').User;
const {
  ObjectID,
} = require('mongodb');

const app = express();
const port = process.env.PORT || 3000;

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

app.get('/todos/:id/', (req, res) => {
  const {
    id,
  } = req.params;
  if (ObjectID.isValid(id)) {
    Task.findById(id)
      .then((doc) => {
        if (doc) {
          res.send(JSON.stringify(doc, undefined, 2));
        } else {
          res.send(JSON.stringify({
            message: 'Nothing found',
          }, undefined, 2));
        }
      })
      .catch((err) => {
        res.status(400);
        res.send(JSON.stringify({
          message: 'Server Error',
        }, undefined, 2));
      });
  } else {
    // Send back an error message
    res.send(JSON.stringify({
      message: 'Invalid Input',
    }, undefined, 2));
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports = {
  app,
};
