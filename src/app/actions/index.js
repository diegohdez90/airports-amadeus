import { amadeousAPI, amadeusCityAPI } from "../api/config";
import {
  FETCH_FLIGHTS,
  SELECT_ORIGIN_CITY,
  SELECT_DESTINY_CITY,
  SELECT_FLIGHT,
  SET_DICTIONARY, 
  PAGINATION,
  ADD_FLIGHT,
  NO_FLIGHTS_FOUND, 
  DELETE_FLIGHT,
  FETCH_ORIGIN_CITY,
  FETCH_DESTINY_CITY} from "../constants";
import moment from 'moment';
import history from "../../history";

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
      currencyCode: 'USD',
      departureDate: (() => {
        const departureDate = new Date(new moment(new Date()).add(1, 'day').format());
        return new Date(departureDate.getTime() - (departureDate.getTimezoneOffset() * 60000))
          .toISOString()
          .split("T")[0];
      })()
    },
    headers: {
      'Authorization': `${localStorage.getItem('token_type')} ${localStorage.getItem('access_token')}`
    }
  });
  
  if (response.data.data.length > 0) {
    dispatch({
      type: FETCH_FLIGHTS,
      payload: response.data.data,
    });

    dispatch({
      type: SET_DICTIONARY,
      payload: response.data.dictionaries,
    });

    dispatch({
      type: PAGINATION,
      payload: {
        limit: 10,
        total: response.data.meta.count,
        pages: parseInt(response.data.meta.count / 10) + 1,
        currentPage: 1,
      }
    });

    dispatch({
      type: NO_FLIGHTS_FOUND,
      payload: '',
    });

  } else {
    dispatch({
      type: NO_FLIGHTS_FOUND,
      payload: 'No Flights Found',
    });
  }
}

export const addFlight = flight => dispatch => {
  dispatch({
    type: ADD_FLIGHT,
    payload: flight
  });

  dispatch({
    type: FETCH_FLIGHTS,
    payload: [],
  });

  dispatch({
    type: PAGINATION,
    payload: {
      limit: 0,
      total: 0,
      pages: 0,
      currentPage: 1,
    }
  });

  dispatch({
    type: FETCH_ORIGIN_CITY,
    payload: [],
  });
  dispatch({
    type: FETCH_DESTINY_CITY,
    payload: [],
  });

  dispatch({
    type: SELECT_ORIGIN_CITY,
    payload: ''
  });
  dispatch({
    type: SELECT_DESTINY_CITY,
    payload: ''
  });

  history.push('/cart');
};

export const deleteFlight = (flight) => {
  return {
    type: DELETE_FLIGHT,
    payload: flight
  }
}
