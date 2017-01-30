import React, { PureComponent as Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'

const isMouseOverElement = ({ elem, e }) => {
    const { pageY, pageX } = e
    const { left, right, bottom, top } = elem.getBoundingClientRect()

    return (pageX > left && pageX < right) && (pageY > top && pageY < bottom)
}

export const MouseHoveringDetection = DecoratedComponent => {
    class MouseHoveringDetection extends Component {
        constructor() {
            super()

            this.state = {
                isHoveringOver: false
            }
        }

        componentDidMount() {
            document.body.addEventListener('mousemove', this.onMouseMove)
        }

        componentWillUnmount() {
            document.body.removeEventListener('mousemove', this.onMouseMove)
        }

        onMouseMove = e => {
            const decoratedComponentDiv = findDOMNode(this.refs.decoratedComponent)

            this.setState({ isHoveringOver: isMouseOverElement({ elem: decoratedComponentDiv, e }) })
        }

        render() {
            const { isHoveringOver } = this.state

            return (
                <DecoratedComponent
                    ref={'decoratedComponent'}
                    {...this.props}
                    isHoveringOver={isHoveringOver}
                />
            )
        }
    }

    MouseHoveringDetection.displayName = `MouseHoveringDetection(${DecoratedComponent.displayName})`

    return MouseHoveringDetection
}
