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

  // Find one and update
  // db.collection(TASKS_DB_NAME).findOneAndUpdate({
  //   _id: new ObjectID('59e189fcf0494f51f7031020'),
  // }, {
  //   $set: {
  //     completed: true,
  //   },
  // }, {
  //   returnOriginal: false,
  // }).then((result) => {
  //   console.log(result);
  // });


  // Find user and update name
  db.collection(USERS_DB_NAME).findOneAndUpdate({
    name: 'Jonathan',
  }, {
    $set: {
      email: 'admin@jon.com',
    },
  }, {
    returnOriginal: false,
  }).then((result) => {
    console.log(result);
  });

  db.close();
});
