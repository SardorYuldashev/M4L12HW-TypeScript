import express from 'express';
import config from './shared/config';

const app = express();

app.get('/', (req, res) => {
  res.send("ok");
});

app.listen(config.port, () => {
  console.log(`http://localhost:${config.port}`);
});