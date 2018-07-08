import React from 'react'
import classNames from 'classnames'
import './Icon.css'

const Icon = ({className, onClick, icon}) => {
  const classes = classNames('icon', className, icon)
  return (
    <span className={classes} onClick={onClick}>룰루</span>
  )
}

export default Icon
