import React from 'react';
import './Display.css';

class Display extends React.Component {
    render() {
        return (
            <div className="display">
                {this.props.children}
            </div>
        )
    }
}

export default Display;