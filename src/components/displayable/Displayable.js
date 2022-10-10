import React from 'react';
import './Displayable.css';

class Displayable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "name": this.props.name,
            "title": this.props.title,
            "description": this.props.description,
            "image": process.env.PUBLIC_URL + "/img/displayables/" + this.props.image
        }
    }
    
    render() {
        return (
            <div className="displayable">
                <img src={this.state.image} />
                <p>{this.state.title}</p>
                {
                    this.state.description.map((item, i) => (
                        <p className='nomargin' key={i}><span>{item}</span></p>
                    ))
                }
            </div>
        );
    }
}

export default Displayable;