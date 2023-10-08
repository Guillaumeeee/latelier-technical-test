import database, { PlayerList, Player } from "../../../database/model"

export const getPlayers = async () : Promise<PlayerList> => {
  return database
}

export const getPlayerById = async(id: Number): Promise<Player | boolean> => {
  const player = database.players.find(player => player.id === id)
  if (!player) return false
  return player
}

// getStats + query param ? 