export const PUT__PROBABILITY_CALCULATOR__NEXT = 'PUT__PROBABILITY_RESULT_REQUEST';
export const PUT__PROBABILITY_CALCULATOR__RESULT = 'PUT__PROBABILITY_CALCULATOR__RESULT';
export const PUT__PROBABILITY_CALCULATOR__RESULT__BACK = 'PUT__PROBABILITY_CALCULATOR__RESULT__BACK';

export function probabilityCalculatorNextAction(probabilityType, probabilityOne, probabilityTwo) {
  return {
    type: PUT__PROBABILITY_CALCULATOR__NEXT,
    data: {
      probabilityType,
      probabilityOne,
      probabilityTwo,
    },
  };
}

export function probabilityCalculatorResultBackAction() {
  return {
    type: PUT__PROBABILITY_CALCULATOR__RESULT__BACK,
  };
}

export function putProbabilityCalculatorResult(probabilityType, probabilityOne, probabilityTwo, probabilityResult) {
  return {
    type: PUT__PROBABILITY_CALCULATOR__RESULT,
    data: {
      probabilityType,
      probabilityOne,
      probabilityTwo,
      probabilityResult,
    },
  };
}
