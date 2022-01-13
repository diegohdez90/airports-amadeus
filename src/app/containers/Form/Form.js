import { useState } from 'react';
import PropTypes from 'prop-types';

const Form = props => {

  
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
          <form>
            <div class="mb-6">
              <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First name</label>
              <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
            </div>
            <div class="mb-6">
              <label for="last-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last name</label>
              <input type="text" id="lastname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
            </div>
            <div class="mb-6">
              <label for="street" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Street</label>
              <input type="text" id="street" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Street Avenue 1" required />
            </div>
            <div class="mb-6">
              <label for="zip" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Zip code</label>
              <input type="text" id="zip" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="01000" required />
            </div>
            <div class="mb-6">
              <label for="state" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">State</label>
              <input type="text" id="state" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="New York" required />
            </div>
            <div class="mb-6">
              <label for="country" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Country</label>
              <input type="text" id="country" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="United States" required />
            </div>
            <div class="mb-6">
              <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="johndoe@example.com" required />
            </div>
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

Form.propTypes = {

}

export default Form;
