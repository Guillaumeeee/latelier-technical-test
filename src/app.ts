import express from 'express';
import v1Router from './api/v1/routes/index';
import helmet from 'helmet';

const app = express();
app.use(express.json());

/**
 * Security Headers
 */
app.use(helmet());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

/**
 * Routes
 */
app.use('/api/v1', v1Router);

export default app;
