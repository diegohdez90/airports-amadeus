import { combineReducers } from "redux";
import { SELECT_CITY, SELECT_FLIGHT } from "../constants";

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

const selectedCityReducer = (selectedCity = '', action) => {
  switch (action.type ) {
    case SELECT_CITY:
      return action.payload;
  
    default:
      return selectedCity;
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
  citySelected: selectedCityReducer,
  cart: flightCart,
  bookFlights: bookFlights,
  flightSelected: selectedFlightReducer,
})
