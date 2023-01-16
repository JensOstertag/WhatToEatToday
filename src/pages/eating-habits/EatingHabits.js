import React from 'react';

import Selectable from '../../components/selectable/Selectable';
import Selector from '../../components/selector/Selector';

class EatingHabits extends React.Component {
  render() {
    return (
      <section>
        <p>Please Select one of the following Eating Habits.</p>
        <Selector>
          <Selectable name="vegetarian" title="Vegetarian" description={["Only show vegetarian food options"]} image="eating-habits-vegetarian.svg" linkTo="/result" selectKey="eating-habits" selectValue="vegetarian" />
          <Selectable name="vegan" title="Vegan" description={["Only show vegan food options"]} image="eating-habits-vegan.svg" linkTo="/result" selectKey="eating-habits" selectValue="vegan" />
          <Selectable name="none" title="None" description={["Show all options"]} image="eating-habits-none.svg" linkTo="/result" selectKey="eating-habits" selectValue="none" />
        </Selector>
      </section>
    );
  }
}

export default EatingHabits;
