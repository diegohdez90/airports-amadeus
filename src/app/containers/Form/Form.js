import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { clearCart } from '../../actions';
import history from '../../../history';

const Form = ({
  total,
  flightsLength,
  clearCart,
}) => {

  
  useEffect(() => {
    if (flightsLength === 0) {
      history.back();
    }
  }, [flightsLength])

  
  const [name, setName] = useState('');
  const [lastName, setLastname] = useState('');
  const [street, setStreet] = useState('');
  const [zip, setZip] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setcountry] = useState('');
  const [email, setEmail] = useState('');
  return (
    <div className="container mx-auto px-4">
      <div className="grid auto-rows-max gap-4">
        <div className="p-10">
          <form onSubmit={(e) => {
            e.preventDefault()
            alert(`Coungratulations ${name} ${lastName} your reservations were sent succesfully with a total amount of: ${total} in ${flightsLength} flights. A detailed invoice was sent at ${email}`);
            clearCart();
          }}>
            <div className="mb-6">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First name</label>
              <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
                value={name}
                onChange={(e) => { setName(e.target.value) } }
                required />
            </div>
            <div className="mb-6">
              <label htmlFor="last-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last name</label>
              <input type="text" id="lastname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Doe"
                value={lastName}
                onChange={(e) => { setLastname(e.target.value) } }
                required />
            </div>
            <div className="mb-6">
              <label htmlFor="street" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Street</label>
              <input type="text" id="street" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="123 Street Avenue"
                value={street}
                onChange={(e) => { setStreet(e.target.value) }}
                required />
            </div>
            <div className="mb-6">
              <label htmlFor="zip" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Zip code</label>
              <input type="text" id="zip" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="01000"
                value={zip}
                onChange={(e) => { setZip(e.target.value) }}
                required />
            </div>
            <div className="mb-6">
              <label htmlFor="state" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">City</label>
              <input type="text" id="state" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="New York"
                value={city}
                onChange={(e) => { setCity(e.target.value) }}
                required />
            </div>
            <div className="mb-6">
              <label htmlFor="state" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">State</label>
              <input type="text" id="state" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="New York"
                value={state}
                onChange={(e) => { setState(e.target.value) }}
                required />
            </div>
            <div className="mb-6">
              <label htmlFor="country" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Country</label>
              <input type="text" id="country" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="United States"
                value={country}
                onChange={(e) => { setcountry(e.target.value) }}
                required />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder="johndoe@example.com"
                value={email}
                onChange={(e) => { setEmail(e.target.value) }}
                required />
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              disabled={ name.length === 0 || lastName.length === 0 || street.length === 0 || zip.length === 0 || city.length === 0 || state.length === 0 || country.length === 0 || email.length === 0 }
            >Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    total: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(state.cart.reduce((total, flight) => total += Number(flight.price.total), 0)),
    flightsLength: state.cart.length,
  }
}

const mapDispatchToProps = {
  clearCart
}

Form.propTypes = {
  total: PropTypes.string.isRequired,
  flightsLength: PropTypes.number.isRequired,
  clearCart: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
