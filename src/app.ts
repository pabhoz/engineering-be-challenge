import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';

import routes from './api/routes';

dotenv.config();
const app = express();
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

console.time('API start time');
console.time('Time until error');
console.log('Starting DB connection.');
mongoose.connect('mongodb://mongo:27017/api');
const db = mongoose.connection;
db.on('error', (error) => {
  console.log('Error connecting to the DB, API cannot be initialized.', error);
  console.timeEnd('Time until error');
});
db.once('open', () => {
  console.log('Connection to DB successful, Starting the API');
  app.listen(process.env.PORT, () => {
    console.timeEnd('API start time');
    console.log(`API [${process.env.ENV}] is running at http://localhost:${process.env.PORT} ✅`);
  });
});
