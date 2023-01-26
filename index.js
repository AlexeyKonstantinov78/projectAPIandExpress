import http from 'http';
import express from 'express';

const port = 8000;
const app = express();

app.all('/hello', (req, res, next) => {
  console.log('привет all');
  next();
});

app.get('/hel+lo', (req, res) => {
  res.send('привет'); // после буквы l + расматривает не ограниченное количексво символов так и * 
});

app.post('/hel?lo', (req, res) => {
  res.send('привет POST'); // пройдет как hello так helo знак вопроса значит не обязательно
});

// ? - необязательно
// + и + любое количество символов
// regex так же принимается

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});

