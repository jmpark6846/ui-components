import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './Row.css'

const Row = ({className, children}) => {
  const classes = classNames('row', className)
  return (
    <div className={classes}>
      {children}
    </div>
  )
}

Row.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default Row
