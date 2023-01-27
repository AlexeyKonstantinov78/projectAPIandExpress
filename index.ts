import express, { Request, Response, NextFunction } from 'express';
import { userRouter } from './users/users.js';

const port = 8000;
const app = express();

// обработчик для всех
app.use((req, res, next) => {
  console.log('время', Date.now());
  next();
});
// обработчик  midlwere
app.get('/hello', (req, res) => {
  res.end();
});

app.use('/users', userRouter);

// обработка не существующего ссылки
app.get('/*', (req, res) => {  
  res.status(404).end();
});

// обработчик ошибок
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err.message);
  res.status(500).send(err.message);
});

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});

