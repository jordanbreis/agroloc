import { rentApi } from './rent-api';

describe('rentApi', () => {
  it('should work', () => {
    expect(rentApi()).toEqual('rent-api');
  });
});
