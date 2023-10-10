import database, { PlayerList, Player } from "../../../database/model";
import {
  getAverage,
  getMedian,
  getRatio,
  getIMC
} from "../../../utils";

export const getPlayers = async () : Promise<PlayerList> => {
  return database
}

export const getPlayerById = async(id: number): Promise<Player | boolean> => {
  const player = database.players.find(player => player.id === id)
  if (!player) return false
  return player
}

export const getStats = async() => { // TODO: create Stats type

  // Populate diverse list
  const listCountries : string[] = []
  const listPlayerRatio : number[] = []
  const listIMC : number[] = []
  
  const playersList = database.players
  for (const player of playersList) {
    listCountries.push(player.country.code)
    listPlayerRatio.push(getRatio(player.data.last))
    listIMC.push(getIMC(player.data.weight, player.data.height))
  }

  /**
   * Get highest winnning country by ratio
   * 
   * TODO: get average ratio of player if same country
   */
  let topRatio : number = 0
  let topCountryIndex : number = 0
  for (let i : number = 0; i < listPlayerRatio.length; i++) {
    if (listPlayerRatio[i] > topRatio) {
      topCountryIndex = i
      topRatio = listPlayerRatio[i]
    }
  }
  const topCountry = listCountries[topCountryIndex]
  const topCountryRatio = listPlayerRatio[topCountryIndex]
  
  /**
   * Get average IMC of all players
   */
  const averagePlayersIMC : number = getAverage(listIMC)
  
  /**
   * Get median height of all players
   */
  const heightList : number[] = database.players.map((player) => player.data.height/100)
  const medianPlayersHeight : number = getMedian(heightList) 

  const result = {
    topCountry,
    topCountryRatio,
    averagePlayersIMC,
    medianPlayersHeight
  }

  return result
}