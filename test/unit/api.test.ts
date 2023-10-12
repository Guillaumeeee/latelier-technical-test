import request from 'supertest';
import app from '../../src/app';
import { getAverage, getMedian, getRatio, getIMC } from '../../src/utils';

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

  describe('GET /stats', () => {
    it('should respond with status 200 and all data from getStats', async () => {
      const res = await request(app).get(`${basePathUrl}/stats`);
      expect(res.statusCode).toBe(200);
      expect(res.body).toBeDefined();
      expect(res.body).toBeTruthy();
    });
    it('should respond with header Access-Control-Allow-Origin set to *', async () => {
      const res = await request(app).get(`${basePathUrl}/stats`);
      expect(res.headers['access-control-allow-origin']).toEqual('*');
    });
  });
});

/**
 * Utils functions
 */
// TODO: check Nan
describe('Testing /utils functions', () => {
  describe('getRatio', () => {
    it('should calculate the ratio correctly', () => {
      const data: number[] = [1, 1, 0, 1, 0];
      const ratio: number = getRatio(data);
      expect(ratio).toBe(0.6);
      // expect(getRatio(data)).toBe(0.6);
    });
    it('should return 0 for an empty array', () => {
      const data: number[] = [];
      expect(getRatio(data)).toBe(0);
    });
  });

  describe('getAverage', () => {
    it('should calculate the average correctly', () => {
      const data: number[] = [10, 20, 30, 40, 50];
      expect(getAverage(data)).toBe(30);
    });
  });

  describe('getMedian', () => {
    it('should calculate the median correctly', () => {
      const data: number[] = [5, 10, 15];
      expect(getMedian(data)).toBe(10);
    });
  });

  describe('getIMC', () => {
    it('should calculate the IMC correctly', () => {
      const weight = 80000; // 80 kg
      const height = 188; // 188 cm
      expect(getIMC(weight, height)).toBeCloseTo(21.277, 5);
    });
  });
});
