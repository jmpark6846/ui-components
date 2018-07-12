import React from 'react'
import Icon from '../Icon/Icon';
import classNames from 'classnames'
import './ToggleButton.css'

const ToggleButton = ({onClick}) => {
  return (
    <Icon className='toggle-button ml-auto' icon='fas fa-bars' onClick={onClick}/>
  ) 
}

export default ToggleButton
