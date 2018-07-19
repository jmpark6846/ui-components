import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from "react-router-dom";
import './NavItem.css'

const NavItem = ({to, children}) => {
  return (
    <li className='nav-item'>
      { 
        to ? 
        <NavLink to={to} className='nav-link'>{children}</NavLink>
        : children
      }
    </li>
  )
}

NavItem.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node
}

export default NavItem
