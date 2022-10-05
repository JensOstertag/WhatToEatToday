import React from 'react';

const websiteConfig = require("../../data/websiteconfig.json");

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="wrapper">
                    <hr />
                    <div className="footer-text">
                        <div className="footer-logo">
                            <img src={process.env.PUBLIC_URL + "/img/icon.svg"} alt="" />
                            What To Eat Today?
                        </div>
                        <span><p className="copyright">&copy; 2020 - {new Date().getFullYear()} &nbsp; </p></span><span><p>Jens Ostertag</p></span>
                        <p className="version"><img src={process.env.PUBLIC_URL + "/img/ico/gear.svg"} className="gear" alt="gear" /> Version: {websiteConfig.version}</p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;