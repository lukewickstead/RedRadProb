import { expect } from 'chai';
import { all, fork } from 'redux-saga/effects';

import watchMany from './index';
import probabilitySaga from './probabilitySaga';

describe('when calling the index route saga', () => {
  it('can watch for all required sagas', () => {
    const saga = watchMany();

    expect(saga.next().value).to.deep.equal(
      all([
        fork(probabilitySaga),
      ]),
    );
  });
});
