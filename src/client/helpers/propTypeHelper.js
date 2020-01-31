import PropTypes from 'prop-types';

export const STORE_PROP_TYPE = PropTypes.shape({
  dispatch: PropTypes.func.isRequired,
});

export const HISTORY_PROP_TYPE = PropTypes.shape({
  action: PropTypes.string.isRequired,
});

export const LOCATION_PROP_TYPE = PropTypes.shape({
  pathname: PropTypes.string.isRequired,
});
