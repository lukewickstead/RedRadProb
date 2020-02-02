export const PROBABILITY__INPUT_ONE__ID = 'PROBABILITY__INPUT_ONE';
export const PROBABILITY__INPUT_ONE__MAX_LENGTH = 6;
export const PROBABILITY__INPUT_ONE__FIELD_NAME = 'inputOne';
export const PROBABILITY__INPUT_ONE__LABEL = 'First probability';

export const PROBABILITY__INPUT_TWO__ID = 'PROBABILITY__INPUT_TWO';
export const PROBABILITY__INPUT_TWO__MAX_LENGTH = PROBABILITY__INPUT_ONE__MAX_LENGTH;
export const PROBABILITY__INPUT_TWO__FIELD_NAME = 'inputTwo';
export const PROBABILITY__INPUT_TWO__LABEL = 'Second probability';

export const URL__PROBABILITY_CALCULATOR = '/';
export const URL__PROBABILITY_CALCULATOR__RESULT = '/Result';

export const PROBABILITY_TYPE__EITHER = 'EITHER';
export const PROBABILITY_TYPE__AND = 'AND';
export const PROBABILITY_TYPE__EITHER__TITLE = 'Either';
export const PROBABILITY_TYPE__AND__TITLE = 'AND';

export const PROBABILITY_PIE_CHART_CONFIG = {
  slices: [{ color: 'green' }, { color: 'red' }],
  legend: {
    position: 'bottom',
    alignment: 'center',
    textStyle: {
      color: 'black',
      fontSize: 32,
    },
  },
  tooltip: {
    showColorCode: true,
  },
  is3D: true,
  chartArea: {
    left: 0,
    top: 0,
    width: '100%',
    height: '80%',
  },
};
