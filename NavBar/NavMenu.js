import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './NavMenu.css'

const NavMenu = ({pullRight, children}) => {
  const classes = classNames(
    'nav-menu', 
    { 
      'ml-auto': pullRight
    }
  )
  return (
    <ul className={classes}>
      {children}
    </ul>
  )
}

NavMenu.propTypes = {
  pullRight: PropTypes.bool,
  children: PropTypes.node,
}

export default NavMenu
