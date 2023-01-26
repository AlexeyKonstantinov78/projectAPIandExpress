import http from 'http';
import express from 'express';

const port = 8000;
const app = express();

app.get('/hello', (req, res) => {
  res.send('привет');
});

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});

