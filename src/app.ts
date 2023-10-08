import express from "express";
import { json } from "stream/consumers";

const app = express()

app.use(express.json())

app.get('/api/v1/players', (req, res) => {res.send(`Bonjour l'Atelier !`)})

const port = process.env.port || 3000;
app.listen(port, () => console.log(`Server running on http://localhost:${port}/api/v1`));