const express = require('express');
const morgan = require('morgan');

const authRouter = require('./routes/authentication-route');
const todoRouter = require('./routes/todo-route');

const notFound = require('./middlewares/not-found');
const errorHandler = require('./middlewares/error-handler');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/todos', todoRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
