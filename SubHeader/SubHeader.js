import React from 'react'
import PropTypes from 'prop-types'
import './SubHeader.css'
const SubHeader = ({children}) => {
  return (
    <div className='sub-header'>{children}</div>
  )
}

SubHeader.propTypes = {
  children: PropTypes.node,
}

export default SubHeader