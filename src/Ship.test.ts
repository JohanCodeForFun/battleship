import { Ship } from "./Ship";

describe('ship', () => {
  it('it should have 0 hits initially', () => {
    const ship = new Ship();
    const shipId = 0;

    expect(ship.getShipHealth(shipId)).toBe(5);
  })

  it('should decrease size when hit with id is called', () => {
    const ship = new Ship();
    const carrier = ship.createShip({ name: 'Carrier', size: 5 });
    const shipId = 0;

    ship.hit(shipId);

    expect(ship.getShipHealth(shipId)).toBe(4);
  })

  it('should not become negative health value', () => {
    const ship = new Ship();
    const carrier = ship.createShip({ name: 'Carrier', size: 5 });
    const shipId = 0;

    ship.hit(shipId);
    ship.hit(shipId);
    ship.hit(shipId);
    ship.hit(shipId);
    ship.hit(shipId);
    ship.hit(shipId);

    expect(ship.getShipHealth(shipId)).toBe(0);
  })

  it('should have five ships for one player', () => {
    const ship = new Ship();

    expect(ship.getShips().length).toBe(5);
  })

  it('it should have correct ship names', () => {
    const ship = new Ship();
    const shipsList = [
      { name: 'Carrier', size: 5 },
      { name: 'Battleship', size: 4 },
      { name: 'Cruiser', size: 3 },
      { name: 'Submarine', size: 3 },
      { name: 'Destroyer', size: 2 }
    ]

    expect(ship.getShips()).toEqual(shipsList);
  })

  it('should damage specific ship', () => {
    const ship = new Ship();
    const shipId = 1;

    ship.hit(shipId);

    expect(ship.getShipHealth(shipId)).toBe(3);
  })
})