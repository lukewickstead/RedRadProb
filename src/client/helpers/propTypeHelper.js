import PropTypes from 'prop-types';
import { PROBABILITY_TYPE__EITHER, PROBABILITY_TYPE__OR } from '../constants';

export const STORE_PROP_TYPE = PropTypes.shape({
  dispatch: PropTypes.func.isRequired,
});

export const HISTORY_PROP_TYPE = PropTypes.shape({
  action: PropTypes.string.isRequired,
});

export const NUMBER_OR_STRING_PROP_TYPE = PropTypes.oneOfType(
  [PropTypes.string.isRequired, PropTypes.number.isRequired],
);

export const PROBABILITY_TYPES_PROP_TYPE = PropTypes.oneOf([PROBABILITY_TYPE__EITHER, PROBABILITY_TYPE__OR]);
export const PROBABILITY_TYPES_PROP_TYPE__OPTIONAL = PropTypes.oneOf([PROBABILITY_TYPE__EITHER, PROBABILITY_TYPE__OR, '']);

export const LOCATION_PROP_TYPE = PropTypes.shape({
  pathname: PropTypes.string.isRequired,
});

export const QUESTIONS_CONFIG_PROP_TYPE = PropTypes.shape({
  name: PropTypes.string,
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ),
});
