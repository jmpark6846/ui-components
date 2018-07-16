import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Icon from '../Icon/Icon'
import './Rating.css'

const maxRating = 5
class Rating extends React.Component{

  render(){
    const { value, className, reviewCount } = this.props
    const star = parseInt(value)
    const half = value*10%10 !== 0 ? 1 : 0
    const arr = Array(maxRating).fill('star', 0, star).fill('half', star, star+half).fill('blank', star+half, maxRating)

    return (
      <div className={classNames('rating', className)}>
        {arr.map((s,i)=>{
          if(s === 'star')
            return <Icon key={i} icon='fas fa-star' />
          else if(s === 'half')
            return <Icon key={i} icon='fas fa-star-half-alt' />
          else 
            return <Icon key={i} icon='far fa-star' />
        })}
        { reviewCount &&
          <span className='review-count'>
            구매평 {reviewCount}
          </span>
        }
      </div>
    )
  } 
}

Rating.propTypes = {
  value: PropTypes.number,
  reviewCount: PropTypes.number,
  className: PropTypes.string,
}

export default Rating
