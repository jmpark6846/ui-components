import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './Container.css'

const Container = ({fluid, className, children}) => {
  const classes = classNames({
    'container-fluid': fluid,
    'container': !fluid,
  }, className)
  return (
    <div className={classes}>{children}</div>
  )
}

Container.propTypes = {
  children: PropTypes.node,
  fluid: PropTypes.bool,
  className: PropTypes.string
}

export default Container
