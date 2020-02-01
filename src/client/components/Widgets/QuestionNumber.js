import React from 'react';
import PropTypes from 'prop-types';

import { NUMBER_OR_STRING_PROP_TYPE } from '../../helpers/propTypeHelper';
import isNumber from '../../helpers/numberHelper';
import getValidationContainerClassNames from '../../helpers/validationHelper';
import ValidationMessage from './ValidationMessage';

function ensureOnlyNumberEvent(event, handleInputChange) {
  if (isNumber(event.target.value)) {
    handleInputChange(event);
  }
}

function QuestionNumber({
  handleInputChange,
  id,
  isInvalid,
  isVisited,
  maxLength,
  name,
  onblur,
  title,
  validationMessage,
  value,
}) {
  return (
    <div className={`question-number-container ${getValidationContainerClassNames(isInvalid, isVisited)}`}>
      <h2>{title}</h2>
      <div className="validation-input-wrapper">
        <input
          type="text"
          id={id}
          name={name}
          value={value}
          maxLength={maxLength}
          onChange={(e) => ensureOnlyNumberEvent(e, handleInputChange)}
          onBlur={onblur}
        />
      </div>

      { isInvalid && isVisited && <ValidationMessage validationMessage={validationMessage} /> }
    </div>
  );
}

QuestionNumber.defaultProps = {
  title: '',
};

QuestionNumber.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  isInvalid: PropTypes.bool.isRequired,
  isVisited: PropTypes.bool.isRequired,
  maxLength: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onblur: PropTypes.func.isRequired,
  title: PropTypes.string,
  validationMessage: PropTypes.string.isRequired,
  value: NUMBER_OR_STRING_PROP_TYPE.isRequired,
};

export default QuestionNumber;
