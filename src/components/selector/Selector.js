import React from 'react';
import './Selector.css';

class Selector extends React.Component {
    render() {
        return (
            <div className="selector">
                {this.props.children}
            </div>
        )
    }
}

export default Selector;