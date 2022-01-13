import { useEffect, useState } from 'react';
import history from '../../../history';


const Total = ({
  flights
}) => {

  const [total, setTotal] = useState(getTotal);

  useEffect(() => {
    setTotal(getTotal);
  }, [flights])

  return (
    <div>
      {
        displayTotal()
      }
    </div>
  )

  function getTotal() {
    const nFormat = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    });
    return nFormat.format(`${flights.reduce((total, flight) => {
      return total = total + Number(flight.price.total)
    }, 0)}`);
  }

  function displayTotal() {
    if (flights.length > 0) 
      return (
      <div className="grid grid-cols-2 gap-8 space-between items-center">
        <div className="grid grid-col-1 ">
          <p className="self-center text-center">{`Total: ${total}`}</p>
        </div>
        <button
          className="text-white bg-green-700 hover:bg-green-800 rounded text-center p-4"
          onClick={e => {
            e.preventDefault();
            history.push('/confirm');
          }}
        >Procced to pay</button>
      </div>
    )
    return <div className="grid grid-cols-1">
      No flights added in your cart
    </div>
  }
}


export default Total;
