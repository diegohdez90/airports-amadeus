import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteFlight } from '../../actions';
import CartList from '../../components/CartList';
import Total from '../Total';

export class Cart extends Component {

  removeFlightFromCart = (index) => {
    this.props.deleteFlight(index);
  }

  render() {
    return (
      <div className="container mx-auto px-4">
        <div className="grid auto-rows-max gap-4">
          <CartList 
            flights={this.props.cart}
            dictionary={this.props.dictionary}
            removeFlightFromCart={this.removeFlightFromCart}
            />
          <Total 
            flights={this.props.cart}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('cart', state);
  return {
    cart: state.cart,
    dictionary: state.dictionary,
  }
};

const mapDispatchToProps = {
  deleteFlight
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
