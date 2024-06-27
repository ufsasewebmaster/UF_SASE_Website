import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import usersRouter from './routes/users.mjs';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
  origin: 'http://localhost:8000', // Frontend URL
  credentials: true, // Allow credentials
}));
app.use(express.json());

app.use('/api/users', usersRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
