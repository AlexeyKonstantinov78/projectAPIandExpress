import express from 'express';

const port = 8000;
const app = express();

// обработчик  midlwere
app.all('/hello', (req, res, next) => {
  console.log('привет all');
  next();
});

// отправка json
app.get('/hello', (req, res) => {
  res.status(201).send({ success: true }); 
});

app.get('/hello1', (req, res) => {
  res.status(201).json({ success: true });
});

//скачать файл
app.get('/download', (req, res) => {
  res.download('./text.txt', 'text.txt');
});

// перенаправление
app.get('/hello2', (req, res) => {
  res.redirect(301, '/hello');
});

// загаловки
app.get('/hello3', (req, res) => {
  res.set('Content-Type', 'text/plain; charset=utf-8');
  res.append('Warning', 'code'); // добавляем свои заголовки
  res.type('application/json'); // добавляем тип возвращаемых данных
  res.send('привет hello3');
});

// cokies
app.get('/hello4', (req, res) => {
  res.cookie('name', 'hello4'); // передаем куки
  res.clearCookie('token');
  res.send('привет hello3');
});

// обработка не существующего ссылки
app.get('/*', (req, res) => {  
  res.status(404).end();
});

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});

