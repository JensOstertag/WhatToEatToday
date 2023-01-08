import React from 'react';

import Logo from '../logo/Logo';
import Gear from './Gear'

const websiteConfig = require("../../data/websiteconfig.json");

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="wrapper">
                    <hr />
                    <div className="footer-text">
                        <div className="footer-logo">
                            <Logo />
                            What To Eat Today?
                        </div>
                        <span><p className="copyright">&copy; 2020 - {new Date().getFullYear()} &nbsp; </p></span><span><p>Jens Ostertag</p></span>
                        <p className="version"><Gear className="gear" /> Version: {websiteConfig.version}</p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;