import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route, Router } from 'react-router-dom';

import ProbabilityCalculator from '../../containers/ProbabilityCalculator';
import ProbabilityVisualiser from '../ProbabilityVisualiser';

import { STORE_PROP_TYPE, HISTORY_PROP_TYPE } from '../../helpers/propTypeHelper';
import { URL__PROBABILITY_CALCULATOR, URL__PROBABILITY_CALCULATOR__RESULT } from '../../constants';

function App({
  store,
  history,
}) {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route exact path={URL__PROBABILITY_CALCULATOR} component={ProbabilityCalculator} />
          <Route exact path={URL__PROBABILITY_CALCULATOR__RESULT} component={ProbabilityVisualiser} />
        </Switch>
      </Router>
    </Provider>
  );
}

App.propTypes = {
  store: STORE_PROP_TYPE.isRequired,
  history: HISTORY_PROP_TYPE.isRequired,
};

export default App;
