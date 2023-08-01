import mongoose from 'mongoose';
import config from '../shared/config'

export default function () {
  return mongoose
    .connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`)
    .then(() => {
      console.log('DB ga ulandi.');
    })
    .catch((err) => {
      console.log('DB da xatolik: ', err);
    });
};