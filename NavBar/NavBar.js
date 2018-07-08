import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Container } from "../grid";
import './NavBar.css'

const NavBar = ({className, children}) => {
  const classes = classNames('navbar', className)
  return (
    <div className={classes}>  
      {children}
    </div>
  )
}

NavBar.propTypes = {
  fluid: PropTypes. bool,
  children: PropTypes.node,
}

export default NavBar
