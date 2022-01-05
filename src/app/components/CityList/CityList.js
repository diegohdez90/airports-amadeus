import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from '../Select';

import { selectCity } from '../../actions';

export class CityList extends Component {

  setCity = (e) => {
    this.props.setCity(e.target.value);
  }

  render() {
    return (
      <React.Fragment>
        <h2>Select a city</h2>
        <Select
          selected={this.props.citySelected}
          options={this.props.cities}
          onChange={this.setCity} />
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = {
  setCity: selectCity
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    cities: state.cities,
    citySelected: state.citySelected,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
