import React from 'react';
import './Sun.css';

class Sun extends React.Component {
    render() {
        return (
            <svg className="svg-sun"
            width="100%"
            height="100%"
            viewBox="0 0 2134 2134"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            style={{"fillRule": "evenodd", "clipRule": "evenodd", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeMiterlimit": 1.5}}>
                <circle cx="1066.67" cy="1066.67" r="533.333" style={{"fill": "none", "strokeWidth": "166.67"}} />
                <path d="M1883.54,1066.67l166.666,-0" style={{"fill": "none", "strokeWidth": "166.67"}} />
                <path d="M1644.28,489.054l117.851,-117.851" style={{"fill": "none", "strokeWidth": "166.67"}} />
                <path d="M1066.67,249.799l-0,-166.667" style={{"fill": "none", "strokeWidth": "166.67"}} />
                <path d="M489.054,489.054l-117.851,-117.851" style={{"fill": "none", "strokeWidth": "166.67"}} />
                <path d="M249.799,1066.67l-166.667,-0" style={{"fill": "none", "strokeWidth": "166.67"}} />
                <path d="M489.054,1644.28l-117.851,117.851" style={{"fill": "none", "strokeWidth": "166.67"}} />
                <path d="M1066.67,1883.54l-0,166.666" style={{"fill": "none", "strokeWidth": "166.67"}} />
                <path d="M1644.28,1644.28l117.851,117.851" style={{"fill": "none", "strokeWidth": "166.67"}} />
            </svg>
        );
    }
}

export default Sun;