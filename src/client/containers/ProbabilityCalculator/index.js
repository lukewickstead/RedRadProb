import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { NUMBER_OR_STRING_PROP_TYPE, PROBABILITY_TYPES_PROP_TYPE__OPTIONAL } from '../../helpers/propTypeHelper';
import SubmitButton from '../../components/Widgets/SubmitButton';
import QuestionNumber from '../../components/Widgets/QuestionNumber';
import ProbabilityTypeOptions from '../../components/ProbabilityTypeOptions';

import {
  PROBABILITY__INPUT_ONE__ID,
  PROBABILITY__INPUT_ONE__MAX_LENGTH,
  PROBABILITY__INPUT_ONE__FIELD_NAME,
  PROBABILITY__INPUT_ONE__LABEL,
  PROBABILITY__INPUT_TWO__ID,
  PROBABILITY__INPUT_TWO__MAX_LENGTH,
  PROBABILITY__INPUT_TWO__FIELD_NAME,
  PROBABILITY__INPUT_TWO__LABEL,
} from '../../constants';

import {
  probabilityCalculatorNextAction,
  PUT__PROBABILITY_CALCULATOR__NEXT,
} from '../../actions/probabilityActions';

import validateProbability from './probabilityCalculatorValidation';

class ProbabilityCalculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputOne: props.inputOneGlobal,
      inputOneIsVisited: false,
      inputOneValidationMessage: this.isValid(props.inputOneGlobal),
      inputTwo: props.inputTwoGlobal,
      inputTwoIsVisited: false,
      inputTwoValidationMessage: this.isValid(props.inputTwoGlobal),
      probabilityTypeIsInvalid: props.probabilityTypeGlobal.length === 0,
      probabilityTypeIsVisited: false,
      probabilityType: props.probabilityTypeGlobal,
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    const validationMsg = name === 'probabilityType' ? this.isValidOption(value) : this.isValid(value);

    this.setState({
      [name]: value,
      [`${name}IsInvalid`]: validationMsg.length > 0,
      [`${name}ValidationMessage`]: validationMsg,
    });
  }

  onBlur = (event) => {
    const { name } = event.target;
    this.setState({
      [`${name}IsVisited`]: true,
    });
  }

  isValid = (value) => validateProbability(value);

  isValidOption = (value) => value.length > 0;

  isFormInValid = () => {
    const {
      inputOneValidationMessage,
      inputTwoValidationMessage,
      probabilityTypeIsInvalid,
    } = this.state;

    return (inputOneValidationMessage || inputTwoValidationMessage || probabilityTypeIsInvalid);
  }

  handleSubmit = (event) => {
    if (this.isFormInValid()) {
      this.setState({
        inputOneIsVisited: true,
        inputTwoIsVisited: true,
        probabilityTypeIsVisited: true,
      });

      return;
    }

    const { probabilityCalculatorNextActionHandler } = this.props;
    const { probabilityType, inputOne, inputTwo } = this.state;
    probabilityCalculatorNextActionHandler(probabilityType, inputOne, inputTwo);
    event.preventDefault();
  }

  render() {
    const {
      inputOneIsVisited,
      inputOneValidationMessage,
      inputOne,
      inputTwoIsVisited,
      inputTwoValidationMessage,
      inputTwo,
      probabilityType,
      probabilityTypeIsInvalid,
      probabilityTypeIsVisited,
    } = this.state;

    return (
      <div className="central-column-layout-container">
        <h1>RedRadProb</h1>
        <div className="central-column-layout-container-inner">
          <form>

            <ProbabilityTypeOptions
              handleInputChange={this.handleInputChange}
              value={probabilityType}
              isInvalid={probabilityTypeIsInvalid}
              isVisited={probabilityTypeIsVisited}
            />

            <QuestionNumber
              handleInputChange={this.handleInputChange}
              onblur={this.onBlur}
              id={PROBABILITY__INPUT_ONE__ID}
              value={inputOne}
              name={PROBABILITY__INPUT_ONE__FIELD_NAME}
              title={PROBABILITY__INPUT_ONE__LABEL}
              maxLength={PROBABILITY__INPUT_ONE__MAX_LENGTH}
              isInvalid={inputOneValidationMessage.length > 0}
              isVisited={inputOneIsVisited}
              validationMessage={inputOneValidationMessage}
            />

            <QuestionNumber
              handleInputChange={this.handleInputChange}
              onblur={this.onBlur}
              id={PROBABILITY__INPUT_TWO__ID}
              value={inputTwo}
              name={PROBABILITY__INPUT_TWO__FIELD_NAME}
              title={PROBABILITY__INPUT_TWO__LABEL}
              maxLength={PROBABILITY__INPUT_TWO__MAX_LENGTH}
              isInvalid={inputTwoValidationMessage.length > 0}
              isVisited={inputTwoIsVisited}
              validationMessage={inputTwoValidationMessage}
            />

            <SubmitButton
              handleSubmit={this.handleSubmit}
              forwardId={PUT__PROBABILITY_CALCULATOR__NEXT}
              text="Calculate"
            />
          </form>
        </div>
      </div>
    );
  }
}

ProbabilityCalculator.propTypes = {
  probabilityCalculatorNextActionHandler: PropTypes.func.isRequired,
  inputOneGlobal: NUMBER_OR_STRING_PROP_TYPE.isRequired,
  inputTwoGlobal: NUMBER_OR_STRING_PROP_TYPE.isRequired,
  probabilityTypeGlobal: PROBABILITY_TYPES_PROP_TYPE__OPTIONAL.isRequired,
};

const mapStateToProps = (state) => ({
  probabilityTypeGlobal: state.probability.probabilityType,
  inputOneGlobal: state.probability.probabilityOne,
  inputTwoGlobal: state.probability.probabilityTwo,
});

const mapDispatchToProps = (dispatch) => ({
  probabilityCalculatorNextActionHandler: (type, valueOne, valueTwo) => dispatch(probabilityCalculatorNextAction(type, valueOne, valueTwo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProbabilityCalculator);
