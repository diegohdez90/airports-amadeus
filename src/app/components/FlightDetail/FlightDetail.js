import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';

const FlightDetail = ({
  bookFlight,
  indexFlight,
  segments,
  price,
  travelerPricings,
  dictionary,
  disabledBook,
  removeFromList,
  disabledCancel,
}) => {
  return (
    <Fragment>
      <div className="p-10">
        <div className="max-w-full content-center bg-white flex flex-col rounded overflow-hidden shadow-lg">
          <div className="flex flex-row items-baseline flex-nowrap bg-gray-100 p-2">
            {!disabledCancel && <button className="rounded-full bg-red-600 text-slate-100 p-2">Remove from cart</button> }
            <h1 className="ml-2 uppercase font-bold text-gray-500">departure</h1>
            <p className="ml-2 font-normal text-gray-500">{new moment(segments[0].departure.at).format('dddd, MMMM Do')}</p>
          </div>
          {
            segments.map((seg, indexSeg) => (
              <Fragment>
                <div className="mt-2 flex justify-start bg-white p-2">
                  <div className="flex mx-2 ml-6 h8 px-2 flex-row items-baseline rounded-full bg-gray-100 p-1">
                    <p className="font-normal text-sm ml-1 text-gray-500">{travelerPricings[0].fareDetailsBySegment[indexSeg].cabin}</p>
                  </div>
                </div>
                <div className="mt-2 flex sm:flex-row mx-6 sm:justify-between flex-wrap ">
                  <div className="flex flex-row place-items-center p-2">
                    <div className="flex flex-col ml-2">
                      <p className="text-xs text-gray-500 font-bold">{dictionary.carriers[seg.carrierCode]}</p>
                      <p className="text-xs text-gray-500">{`${seg.aircraft.code} - ${dictionary.aircraft[seg.aircraft.code]}`}</p>
                    </div>
                  </div>

                  <div className="flex flex-col p-2">
                    <p className="font-bold">{new moment(seg.departure.at).format('dddd, MMMM Do YYYY, h:mm:ss a')}</p>
                    <p className="text-gray-500"><span className="font-bold">{seg.departure.iataCode}</span></p>
                  </div>
                  <div className="flex flex-col flex-wrap p-2">
                    <p className="font-bold">{new moment(seg.arrival.at).format('dddd, MMMM Do YYYY, h:mm:ss a')}</p>
                    <p className="text-gray-500"><span className="font-bold">{seg.arrival.iataCode}</span></p>
                  </div>
                </div>
              </Fragment>
            ))
          }
          { !disabledBook &&
          <div className="mt-4 bg-gray-100 flex flex-row flex-wrap md:flex-nowrap justify-between items-baseline">
            <div className="flex mx-6 py-4 flex-row flex-wrap">
            </div>
            <div className="md:border-l-2 mx-6 md:border-dotted flex flex-row py-4 mr-6 flex-wrap">
              <div className="text-sm mx-2 flex flex-col">
                <p>Flexible Ticket</p>
                <p className="font-bold">{price.currency} {price.total}</p>
                <p className="text-xs text-gray-500">{travelerPricings[0].travelerType}</p>
              </div>
              <button className="w-32 h-11 rounded flex border-solid border text-white bg-green-800 mx-2 justify-center place-items-center" onClick={(e) => { e.preventDefault(); bookFlight(indexFlight) }}><div className="">Book</div></button>
            </div>
          </div>
          }
        </div>
      </div>
    </Fragment>
  )
}

FlightDetail.propTypes = {
  segments: PropTypes.array.isRequired,
  price:  PropTypes.object.isRequired,
  travelerPricings: PropTypes.array.isRequired,
  dictionary: PropTypes.object.isRequired,
  bookFlight: PropTypes.func,
  indexFlight: PropTypes.number.isRequired,
  disabledBook: PropTypes.bool,
  disabledCancel: PropTypes.bool,
  removeFromList: PropTypes.func,
}

FlightDetail.defaultProps = {
  disabledBook: false,
  disabledCancel: false,
}

export default FlightDetail;

