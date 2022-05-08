import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { listItems, addItem } from './controllers';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/items', listItems);
app.post('/items', addItem);

export default app;
