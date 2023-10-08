import database, { PlayerList, Player } from "../../../database/model"
import {
  getAverage,
  getMedian,
  getRatio
} from "../../../utils"

export const getPlayers = async () : Promise<PlayerList> => {
  return database
}

export const getPlayerById = async(id: Number): Promise<Player | boolean> => {
  const player = database.players.find(player => player.id === id)
  if (!player) return false
  return player
}

export const getStats = async() => { // create Stats type
  
  // let listCountries : string[] = database.players.map((player) => player.country.code)
  // let listPLayerRatio : number[] = database.players.map((player) => getRatio(player.data.last))
  let listCountries : string[] = []
  let listPLayerRatio : number[] = []
  // let topRatio : number = 0
  // let topCountryIndex : number = 0
  
  // for (let i : number = 0; i < listPLayerRatio.length; i++) {
  //   if (listPLayerRatio[i] > topRatio) topCountryIndex = i
  // }
  // const topCountry = listCountries[topCountryIndex]
  
  
  let listIMC : number[] = []
  
  const playersList = database.players
  for (let player of playersList) {
    // if (listCountries.includes(player.country.code)) {
    //   // average on listRatio
    // } else {
    //   const ratio : number = getRatio(player.data.last)
    //   listRatio.push(ratio)
    // }
    // if(countryRatio > highestCountryRatio) {
    //   topCountry = player.country.code
    // }
    listCountries.push(player.country.code)
    listPLayerRatio.push(getRatio(player.data.last))
    listIMC.push((player.data.weight) / (player.data.height/100))
  }
  
  let topRatio : number = 0
  let topCountryIndex : number = 0
  for (let i : number = 0; i < listPLayerRatio.length; i++) {
    if (listPLayerRatio[i] > topRatio) topCountryIndex = i
  }
  const topCountry = listCountries[topCountryIndex]


  
  // - IMC moyen de tous les joueurs
  const averagePlayersIMC : number = getAverage(listIMC)
  
  // - La médiane de la taille des joueurs
  const heightList : number[] = database.players.map((player) => player.data.height/100)
  const medianPlayersHeight : number = getMedian(heightList) 

  const result = {
    topCountry,
    averagePlayersIMC,
    medianPlayersHeight
  }

  return result
}