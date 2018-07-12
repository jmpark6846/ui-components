import React from 'react'
import classNames from 'classnames'
import './Icon.css'

const Icon = ({className, onClick, icon}) => {
  const classes = classNames('icon', className, icon)
  return (
    <span className={classes} onClick={onClick}></span>
  )
}

export default Icon
