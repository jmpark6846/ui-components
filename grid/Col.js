import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './Col.css'

const Col = ({className, tablet, desktop, children}) => {
  const classes = classNames({
    [`col-t-${tablet}`]:tablet,
    [`col-${desktop}`]:desktop,
  }, className)
  return (
    <div className={classes}>{children}</div>
  )
}

Col.propTypes = {
  className: PropTypes.string,
  tablet: PropTypes.number,
  desktop: PropTypes.number,
  children: PropTypes.node,
}

export default Col
