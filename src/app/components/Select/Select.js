import React, { Component } from 'react'
import SelectOption from '../SelectOption';
import PropTypes from 'prop-types';


class Select extends Component {
  render() {
    return (
      <React.Fragment>
        <select value={this.props.selected} onChange={this.props.onChange}>
          <SelectOption value='' label='Select a city'></SelectOption>
          {
            this.props.options.map((option, index) => (
              <SelectOption
                key={index}
                value={option.name}
                label={option.name}
              />
            ))
          }
        </select>
      </React.Fragment>
    )
  }
}

Select.propTypes = {
  selected: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Select;
