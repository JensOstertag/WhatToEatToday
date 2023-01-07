import React from 'react';
import { Link } from 'react-router-dom';

import Display from '../../components/display/Display';
import Displayable from '../../components/displayable/Displayable';

const food = require("../../data/food.json");

class Result extends React.Component {
    findPossibleFood(food, eatingHabits) {
        var possible = [];
        food.forEach((item, i) => {
            if(eatingHabits === "none") {
                possible.push(item);
            } else if(eatingHabits === "vegetarian" && item.vegetarian) {
                possible.push(item);
            } else if(eatingHabits === "vegan" && item.vegan) {
                possible.push(item);
            }
        });

        if(possible.length >= 1) {
            return possible[Math.floor(Math.random() * possible.length)];
        } else {
            return {
                "name": "No Item Found",
                "link": "not-found",
                "tips": []
            };
        }
    }

    constructor(props) {
        super(props);
        if(sessionStorage.getItem("food-type") === "" || sessionStorage.getItem("eating-habits") === "") {
            this.state = {
                "valid": false
            };
        } else {
            var foodType = sessionStorage.getItem("food-type");
            const eatingHabits = sessionStorage.getItem("eating-habits");
            var foundFood = [];
            var valid = true;

            if(foodType === "any") {
                // Randomize Food Type
                const foodTypes = ["complete", "fast-food", "restaurant"];
                foodType = foodTypes[Math.floor(Math.random() * foodTypes.length)];
            }

            if(foodType === "complete") {
                // Generate a complete Dinner
                const mainIngredients = food["main-ingredients"];
                foundFood.push(this.findPossibleFood(mainIngredients, eatingHabits));
                const garnish = food["garnish"];
                foundFood.push(this.findPossibleFood(garnish, eatingHabits));
            } else if(foodType === "garnish") {
                // Generate a Garnish only
                const garnish = food["garnish"];
                foundFood.push(this.findPossibleFood(garnish, eatingHabits));
            } else if(foodType === "main-ingredient") {
                // Generate a main Ingredient only
                const mainIngredients = food["main-ingredients"];
                foundFood.push(this.findPossibleFood(mainIngredients, eatingHabits));
            } else if(foodType === "fast-food") {
                // Generate a Dinner with frozen Goods
                const fastFood = food["fast-food"];
                foundFood.push(this.findPossibleFood(fastFood, eatingHabits));
            } else if(foodType === "restaurant") {
                // Generate a Restaurant
                const restaurants = food["restaurants"];
                foundFood.push(this.findPossibleFood(restaurants, eatingHabits));
            } else {
                valid = false;
            }

            this.state = {
                "valid": valid === false ? valid : true,
                "foundFood": foundFood
            }
        }
    }

    render() {
        return (
            <div>
                <section>
                    <p>I'd recommend you to have the following Dinner:</p>
                    <Display>
                        {
                            this.state.foundFood.map((found, i) => (
                                <Displayable key={i} name={found.title} title={found.name} description={found.tips} image={found.link} />
                            ))
                        }
                    </Display>
                    <p>
                        Not happy? Feel free to generate a new meal:
                    </p>
                    <Link to="/food-selection">
                        <button className="simple-button">
                            <p className="nomargin">Regenerate</p>
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

export default Result;