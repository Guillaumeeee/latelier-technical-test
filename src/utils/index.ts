import { mean } from "lodash";

export const getRatio = (data : number[]) : number => {
  const winGames : number = data.reduce((accumulator, value) => value === 1 ? accumulator + 1 : value, 0)
  const ratio : number = winGames / data.length
  console.log({
    "winGames": winGames,
    "playedGames": data.length,
    "ratio": ratio
  })
  return ratio
}

export const getAverage = (data : number[]) : number => {
  const total : number = data.reduce((accumulator, value) => accumulator + value, 0)
  const average : number = total / data.length
  return average
}

export const getMedian = (data : Array<Number>) : number => {
  const median :number = mean(data)
  return median
}