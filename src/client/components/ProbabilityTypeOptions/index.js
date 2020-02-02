import React from 'react';
import PropTypes from 'prop-types';

import QuestionOption from '../Widgets/QuestionOption';

import {
  PROBABILITY_TYPE__EITHER,
  PROBABILITY_TYPE__EITHER__TITLE,
  PROBABILITY_TYPE__AND,
  PROBABILITY_TYPE__AND__TITLE,
} from '../../constants';

function ProbabilityTypeOptions(
  {
    handleInputChange,
    value,
    isInvalid,
    isVisited,
  },
) {
  const questionConfig = {
    name: 'probabilityType',
    questions: [
      {
        title: PROBABILITY_TYPE__EITHER__TITLE,
        value: PROBABILITY_TYPE__EITHER,
      },
      {
        title: PROBABILITY_TYPE__AND__TITLE,
        value: PROBABILITY_TYPE__AND,
      },
    ],
  };

  return (
    <QuestionOption
      title="Probability Type"
      handleInputChange={handleInputChange}
      value={value}
      questionConfig={questionConfig}
      isInvalid={isInvalid}
      isVisited={isVisited}
    />
  );
}

ProbabilityTypeOptions.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  isInvalid: PropTypes.bool.isRequired,
  isVisited: PropTypes.bool.isRequired,
};

export default ProbabilityTypeOptions;
