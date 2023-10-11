import express, { Request, Response } from 'express';
const router = express.Router();

import { getPlayers, getPlayerById, getStats } from '../controllers';

import { PlayerType } from '../../../database/model';

/**
 * Host Cloud Healthcheck
 */
router.get('/', async (req: Request, res: Response) => {
  res.status(200).json({
    body: `Hi king stranger from AWS Beanstalk`,
  });
});

/**
 * Task 1, sorted best players to the least
 */
router.get('/players', async (req: Request, res: Response) => {
  const data = await getPlayers();
  res.send(data);
});

/**
 * Task 2, return info  of specific player
 */
router.get(
  '/player/:id',
  async (req: Request, res: Response): Promise<PlayerType | void> => {
    const { id } = req.params;
    if (!id || !parseInt(id)) {
      res.status(400).json('Bad request, id is malformatted');
      return;
    }

    const player: PlayerType | boolean = await getPlayerById(parseInt(id));
    if (!player) {
      res.status(404).json({
        body: 'Player not found',
      });
      return;
    }

    res.status(200).json(player);
  },
);

/**
 * Task 3, return multiple stats
 */

router.get('/stats', async (req: Request, res: Response) => {
  // create type Stats
  // query Param ? averageIMC + medianHeight + topCountries
  // check each param, if 0 = send all data
  const data = await getStats();
  res.json(data);
});

export default router;
