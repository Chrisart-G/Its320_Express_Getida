import express, {json} from 'express';
import connectDB from './config/db.js';
import { router, router as  userRouter } from './routes/userRoutes.js';
import { router as quotesRoute } from './routes/quotesRoutes.js';
import { router as  Quotes } from './routes/quotesRoutes.js';
import { router as  getQuotes } from './routes/quotesRoutes.js';
import cors from 'cors';
// import {  as quotesRouter} from './routes/quotesRoutes.js'
const app = express();
const port = process.env.PORT || 3001;
app.use(cors())
app.use(json());
app.use('/api/users', userRouter);
app.use('/quotes', quotesRoute);
// app.use('/api/getQuotes', getQuotes);
connectDB();

app.get('/api/hello', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Server is active on port ${port}`);
});
