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

  listFlights = () => {
    const {
      limit,
      currentPage,
    } = this.props.pagination;
    const { flights, dictionary } = this.props;
    const start = (currentPage - 1) * limit;
    const list = []
    for (let flightIndex = start; flightIndex < limit; flightIndex++) {
      list.push(<FlightDetail
        segments={flights[flightIndex].itineraries[0].segments}
        price={flights[flightIndex].price}
        travelerPricings={flights[flightIndex].travelerPricings}
        dictionary={dictionary}
      />);
    }
    return list;
  }
  
  render() {
    return (
      <Fragment>
        <h1>Flights</h1>
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
    pagination: state.pagination
  };
};

const mapDispatchToProps = {
  fetchFlights: fetchFlights
}

export default connect(mapStateToProps, mapDispatchToProps)(FlightList);
