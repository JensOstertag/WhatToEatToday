import React from 'react';
import './Moon.css';

class Sun extends React.Component {
    render() {
        return (
            <svg className="svg-moon"
            width="100%"
            height="100%"
            viewBox="0 0 2134 2134"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            style={{"fillRule": "evenodd", "clipRule": "evenodd", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeMiterlimit": 1.5}}>
                <path d="M2050,1444.56c-161.54,356.888 -520.885,605.438 -937.825,605.438c-567.833,0 -1028.84,-461.009 -1028.84,-1028.84c0,-416.939 248.55,-776.285 605.438,-937.825c-58.462,129.161 -91.017,272.511 -91.017,423.404c0,567.834 461.009,1028.84 1028.84,1028.84c150.894,0 294.244,-32.554 423.404,-91.017Z" style={{"fill": "none", "strokeWidth": "166.67"}} />
            </svg>
        );
    }
}

export default Sun;