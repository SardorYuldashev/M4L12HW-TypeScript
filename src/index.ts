import express from 'express';
import db from './db';
import config from './shared/config';
import handleError from './shared/errors/handle';
import usersRoute from './modules/users/_api';
import listsRoute from './modules/lists/_api';
import todosRoute from './modules/todos/_api';

const app = express();

app.use(express.json());

app.use(usersRoute);
app.use(listsRoute);
app.use(todosRoute);

app.use(handleError);

db();
app.listen(config.port, () => {
  console.log(`http://localhost:${config.port}`);
});