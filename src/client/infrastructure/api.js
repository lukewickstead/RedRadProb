import axios from 'axios';

const APPLICATION_JSON_HEADERS = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export function postProbabilityCalculation(type, probabilities) {
  const request = {
    type,
    probabilities: probabilities.map((x) => ({ rate: Number(x) })),
  };

  // TODO: Url base should be injected in through webpack.
  return axios.post('https://localhost:44326/api/ProbabilityCalculation/', request, APPLICATION_JSON_HEADERS);
}
