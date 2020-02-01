export default function validateProbability(valueString) {
  if (valueString === '') {
    return 'Please provide a probability between 0 and 1.';
  }

  const value = Number(valueString);

  if (value < 0) {
    return 'Please enter a probability greater or equal to 0';
  }

  if (value > 1) {
    return 'Please enter a probability less than or equal to 1';
  }

  return '';
}
