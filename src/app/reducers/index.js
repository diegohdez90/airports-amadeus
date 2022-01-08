import { combineReducers } from "redux";
import {
  SELECT_ORIGIN_CITY,
  SELECT_DESTINY_CITY,
  SELECT_FLIGHT, 
  FETCH_FLIGHTS,
  FETCH_ORIGIN_CITY,
  FETCH_DESTINY_CITY } from "../constants";

const citiesReducer = () => {
  return [
    { name: 'Mexico City' },
    { name: 'Los Angeles' },
    { name: 'New York' },
    { name: 'Denver' },
    { name: 'Miami' },
    { name: 'Dallas' },
    { name: 'San Francisco' },
    { name: 'London' },
    { name: 'Paris' },
    { name: 'Barcelona' },
    { name: 'Berlin' },
    { name: 'Roma' },
  ]
};

const selectedOriginCityReducer = (selectedCity = '', action) => {
  switch (action.type) {
    case SELECT_ORIGIN_CITY:
      return action.payload;
  
    default:
      return selectedCity;
  }
}

const selectedDestinyCityReducer = (selectedCity = '', action) => {
  switch (action.type) {
    case SELECT_DESTINY_CITY:
      return action.payload;

    default:
      return selectedCity;
  }
}

const originCities =  (state = [], action) => {
  switch (action.type) {
    case FETCH_ORIGIN_CITY:
      return action.payload;
    default:
      return state;
  }
};

const destinyCities = (state = [], action) => {
  switch (action.type) {
    case FETCH_DESTINY_CITY:
      return action.payload;
    default:
      return state;
  }
};

const flights = (state = [], action) => {
  switch (action.type) {
    case FETCH_FLIGHTS:
      return action.payload;
  
    default:
      return state;
  }
}

const selectedFlightReducer = (selectedFlight = null, action) => {
  switch (action.type) {
    case SELECT_FLIGHT:
      return action.payload;

    default:
      return selectedFlight;
  }
}

const flightCart = () => {
  return [];
};

const bookFlights = () => {
  return [];
}

export default combineReducers({
  cities: citiesReducer,
  originCities: originCities,
  destinyCities: destinyCities,
  originCitySelected: selectedOriginCityReducer,
  destinyCitySelected: selectedDestinyCityReducer,
  flights: flights,
  cart: flightCart,
  bookFlights: bookFlights,
  flightSelected: selectedFlightReducer,
})
