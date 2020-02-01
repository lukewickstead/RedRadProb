import React from 'react';
import PropTypes from 'prop-types';

function SubmitButton(
  {
    forwardId,
    handleSubmit,
    text,
  },
) {
  return (
    <div className="submit-button-wrapper">
      <button id={forwardId} className="submit" type="button" onClick={handleSubmit}>{text}</button>
    </div>
  );
}

SubmitButton.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  forwardId: PropTypes.string.isRequired,
};

export default SubmitButton;
