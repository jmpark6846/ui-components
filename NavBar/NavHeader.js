import React from 'react'
import PropTypes from 'prop-types'
// import { navHeader } from './NavHeader.css'
import './NavHeader.css'

const NavHeader = ({children}) => {
  return (
    <a href='/' className='nav-header'>
      {children}
    </a>
  )
}

NavHeader.propTypes = {
  children: PropTypes.node,
}

export default NavHeader
