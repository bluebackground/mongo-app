// Need to import mongoose.
// Doesn't have to be the mongoose object that we created in the db file.
// That means it's using the default package.
const mongoose = require('mongoose');

const Task = mongoose.model('Task', {
  title: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  // createdAt: {
  // MongoDB already has a built in created at function.
  // Don't need to create this.
  // },
  completedAt: {
    // unix timestamp

    // Temporarily create a number instead of date.
    type: Number,
    default: null,
  },
});

// Using promises.
// promise.then((db) => {
//   db.model('Task', {
//     title: {
//       type: String,
//     },
//     completed: {
//       type: Boolean,
//     },
//     completedAt: {
//       type: Number,
//     },
//   });
// });

module.exports = {
  Task,
};
