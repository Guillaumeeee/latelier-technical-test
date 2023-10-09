import app from './app';

const port = process.env.port || 8080;
app.listen(port, () => console.log(`Server running on http://localhost:${port}/api/v1`));