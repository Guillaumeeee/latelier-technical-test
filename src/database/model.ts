import fs from 'fs';

// use validators/zod ?
export interface Player {
  id: number;
  firstname: string;
  lastname: string;
  shortname: string;
  sex: "M" | "F" | "ApacheHelicopter" ;
  country: {
    picture: string;
    code: string;
  };
  picture: string;
  data: {
    rank: number;
    points: number;
    weight: number;
    height: number;
    age: number;
    last: number[];
  };
};

export interface PlayerList {
  players: Player[];
};

const databaseFilePath = './headtohead.json'

const database = async () : Promise < PlayerList > => {
  const filedata = await fs.promises.readFile(databaseFilePath, 'utf8');
  return JSON.parse(filedata);
}

export default database