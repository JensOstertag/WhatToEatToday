import React from 'react';

import Selectable from '../../components/selectable/Selectable';
import Selector from '../../components/selector/Selector';

class Home extends React.Component {
  render() {
    return (
      <section>
        <p>Please select a food type you want to generate.</p>
        <Selector>
          <Selectable name="" title="Complete Dinner" description={["Decide over a complete dinner with garnish and a main ingredient"]} image="" linkTo="/eating-habits" selectKey="food-type" selectValue="complete" />
          <Selectable name="" title="Garnish" description={["Decide over what to cook as a side dish"]} image="food-types-garnish.svg" linkTo="/eating-habits" selectKey="food-type" selectValue="garnish" />
          <Selectable name="" title="Main Ingredient" description={["Decide over what to cook as a main ingredient"]} image="" linkTo="/eating-habits" selectKey="food-type" selectValue="main" />
          <Selectable name="" title="Fast Food" description={["Decide over a Dinner made with frozen goods"]} image="food-types-frozen.svg" linkTo="/eating-habits" selectKey="food-type" selectValue="fast-food" />
          <Selectable name="" title="Restaurant" description={["Decide over what restaurant type to visit or from where to order"]} image="food-types-restaurant.svg" linkTo="/eating-habits" selectKey="food-type" selectValue="restaurant" />
          <Selectable name="" title="Surprise Me!" description={["Proceed with any option"]} image="food-types-surpriseme.svg" linkTo="/eating-habits" selectKey="food-type" selectValue="any" />
        </Selector>
      </section>
    );
  }
}

export default Home;
