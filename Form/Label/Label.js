import React from 'react'
import classNames from "classnames";
import PropTypes from 'prop-types'
import '../Form.css'

const Label = ({value, error}) => {
  return (
    <label className={classNames('label', { error })}>{value}</label>
  )
}

Label.propTypes = {
  value: PropTypes.string,
  error: PropTypes.bool,
}

export default Label
