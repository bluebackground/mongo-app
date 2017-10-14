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

  // db.collection(TASKS_DB_NAME).find({
  //   completed: false,
  // }).toArray().then((docs) => {
  //   console.log('tasks');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (e) => {
  //   console.log('Unable to fetch tasks', e);
  // });

  // db.collection(TASKS_DB_NAME).find({
  //   completed: false,
  // }).count().then((count) => {
  //   console.log(`Tasks Count: ${count}`);
  // }, (e) => {
  //   console.log('Unable to fetch tasks count', e);
  // });

  db.collection(USERS_DB_NAME).find({
    name: 'Jonathan',
  }).toArray().then((docs) => {
    console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (e) => {
    console.log('Unable to fetch tasks', e);
  });

  db.close();
});
