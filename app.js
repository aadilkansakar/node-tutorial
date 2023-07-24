import express from 'express';
const userRouter = require('./routes/users');

const app = express();

app.use('users', userRouter);