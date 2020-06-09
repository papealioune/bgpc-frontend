import React from 'react';

import './form-input.styles.scss';

interface handleChange {

}

interface label {

}

function FormInput({ handleChange, label, ...otherProps }): JSX.Element {
  return (
    <div className='group'>
      <input className='form-input' onChange={handleChange} {...otherProps} />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
}

export default FormInput;