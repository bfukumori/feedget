import bodyParser from 'body-parser';
import cors from 'cors';
import express, { json, urlencoded } from 'express';
import { routes } from './routes';

const app = express();
app.use(cors());
app.use(json({limit: '50mb'}));
app.use(routes);

app.listen(process.env.PORT || 3333, ()=> console.log('Server is running...'))