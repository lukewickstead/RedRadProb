import React from 'react';
import PropTypes from 'prop-types';

import QuestionOption from '../Widgets/QuestionOption';

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
        title: 'Either',
        subTitle: '',
        value: 'Either',
      },
      {
        title: 'Or',
        subTitle: '',
        value: 'Or',
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
