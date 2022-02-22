import express from 'express';
import data from './data.js';

const app = express();

app.use(function (req ,res, next) { //in order for the backend server to receive http requests from your front end server, you must set up the headers to allow access from either
                                    // all domains "*", or just from your front end server, which should be "localhost" on port 3000.
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});
app.get('/api/products', (req, res) => {
  res.send(data.products);
});
// so the slug that user enterd is shown
app.get('/api/products/slug/:slug', (req, res) => {
  //defined product and show product if it's avalable else show maessage product not found
  const product = data.products.find((x) => x.slug === req.params.slug);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
