import 'dotenv/config';
import express from 'express';
import path from 'path';
import cors from 'cors';

// Middleware
import logger from './middleware/logger.mjs';

// Routes
import usersRouter from './routes/users.mjs';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
  origin: 'http://localhost:8000', // Frontend URL
  credentials: true, // Allow credentials
}));

// Middleware
app.use(logger);
app.use(express.json());

// Routes
app.use('/api/users', usersRouter);

// Serve static files from the React app (if applicable)
// app.use(express.static(path.join(__dirname, 'client/build')));
app.use((req, res, next) => {
  res.status(404).json({ message: 'Page not found' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
