import express from "express";
import v1Router from './api/v1/routes/index';
import helmet from "helmet";

const app = express();
app.use(express.json());

/**
 * Security Headers
*/
app.use(helmet());

/**
 * Routes
 */
app.use('/api/v1', v1Router);

export default app