import { amadeousAPI, amadeusCityAPI, aviationStackAPI, iataAirportsAPI } from "../api/config";
import {
  FETCH_FLIGHTS,
  SELECT_ORIGIN_CITY,
  SELECT_DESTINY_CITY,
  SELECT_FLIGHT } from "../constants";


export const selectOriginCity = city => {
  return {
    type: SELECT_ORIGIN_CITY,
    payload: city
  };
};

export const selectDestinyCity = city => {
  return {
    type: SELECT_DESTINY_CITY,
    payload: city
  };
};

export const selectFlight = details => {
  return {
    type: SELECT_FLIGHT,
    payload: details
  };
};

export const fetchCity = (term, type) => async dispatch => {
  const response = await amadeusCityAPI.get('/locations', {
    params: {
      subType: 'AIRPORT',
      keyword: `${term}`,
    },
    headers: {
      'Authorization': `${localStorage.getItem('token_type')} ${localStorage.getItem('access_token')}`
    }
  });

  dispatch({
    type: type,
    payload: response.data.data,
  });
};

export const fetchFlights = (origin, destiny) => async dispatch => {
  const response = await amadeousAPI.get('/shopping/flight-offers', {
    params: {
      originLocationCode: `${origin}`,
      destinationLocationCode: `${encodeURIComponent(destiny)}`,
      adults: 1,
      departureDate: (() => {
        const departureDate = new Date();
        return new Date(departureDate.getTime() - (departureDate.getTimezoneOffset() * 60000))
          .toISOString()
          .split("T")[0];
      })()
    },
    headers: {
      'Authorization': `${localStorage.getItem('token_type')} ${localStorage.getItem('access_token')}`
    }
  });
  console.log('fetch flights')
  dispatch({
    type: FETCH_FLIGHTS,
    payload: response.data.data,
  });
}
