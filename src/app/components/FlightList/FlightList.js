import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { fetchFlights } from '../../actions';
import FlightDetail from '../FlightDetail';


export class FlightList extends Component {

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, prevState);
    if ((prevProps.originCity !== this.props.originCity ||
      prevProps.destinyCity !== this.props.destinyCity) && (this.props.originCity.length > 0 && this.props.destinyCity.length > 0)) {
      this.props.fetchFlights(this.props.originCity, this.props.destinyCity);
    }
  }
  
  render() {
    return (
      <Fragment>
        <h1>Flights</h1>
        <FlightDetail />
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    originCity: state.originCitySelected,
    destinyCity: state.destinyCitySelected,
    flights: state.flights
  };
};

const mapDispatchToProps = {
  fetchFlights: fetchFlights
}

export default connect(mapStateToProps, mapDispatchToProps)(FlightList);
