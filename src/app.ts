import express, { Request, Response } from "express";
import v1Router from './api/v1/routes/index';

const app = express();

app.use(express.json());

/**
 * security middleware: ?
*/

/**
 * Routes
 */
app.use('/api/v1', v1Router);

export default app