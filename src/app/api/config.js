import axios from 'axios';

export const iataAirportsAPI = axios.create({
  baseURL: 'https://www.air-port-codes.com/api/v1',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'APC-Auth': '127d208302',
    'APC-Auth-Secret': '9df3d0c0f0cb666',
  }
});

export const aviationStackAPI = axios.create({
  baseURL: 'https://api.aviationstack.com/v1/',
  params: {
    'access_key': '9749a71f5d9e2a0edf1b96dfc5e8996a',
  }
});

export const amadeousAPI = axios.create({
  baseURL: 'https://test.api.amadeus.com/v2'
});

export const amadeusCityAPI = axios.create({
  baseURL: 'https://test.api.amadeus.com/v1/reference-data'
})