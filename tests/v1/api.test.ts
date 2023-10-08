import request from 'supertest';
import app from "../../src/app";
import {
  getAverage,
  getMedian,
  getRatio,
  getIMC
} from "../../src/utils";

describe('Testing API endpoints', () => {
  describe('GET /players', () => {
    it('should respond with status 200 and data from getPlayers', async () => {
      const response = await request(app).get('/players')
      expect(response.status).toBe(200);
      expect(response.body).toBeDefined();
      expect(response.body).toBeTruthy();
    })
  });
  describe('GET /player/:id', () => {
    it.todo('should respond with status 200 and data from getPlayers', async () => {
      const response = await request(app).get('/players/52')
      expect(response.status).toBe(200);
      expect(response.body).toBeDefined();
      expect(response.body).toBeTruthy();
    })
    it.todo('should respond with status 404 and not found from getPlayers', async () => {
      const response = await request(app).get('/players/1000000')
      expect(response.status).toBe(404);
    })
    it.todo('should respond with status 400 and bad request because params id not set / undefined / of wrong type', async () => {
      const response = await request(app).get('/players/dsds')
      expect(response.status).toBe(400);
    })
  });
  describe('GET /stats', () => {
    it.todo('should respond with status 200 and all data from getStats', async () => {
      const response = await request(app).get('/stats')
      expect(response.status).toBe(200);
      expect(response.body).toBeDefined();
      expect(response.body).toBeTruthy();
    })
    // it.todo('should respond with status 200 and only specific data with queryParam averageIMC from getStats', async () => {})
    // it.todo('should respond with status 200 and only specific data with queryParam medianHeight from getStats', async () => {})
    // it.todo('should respond with status 200 and only specific data with queryParam topCountries from getStats', async () => {})
  });
});

// TODO: check Nan
describe('Testing /utils functions', () => {
  describe('getRatio', () => {
    it('should calculate the ratio correctly', () => {
      const data = [1, 1, 0, 1, 0];
      expect(getRatio(data)).toBe(0.6);
    })
    it('should return 0 for an empty array', () => {
      // const data: number[] = [];
      const data = [];
      expect(getRatio(data)).toBe(0);
    });
  });

  describe('getAverage', () => {
    it('should calculate the average correctly', () => {
      const data = [10, 20, 30, 40, 50];
      expect(getAverage(data)).toBe(30);
    });
  });

  describe('getMedian', () => {
    it('should calculate the median correctly', () => {
      const data = [5, 10, 15];
      expect(getMedian(data)).toBe(10);
    });
  });

  describe('getIMC', () => {
    it('should calculate the IMC correctly', () => {
      const weight = 80000; // 80 kg
      const height = 188;   // 188 cm
      expect(getIMC(weight, height)).toBeCloseTo(22.60, 2);
    });
  });
})
