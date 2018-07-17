import React from 'react'
import PropTypes from 'prop-types'
import classNames from "classnames";
import Label from '../Label/Label';

import '../Form.css'

const Input = ({value, className, label, error, ...rest}) => {
  return (
    <fieldset className='input-control'>
      { label && <Label value={label} />  }
      <input {...rest} className={classNames('input', className)} value={value}/>
      { error && <Label value={error} error />}
    </fieldset>
  )
}

Input.propTypes = {
  value: PropTypes.string,
  onInput: PropTypes.func,
  className: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
}

export default Input
