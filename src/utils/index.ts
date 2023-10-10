import { mean, round } from "lodash";

export const getRatio = (data : number[]) : number => {
  if (data.length === 0) return 0
  const winGames : number = data.reduce((accumulator, value) => value === 1 ? accumulator + 1 : accumulator, 0)
  const ratio : number = winGames / data.length
  return ratio
}

export const getAverage = (data : number[]) : number => {
  if (data.length === 0) return 0
  const total : number = data.reduce((accumulator, value) => accumulator + value, 0)
  const average : number = total / data.length
  return average
}

export const getMedian = (data : Array<number>) : number => {
  if (data.length === 0) return 0
  const median :number = mean(data)
  return median
}

export const getIMC = (weight : number, height : number) : number => {
  const IMC : number = (weight/1000) / ((height /100)*2)
  const roundIMC : number = round(IMC, 3)
  return roundIMC
}