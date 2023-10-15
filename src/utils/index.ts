import type { PlayerListType } from '../database/model';
import type { CountriesType } from './types';

export const getCountryWithHighestWinRatio = (database: PlayerListType) => {
  const countries = {} as CountriesType;

  database.players.forEach((player) => {
    const wins = player.data.last.filter((result) => result === 1).length;
    const totalGames = player.data.last.length;
    const winRatio = totalGames === 0 ? 0 : wins / totalGames;

    if (!countries[player.country.code]) {
      countries[player.country.code] = {
        country: player.country.code,
        winRatio: winRatio,
      };
    } else {
      countries[player.country.code].winRatio += winRatio;
    }
  });

  const countryWithHighestWinRatio = Object.values(countries).reduce(
    (a, b) => (a.winRatio > b.winRatio ? a : b),
    { country: 'No data', winRatio: 0 },
  );

  return countryWithHighestWinRatio;
};

export const getMedianHeight = (database: PlayerListType) => {
  const sortedHeights = database.players
    .map((player) => player.data.height)
    .sort((a, b) => a - b);
  const middle = Math.floor(sortedHeights.length / 2);
  const medianHeight =
    sortedHeights.length % 2 === 0
      ? (sortedHeights[middle - 1] + sortedHeights[middle]) / 2
      : sortedHeights[middle];
  return medianHeight;
};

export const getAverageIMC = (database: PlayerListType) => {
  const totalIMC = database.players.reduce((sum, player) => {
    const imc = player.data.weight / 1000 / ((player.data.height / 100) * 2);
    return sum + imc;
  }, 0);
  const averageIMC = totalIMC / database.players.length;
  return averageIMC;
};
