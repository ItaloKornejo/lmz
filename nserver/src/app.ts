import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';

dotenv.config();

const app = express();

app.set('port', process.env.PORT);

// middlewares
app.use(cors());
app.use(morgan(process.env.ENVIRONMENT!));
app.use(express.json());

// routes

export default app;