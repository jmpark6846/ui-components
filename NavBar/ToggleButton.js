import React from 'react'
import Icon from '../Icon/Icon';
import classNames from 'classnames'
import './ToggleButton.css'

const ToggleButton = ({onClick}) => {
  return (
    <Icon className='toggle-button ml-auto' icon='toggle' onClick={onClick}/>
  ) 
}

export default ToggleButton
