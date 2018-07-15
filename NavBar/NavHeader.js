import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from "react-router-dom";

import './NavHeader.css'

const NavHeader = ({children}) => {
  return (
    <NavLink to={`/`} className='nav-header'>
      {children}
    </NavLink>
  )
}

NavHeader.propTypes = {
  children: PropTypes.node,
}

export default NavHeader
