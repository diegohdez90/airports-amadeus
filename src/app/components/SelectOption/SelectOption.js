import React from 'react'

const SelectOption = ({
  value,
  label,
}) => {
  return (
    <React.Fragment>
      <option value={value}>{label}</option>
    </React.Fragment>
  )
}

export default SelectOption;
