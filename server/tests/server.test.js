const expect = require('expect');
const request = require('supertest');

const app = require('./../server.js').app;
const Task = require('./../models/Task.js').Task;

const TaskStore = [{
  title: 'First test task',
}, {
  title: 'Second test task',
}];

beforeEach((done) => {
  Task.remove({}).then(() => Task.insertMany(TaskStore)).then(() => done());
});

describe('POST /tasks', () => {
  it('should create a new task', (done) => {
    const text = 'Test text';

    request(app)
      .post('/tasks')
      .send({
        title: text,
      })
      .expect(200)
      .expect((res) => {
        expect(res.body.title).toBe(text);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Task.find({
          title: text,
        }).then((tasks) => {
          expect(tasks.length).toBe(1);
          expect(tasks[0].title).toBe(text);
          done();
        }).catch(e => done(e));
      });
  });

  it('should not create todo with invalid body data', (done) => {
    request(app)
      .post('/tasks')
      .send()
      .expect(400)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        Task.find().then((tasks) => {
          expect(tasks.length).toBe(2);
          done();
        }).catch(e => done(e));
      });
  });
});

describe('GET /tasks', () => {
  it('should get all tasks', (done) => {
    request(app)
      .get('/tasks')
      .expect(200)
      .expect((res) => {
        expect(res.body.tasks.length).toBe(2);
      })
      .end(done);
  });
});
