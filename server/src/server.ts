import bodyParser from 'body-parser';
import cors from 'cors';
import express, { json } from 'express';
import { routes } from './routes';

const app = express();
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.json());
app.use(cors());
app.use(json());
app.use(routes);

app.listen(process.env.PORT || 3333, ()=> console.log('Server is running...'))