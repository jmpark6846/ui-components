import React from 'react'
import PropTypes from 'prop-types'
import './SectionHeader.css'
const SectionHeader = ({children}) => {
  return (
    <div className='section-header'>{children}</div>
  )
}

SectionHeader.propTypes = {
  children: PropTypes.node
}

export default SectionHeader
