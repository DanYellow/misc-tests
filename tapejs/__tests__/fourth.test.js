const test    = require('tape');
const request = require('supertest');
const fetch   = require('node-fetch');

test('timing test 4', async function (t) {
  let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    // only proceed once promise is resolved
  let data = await response.json();
  delete data.body

  t.deepEqual(
    data,
    {
      userId: 1,
      id: 1,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit'
    },
    'ok'
  )

  t.end()
    // request.get('/user')
    //   .set('Accept', 'application/json')
    //   .expect('Content-Type', /json/)
    //   .expect(200, done);
}); 