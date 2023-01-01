import React from 'react';
import {Link} from 'react-router-dom';
import './Selectable.css';

const websiteConfig = require("../../data/websiteconfig.json");

class Selectable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "name": this.props.name,
            "title": this.props.title,
            "description": this.props.description,
            "image": process.env.PUBLIC_URL + "/img/selectables/" + this.props.image,
            "linkTo": this.props.linkTo,
            "selectKey": this.props.selectKey,
            "selectValue": this.props.selectValue
        }
    }

    setStorage() {
        sessionStorage.setItem(this.state.selectKey, this.state.selectValue);
    }
    
    render() {
        return (
            <Link to={this.state.linkTo} onClick={() => {
                this.setStorage();
            }} className="selectable">
                <img id={"img-" + this.state.image.replaceAll("/", "-")} src={this.state.image} alt={this.state.image} onError={() => {
                    if(!(websiteConfig.debug)) {
                        document.querySelectorAll("#img-" + this.state.image.replaceAll("/", "-")).forEach(image => {
                            image.style.display = "none";
                        });
                    }
                }} />
                <p>{this.state.title}</p>
                {
                    this.state.description.map((item, i) => (
                        <p className='nomargin' key={i}><span>{item}</span></p>
                    ))
                }
            </Link>
        );
    }
}

export default Selectable;