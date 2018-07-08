import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import ToggleButton from './ToggleButton';
import './NavMenu.css'

class NavMenu extends React.Component {
  constructor(props){
    super(props)

    this.state={ open: false }
  }

  handleToggle = () => {
    this.setState({open:!this.state.open})
  
  }
  render(){
    const {pullRight, children} = this.props
    const classes = classNames('nav-menu', {'ml-auto': pullRight }, {'hide': !this.state.open})
    return (
      <React.Fragment>
        <ToggleButton onClick={this.handleToggle}/>
        <ul className={classes}>
          {children}
        </ul>
      </React.Fragment>
    )
  }
  
}

NavMenu.propTypes = {
  pullRight: PropTypes.bool,
  children: PropTypes.node,
}

export default NavMenu
