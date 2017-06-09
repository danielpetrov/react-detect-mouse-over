import React, { PureComponent as Component } from 'react'
import { MouseHoveringDetection } from '../src'

class Hoverable extends Component {
  style = {
    height: '4rem',
    width: '20rem',
    margin: 'auto',
    borderRadius: '1rem',
    backgroundColor: 'gold',
    textAlign: 'center',
    fontSize: '3rem',
    color: 'white'
  }

  render() {
    const { isHoveringOver } = this.props

    return (
      <div style={this.style}>
        {isHoveringOver ? 'Hovering' : 'Not hovering'}
      </div>
    )
  }
}

export default MouseHoveringDetection(Hoverable)
