const request = require('supertest');
const app = require('../server/app.js');

describe('GET /users', function() {
  it('return list of users', function() {
    return request(app)
      .get('/users')
      .expect(200)
      .expect('Content-Type',/json/)
      .expect('[{"id":1,"name":"Jane","age":26},{"id":2,"name":"Tom","age":28},{"id":3,"name":"Pedro","age":24}]')
  })
})