import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Chart } from 'react-google-charts';

import SubmitButton from '../Widgets/SubmitButton';
import { NUMBER_OR_STRING_PROP_TYPE, PROBABILITY_TYPES_PROP_TYPE } from '../../helpers/propTypeHelper';
import { PROBABILITY_PIE_CHART_CONFIG } from '../../constants';
import { probabilityCalculatorResultBackAction, PUT__PROBABILITY_CALCULATOR__RESULT__BACK } from '../../actions/probabilityActions';

function ProbabilityVisualiser({
  probabilityCalculatorResultBackActionHandler,
  probabilityOne,
  probabilityTwo,
  probabilityResult,
  probabilityType,
}) {
  const formattedResult = parseFloat(probabilityResult).toFixed(4);
  const userMsg = `The ${probabilityType.toLowerCase()} probability using values ${probabilityOne} and ${probabilityTwo} is ${formattedResult}.`;

  return (
    <div className="central-column-layout-container">
      <div className="central-column-layout-container-inner">
        <form>
          <p>
            {userMsg}
          </p>

          <Chart
            chartType="PieChart"
            data={[['Yes', 'No'], ['Yes', probabilityResult], ['No', 1 - probabilityResult]]}
            graph_id="PieChart"
            height="400px"
            options={PROBABILITY_PIE_CHART_CONFIG}
            width="100%"
          />

          <SubmitButton
            forwardId={PUT__PROBABILITY_CALCULATOR__RESULT__BACK}
            handleSubmit={probabilityCalculatorResultBackActionHandler}
            text="Back"
          />
        </form>
      </div>
    </div>
  );
}

ProbabilityVisualiser.propTypes = {
  probabilityCalculatorResultBackActionHandler: PropTypes.func.isRequired,
  probabilityOne: NUMBER_OR_STRING_PROP_TYPE.isRequired,
  probabilityTwo: NUMBER_OR_STRING_PROP_TYPE.isRequired,
  probabilityResult: NUMBER_OR_STRING_PROP_TYPE.isRequired,
  probabilityType: PROBABILITY_TYPES_PROP_TYPE.isRequired,
};

const mapStateToProps = (state) => ({
  probabilityType: state.probability.probabilityType,
  probabilityOne: state.probability.probabilityOne,
  probabilityTwo: state.probability.probabilityTwo,
  probabilityResult: state.probability.probabilityResult,
  chartWidth: window.innerWidth,
  chartHeight: window.innerHeight * 0.45,
});

const mapDispatchToProps = (dispatch) => ({
  probabilityCalculatorResultBackActionHandler: () => dispatch(probabilityCalculatorResultBackAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProbabilityVisualiser);
