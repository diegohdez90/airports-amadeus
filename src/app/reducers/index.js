import { combineReducers } from "redux";
import {
  SELECT_ORIGIN_CITY,
  SELECT_DESTINY_CITY,
  SELECT_FLIGHT, 
  FETCH_FLIGHTS,
  FETCH_ORIGIN_CITY,
  FETCH_DESTINY_CITY, 
  SET_DICTIONARY,
  PAGINATION} from "../constants";

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

const dictionary = (state = [], action) => {
  switch (action.type) {
    case SET_DICTIONARY:
      return { ...state, 
        locations: {
          ...state.locations,
          ...action.payload.locations
        },
        aircraft: {
          ...state.aircraft,
          ...action.payload.aircraft
        },
        currencies: {
          ...state.currencies,
          ...action.payload.currencies
        },
        carriers: {
          ...state.carriers,
          ...action.payload.carriers
        }
      }
  
    default:
      return state;
  }
}

const pagination = (state = {
  total: 0,
  limit: 10,
  pages: 0,
  currentPage: 1,
}, action) => {
  switch (action.type) {
    case PAGINATION:
      return {
        ...state,
        ...action.payload,
      };
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
  originCities: originCities,
  destinyCities: destinyCities,
  originCitySelected: selectedOriginCityReducer,
  destinyCitySelected: selectedDestinyCityReducer,
  flights: flights,
  dictionary: dictionary,
  pagination: pagination,
  cart: flightCart,
  bookFlights: bookFlights,
  flightSelected: selectedFlightReducer,
})
