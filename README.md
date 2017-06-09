# react-detect-mouse-over

Detect mouse hovering over [React](https://facebook.github.io/react) component.

## Installation

Using [npm](https://www.npmjs.com/):

    $ npm install --save react-detect-mouse-over

## Usage

````js
import React, { PureComponent as Component } from 'react'
import { MouseHoveringDetection } from 'react-detect-mouse-over'

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
````
