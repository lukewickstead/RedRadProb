export default function isNumber(input) {
  const re = /^\d+\.?(\d+)?$/;
  return re.test(input);
}
