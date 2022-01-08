import { Fragment } from 'react';
import { connect } from 'react-redux';

import { selectOriginCity, selectDestinyCity, fetchCity } from '../../actions';
import { FETCH_DESTINY_CITY, FETCH_ORIGIN_CITY } from '../../constants';
import CityDataList from '../CityDataList';

const CityList = (props) => {

  const findOriginCity = (value) => {
    props.fetchCity(value, FETCH_ORIGIN_CITY);
  }
  
  const findDestinyCity = (value) => {
    props.fetchCity(value, FETCH_DESTINY_CITY);
  }

  const setOriginCity = (selectedCity) => {
    props.selectOriginCity(selectedCity);
  };

  const setDestinyCity = (selectedCity) => {
    props.selectDestinyCity(selectedCity);
  };

  return (
    <Fragment>
      <h1 className="text-3xl font-bold underline">Booking Flights Tickets</h1>
      <div className="grid grid-cols-1 gap-4">
        <h3 className="text-2xl">Select origin and destiny</h3>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <CityDataList
          list={props.originCities}
          onChangeEvent={setOriginCity}
          onInputEvent={findOriginCity}
          emptyPlaceholder='Type origin airport'
          selectPlaceholder='Please click over this field to see airports or type to search again'
          noResultsFoundPlaceholder='No results found'
        />

        <CityDataList
          list={props.destinyCities}
          onChangeEvent={setDestinyCity}
          onInputEvent={findDestinyCity}
          emptyPlaceholder='Type destiny airport'
          selectPlaceholder='Please click over this field to see airports or type to search again'
          noResultsFoundPlaceholder='No results found'
        />
      </div>
    </Fragment>
  )
}

const mapDispatchToProps = {
  fetchCity: fetchCity,
  selectOriginCity: selectOriginCity,
  selectDestinyCity: selectDestinyCity,};

const mapStateToProps = (state) => {
  return {
    originCities: state.originCities,
    destinyCities: state.destinyCities,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
