// import dependencies
import express from 'express';
import cors from 'cors';

// make an express app
const app = express();

// allow our server to be called from any website
app.use(cors());

// example route to see if app is alive!
app.get('/hello', (req, res) => {
  // send back a short response
  res.send('Hello Worlds!');
});

app.get('/', (req, res) => {
  // send back a short response
  res.send('Hello Worlds!');
});

app.get('/api/creatures', (req,res) => {
  res.json([
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
  ]);
})

app.get('/api/creatures/:id', (req,res) => {
  res.json([0]);
})

export default app;