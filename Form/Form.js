import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Form = ({className, children, ...rest}) => {
  return (
    <form {...rest} className={classNames('form', className)}>
      {children} 
    </form>
  )
}

Form.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

export default Form
