import { combineReducers } from "redux";
import _ from 'lodash';
import {
  SELECT_ORIGIN_CITY,
  SELECT_DESTINY_CITY,
  SELECT_FLIGHT, 
  FETCH_FLIGHTS,
  FETCH_ORIGIN_CITY,
  FETCH_DESTINY_CITY, 
  SET_DICTIONARY,
  PAGINATION,
  ADD_FLIGHT,
  NO_FLIGHTS_FOUND,
  DELETE_FLIGHT,
  CLEAR_CART} from "../constants";

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

const dictionary = (state = {}, action) => {
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
  limit: 0,
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

const noFlightFoundLabel = (state = '', action) => {
  switch (action.type) {
    case NO_FLIGHTS_FOUND:
      
      return action.payload
  
    default:
      return state
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

const flightCart = (state = [], action) => {
  switch (action.type) {
    case ADD_FLIGHT:
      return [...state, action.payload];

    case DELETE_FLIGHT:
      return state.filter((item, index) => index !== action.payload);

    case CLEAR_CART:
      return action.payload;

      default:
      return state;
  }
};

export default combineReducers({
  originCities: originCities,
  destinyCities: destinyCities,
  originCitySelected: selectedOriginCityReducer,
  destinyCitySelected: selectedDestinyCityReducer,
  flights: flights,
  dictionary: dictionary,
  pagination: pagination,
  noFlightFoundLabel: noFlightFoundLabel,
  cart: flightCart,
  flightSelected: selectedFlightReducer,
})
