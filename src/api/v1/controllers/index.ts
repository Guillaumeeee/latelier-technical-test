import database from '../../../database/model';
import {
  getAverageIMC,
  getMedianHeight,
  getCountryWithHighestWinRatio,
} from '../../../utils';

/**
 * types
 */
import type { PlayerListType, PlayerType } from '../../../database/model';
import type { CountryStatisticsType } from '../../../utils/types';

/**
 * Task 1
 * @returns
 */
export const getPlayers = async (): Promise<PlayerListType> => {
  return database;
};

/**
 * Task 2
 * @param id
 * @returns player
 */
export const getPlayerById = async (
  id: number,
): Promise<PlayerType | boolean> => {
  const player = database.players.find((player) => player.id === id);
  if (!player) return false;
  return player;
};

/**
 * Task 3
 * @returns statistics
 */
export const getStatistics = async () => {
  type StatisticsType = {
    countryWithHighestWinRatio: CountryStatisticsType;
    averageIMC: number;
    medianHeight: number;
  };

  const countryWithHighestWinRatio: CountryStatisticsType =
    getCountryWithHighestWinRatio(database);
  const averageIMC: number = getAverageIMC(database);
  const medianHeight: number = getMedianHeight(database);

  const statistics: StatisticsType = {
    countryWithHighestWinRatio,
    averageIMC,
    medianHeight,
  };

  return statistics;
};
