import React from 'react';
import PropTypes from 'prop-types';

import ValidationMessage from './ValidationMessage';
import { QUESTIONS_CONFIG_PROP_TYPE } from '../../helpers/propTypeHelper';

function QuestionOption({
  handleInputChange, title, questionConfig, value, isInvalid, isVisited,
}) {
  const questionItems = questionConfig.questions.map((question) => (
    <li
      key={question.value}
      className={value === question.value ? 'selected' : ''}
    >
      <span className="radio-item" />
      <input
        type="radio"
        id={question.value}
        value={question.value}
        name={questionConfig.name}
        checked={value === question.value}
        onChange={handleInputChange}
      />

      <div className={`${question.subTitle.length > 0 ? 'question-title-with-subtitle' : 'question-title'}`}>
        <label htmlFor={question.value}>{question.title}</label>
        { question.subTitle
        && (
          <>
            <div className="question-subtitle">
              <label htmlFor={question.value}>{question.subTitle}</label>
            </div>
          </>
        )}
      </div>

    </li>
  ));

  return (
    <div className="question-option-container">
      <h2>{title}</h2>
      <ul>{questionItems}</ul>
      { isInvalid && isVisited && <ValidationMessage validationMessage="Select an option" /> }
    </div>
  );
}

QuestionOption.defaultProps = {
  title: '',
};

QuestionOption.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  isInvalid: PropTypes.bool.isRequired,
  isVisited: PropTypes.bool.isRequired,
  questionConfig: QUESTIONS_CONFIG_PROP_TYPE.isRequired,
  title: PropTypes.string,
  value: PropTypes.string.isRequired,
};

export default QuestionOption;
