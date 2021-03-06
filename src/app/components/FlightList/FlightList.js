import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { fetchFlights, addFlight } from '../../actions';
import FlightDetail from '../FlightDetail';

export class FlightList extends Component {

  componentDidUpdate(prevProps, prevState) {
    if ((prevProps.originCity !== this.props.originCity ||
      prevProps.destinyCity !== this.props.destinyCity) && (this.props.originCity.length > 0 && this.props.destinyCity.length > 0)) {
      this.props.fetchFlights(this.props.originCity, this.props.destinyCity);
    }
  }

  addFlightToCart = (flightIndex) => {
    const {
      flights,
      addFlight } = this.props;
    addFlight(flights[flightIndex]);
  }

  listFlights = () => {
    const {
      limit,
      currentPage,
    } = this.props.pagination;
    const {
      flights,
      dictionary,
      noFlightFoundLabel } = this.props;
    const start = (currentPage - 1) * limit;
    const list = []
    if (flights.length > 0) {
      for (let flightIndex = start; flightIndex < limit; flightIndex++) {
        list.push(<FlightDetail
          key={flights[flightIndex].id}
          segments={flights[flightIndex].itineraries[0].segments}
          price={flights[flightIndex].price}
          travelerPricings={flights[flightIndex].travelerPricings}
          dictionary={dictionary}
          bookFlight={this.addFlightToCart}
          indexFlight={flightIndex}
          disabledCancel={true}
        />);
      }
      return list;
    } else {
      return <span>{noFlightFoundLabel}</span>
    }
  }
  
  render() {
    return (
      <Fragment>
        {
          this.listFlights()      
        }
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    originCity: state.originCitySelected,
    destinyCity: state.destinyCitySelected,
    flights: state.flights,
    dictionary: state.dictionary,
    pagination: state.pagination,
    noFlightFoundLabel: state.noFlightFoundLabel,
  };
};

const mapDispatchToProps = {
  fetchFlights: fetchFlights,
  addFlight: addFlight
}

export default connect(mapStateToProps, mapDispatchToProps)(FlightList);
