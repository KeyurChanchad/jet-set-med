// CountryPicker.js
import React from 'react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const CountryPicker = ({ selectedCountry, setSelectedCountry }) => {
  return (
        <PhoneInput
        inputStyle={{ width: '60%'}}
        containerStyle={{ width: '100%'}}
        country={'in'}
        value={selectedCountry}
        onChange={setSelectedCountry}
/>
  );
};

export default CountryPicker;
