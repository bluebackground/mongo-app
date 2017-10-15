const {
  MongoClient,
  ObjectID,
} = require('mongodb');

const TASKS_DB_NAME = 'tasks';
const USERS_DB_NAME = 'Users';

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Sucessfully connected to MongoDB server');

  // Add the tasks.
  db.collection(TASKS_DB_NAME).insertOne({
    title: 'Eat Lunch',
    completed: false,
  }, (e, result) => {
    if (e) {
      return console.log(`Unable to insert task into ${TASKS_DB_NAME}`);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  db.collection(TASKS_DB_NAME).insertOne({
    title: 'Eat Lunch',
    completed: false,
  }, (e, result) => {
    if (e) {
      return console.log(`Unable to insert task into ${TASKS_DB_NAME}`);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  // deleteMany
  db.collection(TASKS_DB_NAME).deleteMany({
    title: 'Eat Lunch',
  }).then((result) => {
    console.log(result);
  });

  // deleteOne
  db.collection(TASKS_DB_NAME).deleteOne({
    title: 'Eat Lunch',
  }).then((result) => {
    console.log(result);
  });

  // findOneAndDelete

  db.close();
});
