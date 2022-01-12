import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteFlight } from '../../actions';
import CartList from '../../components/CartList';

export class Cart extends Component {

  removeFlightFromCart = (index) => {
    this.props.deleteFlight(this.props.cart[index])
  }

  render() {
    return (
      <div className="container mx-auto px-4">
        <div className="grid auto-rows-max gap-4">
          <h1>My cart</h1>
          <CartList 
            flights={this.props.cart}
            dictionary={this.props.dictionary}
            removeFlightFromCart={this.removeFlightFromCart}
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
