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

  // db.collection(TASKS_DB_NAME).insertOne({
  //   title: 'Wash Dishes',
  //   completed: false,
  // }, (err, result) => {
  //   if (err) {
  //     return console.log(`Unable to insert task into ${TASKS_DB_NAME}`);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection(USERS_DB_NAME).insertOne({
  //   name: 'Jonathan',
  //   email: 'jon@me.com',
  //   dataBundle: 'randomStringId',
  // }, (err, result) => {
  //   if (err) {
  //     return console.log(`Unable to insert user into ${USERS_DB_NAME}`);
  //   }
  //   // console.log(JSON.stringify(result.ops, undefined, 2));
  //   console.log(result.ops[0]._id.getTimestamp());
  // });


  db.close();
});
