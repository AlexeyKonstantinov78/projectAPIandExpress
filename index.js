import http from 'http';
import express from 'express';

const port = 8000;
const app = express();

// обработчик  midlwere
app.all('/hello', (req, res, next) => {
  console.log('привет all');
  next();
});

app.get('/hel+lo', (req, res) => {
  res.send('привет'); // после буквы l + расматривает не ограниченное количексво символов так и * 
});

// обработчик  midlwere 2
const cb = (req, res, next) => {
  console.log('cb1');
  next();
};

app.post('/hel?lo', cb, (req, res) => {
  res.send('привет POST'); // пройдет как hello так helo знак вопроса значит не обязательно
});

// ? - необязательно
// + и + любое количество символов
// regex так же принимается

app.get('/user/hello', cb, (req, res) => {
  res.send('привет POST'); // пройдет как hello так helo знак вопроса значит не обязательно
});

app.route('/user')
  .get('/hello', (req, res) => {
    res.send('привет get'); 
  })
  .post('/hello', (req, res) => {
    res.send('привет post'); 
  });

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});

