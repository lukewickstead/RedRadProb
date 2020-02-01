export default function getValidationContainerClassNames(isInvalid, isVisited) {
  return `validation-container validation-container-${isVisited ? 'visited' : 'not-visited'} validation-container-${isInvalid ? 'invalid' : 'valid'}`;
}
