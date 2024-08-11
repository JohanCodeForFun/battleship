const Ship = require('./src/Ship.ts');

describe('ship', () => {
  it('test', () => {
    expect(Ship.hit).toBe(0);
  })
})