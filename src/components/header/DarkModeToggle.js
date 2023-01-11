import React from 'react';
import './DarkModeToggle.css';

import Sun from './Sun';
import Moon from './Moon';

import * as Darkmode from './darkmode.js';

class DarkModeToggle extends React.Component {
    render() {
        return (
            <div className="dark-mode-toggle darkmode-transition" onClick={() => {
                Darkmode.toggleDarkmode();
            }}>
                <div className="dark-mode-toggle-highlight darkmode-transition">
                    <Sun />
                    <Moon />
                </div>
            </div>
        );
    }
}

export default DarkModeToggle;