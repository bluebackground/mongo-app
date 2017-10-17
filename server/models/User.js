// Need to import mongoose.
// Doesn't have to be the mongoose object that we created in the db file.
// That means it's using the default package.
const mongoose = require('mongoose');

/** Create a model.
Q: Is that a schema?
Hm, this seems to create a constructor function.
I wonder what it does under the hood.
*/

const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
    // Require custom email validation.
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
});

module.exports = {
  User,
};
