import PropTypes from 'prop-types';
import { Fragment } from 'react';
import FlightDetail from '../FlightDetail';


const CartList = ({
  flights,
  dictionary,
  removeFlightFromCart
}) => {

  const removeFromCart = (index) => {
    removeFlightFromCart(index);
  }

  const renderList = () => 
    flights.map((flight, flightIndex) => (
      <FlightDetail
        key={flightIndex}
        segments={flight.itineraries[0].segments}
        price={flight.price}
        travelerPricings={flight.travelerPricings}
        dictionary={dictionary}
        indexFlight={flightIndex}
        removeFromList={removeFromCart}
        disabledBook={true}
      />
    ));

  
  return (
    <Fragment>
    {
      renderList()
    }
    </Fragment>
  )
}

CartList.propTypes = {
  flights: PropTypes.array.isRequired,
  dictionary: PropTypes.object.isRequired,
  removeFlightFromCart: PropTypes.func.isRequired,
};

export default CartList;
