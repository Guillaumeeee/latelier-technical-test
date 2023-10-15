import database, { PlayerListType, PlayerType } from '../../../database/model';
import { getAverageIMC, getMedianHeight, getCountryWithHighestWinRatio } from '../../../utils';
import type { CountryStatisticsType } from '../../../utils';

export const getPlayers = async (): Promise<PlayerListType> => {
  return database;
};

export const getPlayerById = async (
  id: number,
): Promise<PlayerType | boolean> => {
  const player = database.players.find((player) => player.id === id);
  if (!player) return false;
  return player;
};

/**
 * Rework task 3
 * @returns statistics
 */
export const getStatistics = async () => {

  type StatisticsType = {
    countryWithHighestWinRatio: CountryStatisticsType;
    averageIMC: number;
    medianHeight: number;
  };

  const countryWithHighestWinRatio : CountryStatisticsType = getCountryWithHighestWinRatio(database);
  const averageIMC : number = getAverageIMC(database);
  const medianHeight : number  = getMedianHeight(database);

  const statistics: StatisticsType = {
    countryWithHighestWinRatio,
    averageIMC,
    medianHeight,
  };

  return statistics;
};
