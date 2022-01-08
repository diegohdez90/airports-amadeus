import { useCallback, Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import DataList from 'react-datalist-input';

const CityDataList = ({
  list,
  onChangeEvent,
  onInputEvent,
  emptyPlaceholder,
  selectPlaceholder,
  noResultsFoundPlaceholder,
}) => {

  const [value, setValue] = useState('');
  const [items, setItems] = useState([]);
  const [called, setCalled] = useState(false)
  const setDeboucedCity = useCallback(_.debounce(onInputEvent, 800), []);

  const setCity = (city) => {
    if (city.length > 0 && items.length === 0) {
      setValue(city);
      setDeboucedCity(city);
      setCalled(true);
    }
  }

  useEffect(() => {
    setItems(parseItems)
    setValue('');
  }, [list])

  const parseItems = list.map(item => {
    return {
      label: item.name,
      key: item.iataCode,
    }
  });

  const selectCity = (city) => {
    setValue(city.label);
    onChangeEvent(city.key);
  }

  return (
    <Fragment>
      <DataList
        placeholder={(() => {
          if(!called && items.length === 0 && value === '')
            return emptyPlaceholder;
          if (called && items.length > 0 && value === '')
            return selectPlaceholder;
          return noResultsFoundPlaceholder;
        })()}
        items={items}
        onSelect={selectCity}
        onInput={setCity}
        value={value}
        inputClassName='mt-1
            block
            w-full
            rounded-md
            border-gray-300
            shadow-sm
            focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
      />
    </Fragment>
  )
}

CityDataList.propTypes = {
  list: PropTypes.array.isRequired,
  onChangeEvent: PropTypes.func.isRequired,
  onInputEvent: PropTypes.func.isRequired,
  emptyPlaceholder: PropTypes.string.isRequired,
  selectPlaceholder: PropTypes.string.isRequired,
  noResultsFoundPlaceholder: PropTypes.string.isRequired,
}

export default CityDataList;
