import express from 'express';
import { userRouter } from './users/users.js';

const port = 8000;
const app = express();

// обработчик  midlwere
app.all('/hello', (req, res, next) => {
  console.log('привет all');
  next();
});

app.use('/users', userRouter);

// обработка не существующего ссылки
app.get('/*', (req, res) => {  
  res.status(404).end();
});

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});

