import express from 'express';

const userRouter = express.Router();

userRouter.post('/login', (req, res) => {
  res.send('login');
});

userRouter.post('/reggister', (req, res) => {
  res.send('register');
});

export { userRouter };
