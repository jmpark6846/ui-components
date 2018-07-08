import React from 'react'
import PropTypes from 'prop-types'
import './NavItem.css'

const NavItem = ({to, children}) => {
  return (
    <li className='nav-item'><a href={to} className='nav-link'>{children}</a></li>
  )
}

NavItem.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node
}

export default NavItem
