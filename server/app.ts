import * as dotenv from 'dotenv';
import * as express from 'express';
import * as morgan from 'morgan';
import * as mongoose from 'mongoose';
import * as path from 'path';
import setRoutes from './routes';

const PORT = process.env.PORT || 8080;

const app = express();
dotenv.load({ path: '.env' });


app.use('/', express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let mongodbURI;
if (process.env.NODE_ENV === 'test') {
  mongodbURI = process.env.MONGODB_TEST_URI;
} else {
  mongodbURI = process.env.MONGODB_URI;
  app.use(morgan('dev'));
}

mongoose.Promise = global.Promise;
mongoose.connect(mongodbURI, { useNewUrlParser: true })
  .then(db => {
    console.log('Connected to MongoDB');

    setRoutes(app);

    app.get('/*', function(req, res) {
      res.sendFile(path.join(__dirname, '../index.html'));
    });

    if (!module.parent) {
      app.listen(PORT, () => console.log(`Angular Full Stack listening on port ${app.get('port')}`));
    }
  })
  .catch(err => console.error(err));

export { app };
