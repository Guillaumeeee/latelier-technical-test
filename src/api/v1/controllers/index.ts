import database, { PlayerList, Player } from "../../../database/model"
import {
  getAverage,
  getMedian,
  getRatio,
  getIMC
} from "../../../utils"

export const getPlayers = async () : Promise<PlayerList> => {
  return database
}

export const getPlayerById = async(id: Number): Promise<Player | boolean> => {
  const player = database.players.find(player => player.id === id)
  if (!player) return false
  return player
}

export const getStats = async() => { // TODO: create Stats type

  // Populate diverse list
  let listCountries : string[] = []
  let listPlayerRatio : number[] = []
  let listIMC : number[] = []
  
  const playersList = database.players
  for (let player of playersList) {
    listCountries.push(player.country.code)
    listPlayerRatio.push(getRatio(player.data.last))
    listIMC.push(getIMC(player.data.weight, player.data.height))
  }

  // TODO: get average ratio of player if same country

  /**
   * Get highest winnning country by ratio
   */
  let topRatio : number = 0
  let topCountryIndex : number = 0
  for (let i : number = 0; i < listPlayerRatio.length; i++) {
    if (listPlayerRatio[i] > topRatio) topCountryIndex = i
  }
  const topCountry = listCountries[topCountryIndex]
  const topCountryRatio = listPlayerRatio[topCountryIndex]
  
  /**
   * Get average IMC of all players
   */
  const averagePlayersIMC : number = getAverage(listIMC)
  
  /**
   * get median height of all players
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