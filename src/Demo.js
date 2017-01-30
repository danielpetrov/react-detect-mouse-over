import { MouseHoveringDetection } from './'

import React, { PureComponent as Component, PropTypes } from 'react'

class Demo extends Component {
    render() {
        const { isHoveringOver } = this.props

        if (isHoveringOver) {
            return (
                <table>
                    <thead>
                        <tr>
                            <th>Head 1</th>
                            <th>Head 2</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>This is an HTML when mouse is hovering over</td>
                            <td>Over</td>
                        </tr>
                    </tbody>
                </table>
            )
        } else {
            return (
                <div>Mouse is not hovering over</div>
            )
        }
    }
}

Demo.propTypes = {
    isHoveringOver: PropTypes.bool.isRequired
}

export default MouseHoveringDetection(Demo)
