import React from 'react';
import {Link} from 'react-router-dom';

import Logo from '../logo/Logo';
import DarkModeToggle from './DarkModeToggle';

import * as Sidebar from './sidebar.js';

class Header extends React.Component {
    render() {
        return (
            <nav>
                <div className="logo">
                    <Link to={process.env.PUBLIC_URL}>
                        <Logo />
                        <p>What To Eat Today?</p>
                    </Link>
                </div>
                <ul className="nav-links nav-default">
                    <li><Link to={process.env.PUBLIC_URL + "/"}><span>Home</span></Link></li>
                    <hr />
                    <div className="dark-mode-toggle-container">
                        <DarkModeToggle />
                    </div>
                </ul>

                <div className="burger" onClick={Sidebar.toggleSidebar}>
                    <div className="l1"></div>
                    <div className="l2"></div>
                    <div className="l3"></div>
                </div>

                <div className="alpha alpha-default"></div>
            </nav>
        );
    }
}

export default Header;