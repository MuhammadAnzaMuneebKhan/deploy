/** @format */
require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/test', (req, res) => {
  res.send('Hello test!');
});
app.get('/pk', (req, res) => {
  res.send('pk fuck');
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
