import express, { Request, Response } from "express";
const router = express.Router();

/**
 * Task 1, sorted best players to the least
 */
router.get('/players', async (req: Request, res: Response) => {
  // getPlayers()
  // res.send(data)
  res.send(`Hello L'Atelier !`)
})

/**
 * Task 2, return info  of specific player
 */

router.get('/player/:id', async (req: Request, res: Response) => {
  const { id } = req.params
  // check id: exist + number: return KO/OK
  // getPlayerById: return KO/OK
  // res.send(data)
  res.send(`Hello L'Atelier !`)
})

/**
 * Task 3, return multiple stats
 */

router.get('/stats', async (req: Request, res: Response) => {
  // query Param ? averageIMC + medianHeight + topCountries
    // check each param, if 0 = send all data
  // getStats
  // res.send(data)
  res.send(`Hello L'Atelier !`)
})

export default router;