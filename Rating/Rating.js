import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Icon from '../Icon/Icon'
import './Rating.css'

const maxRating = 5
class Rating extends React.Component{
  constructor(props){
    super(props)

    this.state= {
      hover:false,
      hoverValue: 0,
      value: props.value,
    }
  }

  handleMouseOver = (e) => {
    const value = parseInt(e.target.dataset.value)
    this.setState({ hover: true, hoverValue : value })
  }

  handleMouseOut = (e) => {
    this.setState({ hover: false, hoverValue : 0 })
  }

  handleClick = (e) => {
    const value = parseInt(e.target.dataset.value)
    const evt = { target : e.target, value }

    if( this.props.input )
      this.setState({ value })

    if( this.props.onClick )
      this.props.onClick(evt)
  }

  makeValueArray = (value) => {
    const star = parseInt(value)
    const half = value*10%10 !== 0 ? 1 : 0
    const arr = Array(maxRating).fill('star', 0, star).fill('half', star, star+half).fill('blank', star+half, maxRating)

    return arr
  }

  render(){
    const { className, input } = this.props
    const { value, hover, hoverValue } = this.state
    const rateArr = this.makeValueArray( input && hover ? hoverValue : value)

    return (
      <div className={classNames('rating', className)}>
        {rateArr.map((s,i)=>{
          if(s === 'star')
            return <Icon className='solid-star' onClick={this.handleClick} onMouseOut={this.handleMouseOut} onMouseOver={this.handleMouseOver} data-value={i+1} key={i} icon='fas fa-star' />
          else if(s === 'half')
            return <Icon className='half-star' onClick={this.handleClick} onMouseOut={this.handleMouseOut} onMouseOver={this.handleMouseOver} data-value={i+1} key={i} icon='fas fa-star-half-alt' />
          else 
            return <Icon className='empty-star' onClick={this.handleClick} onMouseOut={this.handleMouseOut} onMouseOver={this.handleMouseOver} data-value={i+1} key={i} icon='far fa-star' />
        })}
      </div>
    )
  } 
}

Rating.propTypes = {
  value: PropTypes.number,
  className: PropTypes.string,
  input: PropTypes.bool,
  onClick: PropTypes.func,
}

export default Rating
