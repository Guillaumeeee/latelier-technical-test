import request from 'supertest';
import app from '../../src/app';

import {
  getMedianHeight,
  getAverageIMC,
  getCountryWithHighestWinRatio,
} from '../../src/utils/index'

/**
 * API V1 endpoints
 */
const basePathUrl: string = '/api/v1';

// TODO: add mock type example
describe('Testing API endpoints', () => {
  describe('GET /players', () => {
    it('should respond with status 200 and data from getPlayers', async () => {
      const res = await request(app).get(`${basePathUrl}/players`);
      expect(res.statusCode).toBe(200);
      expect(res.body).toBeDefined();
      expect(res.body).toBeTruthy();
    });
    it('should respond with header Access-Control-Allow-Origin set to *', async () => {
      const res = await request(app).get(`${basePathUrl}/players`);
      expect(res.headers['access-control-allow-origin']).toEqual('*');
    });
  });

  describe('GET /player/:id', () => {
    it('should respond with status 200 and data from getPlayers', async () => {
      // const res = await request(app).get('/players/52')
      const res = await request(app).get(`${basePathUrl}/player/52`);
      expect(res.statusCode).toBe(200);
      expect(res.body).toBeDefined();
      expect(res.body).toBeTruthy();
    });
    it('should respond with status 404 and not found from getPlayers', async () => {
      const res = await request(app).get(`${basePathUrl}/player/1000000`);
      expect(res.statusCode).toBe(404);
    });
    it('should respond with status 400 and bad request because params id not set / undefined / of wrong type', async () => {
      const res = await request(app).get(`${basePathUrl}/player/dsds`);
      expect(res.statusCode).toBe(400);
    });
    it('should respond with header Access-Control-Allow-Origin set to *', async () => {
      const res = await request(app).get(`${basePathUrl}/player/52`);
      expect(res.headers['access-control-allow-origin']).toEqual('*');
    });
  });

  describe('GET /statistics', () => {
    it('should respond with status 200 and all data from getStatistics', async () => {
      const res = await request(app).get(`${basePathUrl}/statistics`);
      expect(res.statusCode).toBe(200);
      expect(res.body).toBeDefined();
      expect(res.body).toBeTruthy();
    });
    it('should respond with header Access-Control-Allow-Origin set to *', async () => {
      const res = await request(app).get(`${basePathUrl}/statistics`);
      expect(res.headers['access-control-allow-origin']).toEqual('*');
    });

    type mockPlayerDataType = {
      id: number;
      country: {
        code: string;
      };
      data: {
        last: number[];
        weight: number;
        height: number;
      };
    }[];

    const mockPlayerData : mockPlayerDataType = [
      {
        id: 1,
        country: { code: 'USA' },
        data: { last: [1, 1, 1, 0, 1], weight: 80000, height: 188 },
      },
      {
        id: 2,
        country: { code: 'SRB' },
        data: { last: [0, 1, 0, 0, 1], weight: 74000, height: 185 },
      },
      {
        id: 3,
        country: { code: 'SUI' },
        data: { last: [1, 1, 1, 0, 1], weight: 81000, height: 183 },
      },
    ];
    it('Calculate the country with the highest win ratio', () => {
      const result = getCountryWithHighestWinRatio(mockPlayerData);
      expect(result.country).toBe('USA');
      expect(result.winRatio).toBeCloseTo(0.6);
    });
  
    it('Calculate the average IMC', () => {
      const result = getAverageIMC(mockPlayerData);
      expect(result).toBeCloseTo(27.65);
    });
  
    it('Calculate the median height', () => {
      const result = getMedianHeight(mockPlayerData);
      expect(result).toBe(185); // Middle height value
    });
  });
});
