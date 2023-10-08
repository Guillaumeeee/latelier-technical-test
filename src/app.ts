import express, { Request, Response } from "express";

const app = express()

app.use(express.json())

app.get('/api/v1/players', (req: Request, res: Response) => {res.send(`Bonjour l'Atelier !`)})

export default app