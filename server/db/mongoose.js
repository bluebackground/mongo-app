const mongoose = require('mongoose');

// const DB_URI = 'mongodb://localhost:27017/TodoApp';
const user = 'alpha0';
const pass = 'quasar';
const DB_URL = `mongodb://${user}:${pass}@ds133922.mlab.com:33922/udemy-mongo-app-db`;
/*
mongoose is maintaining this connection over time.
I don't need to have a callback function here.
Mongoose takes care of how things happen,
You don't have to micromanage the order in which database calls
are handled.
*/

/** Configure mongoose to use Promises
We will use promises instead of callbacks.
Promises weren't always built into the Javascript language.
Used to have to use packages called 'Bluebird'.
*/
mongoose.Promise = global.Promise;

mongoose.connect(DB_URL, {
  useMongoClient: true,
});

module.exports = {
  mongoose,
};
