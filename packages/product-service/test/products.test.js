const request = require('supertest');
const app = require('../server/app.js');

describe('GET /products', function() {
  it('return list of products', function() {
    return request(app)
      .get('/products')
      .expect(200)
      .expect('Content-Type',/json/)
      .expect('[{"id":1,"name":"Television"},{"id":2,"name":"Radio"}]')
  })
})