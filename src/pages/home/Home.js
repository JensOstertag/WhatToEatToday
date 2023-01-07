import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <div>
                <section>
                    <h1>
                        Instruction
                    </h1>
                    <p>
                        "What To Eat Today?" is a website built to decide over weeknight meals when you don't have much time for prepping and cooking. <br />
                        By selecting a few preferations and eating habits, the app will randomly combine garnish and main ingredients so you can cook your dinner within a few minutes. 
                        However, you'll only be told what to cook, not how. You can prepare all components to your likings (keep them separated, mix them in the end, have a one-pot-meal, etc).
                    </p>
                    <Link to="/food-selection">
                        <button className="simple-button">
                            <p className="nomargin">Get Started</p>
                        </button>
                    </Link>
                </section>
                <section>
                    <h1>
                        Recommendations
                    </h1>
                    <p>
                        In case you have ideas for new ingredients or want to report a bug, please do so on the <a href="https://github.com/JensOstertag/WhatToEatToday/issues" target="_blank" rel="noopener noreferrer">GitHub repository</a>.
                    </p>
                </section>
            </div>
        );
    }
}

export default Home;