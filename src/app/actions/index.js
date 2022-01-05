export const selectCity = city => {
  return {
    type: 'SELECT_CITY',
    payload: city
  };
}

export const selectFlight = details => {
  return {
    type: 'SELECT_FLIGHT',
    payload: details
  };
}