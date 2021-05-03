import app from '../lib/app.js';
import supertest from 'supertest';
const request = supertest(app);

// If a GET reqest is made to /api/cats
// does the server respond with status of 200
// and body matching the cats data?
it('GET /api/creatures', async () => {
  const expected = [
    {
      url:
        'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
      title: 'UniWhal',
      description: 'A unicorn and a narwhal nuzzling their horns',
      keyword: 'narwhal',
      horns: 1
    },
    {
      url:
        'https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80',
      title: 'Rhino Family',
      description: 'Mother (or father) rhino with two babies',
      keyword: 'rhino',
      horns: 2
    }
  ];

  const response = await request.get('/api/creatures');

  expect(response.status).toBe(200); // 200 = OK
  expect(response.body).toEqual(expected);

});