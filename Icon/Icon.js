import React from 'react'
import classNames from 'classnames'
import './Icon.css'

const Icon = ({className, onClick, icon, ...rest}) => {
  const classes = classNames('icon', className, icon)
  return (
    <span {...rest} className={classes} onClick={onClick}></span>
  )
}

export default Icon
