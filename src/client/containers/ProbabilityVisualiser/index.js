/* eslint-disable react/prefer-stateless-function */
// TODO: Remove or create as function
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { NUMBER_OR_STRING_PROP_TYPE, PROBABILITY_TYPES_PROP_TYPE } from '../../helpers/propTypeHelper';
import SubmitButton from '../../components/Widgets/SubmitButton';

import {
  PUT__PROBABILITY_CALCULATOR__RESULT__BACK,
  probabilityCalculatorResultBackAction,
} from '../../actions/probabilityActions';
import { PROBABILITY_TYPE__EITHER } from '../../constants';

class ProbabilityVisualiser extends React.Component {
  render() {
    const {
      probabilityCalculatorResultBackActionHandler,
      probabilityOne,
      probabilityTwo,
      probabilityResult,
      probabilityType,
    } = this.props;

    // TODO: as helper method and use enum value...
    const userMsg = `The probability of ${probabilityType === PROBABILITY_TYPE__EITHER ? probabilityType.toLowerCase() : ''} ${probabilityOne} or ${probabilityTwo}  is ${probabilityResult}.`;

    return (
      <div className="central-column-layout-container">
        <h1>RedRadProb</h1>
        <div className="central-column-layout-container-inner">
          <form>
            <p>
              {userMsg}
            </p>

            <SubmitButton
              handleSubmit={probabilityCalculatorResultBackActionHandler}
              forwardId={PUT__PROBABILITY_CALCULATOR__RESULT__BACK}
              text="Back"
            />
          </form>
        </div>
      </div>
    );
  }
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
});

const mapDispatchToProps = (dispatch) => ({
  probabilityCalculatorResultBackActionHandler: () => dispatch(probabilityCalculatorResultBackAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProbabilityVisualiser);
