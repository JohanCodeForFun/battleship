import { Ship } from "./src/Ship";

describe('ship', () => {
  it('it should have 0 hits initially', () => {
    const ship = new Ship();

    expect(ship.getHits()).toBe(0);
  })

  it('should increment hits when hit is called', () => {
    const ship = new Ship();

    ship.hit();

    expect(ship.getHits()).toBe(1);
  })
})