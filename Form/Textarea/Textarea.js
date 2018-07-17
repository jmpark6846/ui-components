import React from 'react'
import classNames from "classnames";
import PropTypes from 'prop-types'
import Label from '../Label/Label';
import '../Form.css'

const Textarea = ({className, label, error, children, ...rest}) => {
  return (
    <div className='input-control'>
      { label && <Label value={label} /> }
      <textarea {...rest} className={classNames('textarea', className)}>{children}</textarea>
      { error && <Label value={error} error />}
    </div>
  )
}

Textarea.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  children: PropTypes.node,
}

export default Textarea
