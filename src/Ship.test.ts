import { Ship } from "./Ship";

/*
  Begin your app by creating the Ship class/factory (your choice).
  x Your ‘ships’ will be objects that include their length, the number of times they’ve been hit and whether or not they’ve been sunk.
  - REMEMBER you only have to test your object’s public interface. Only methods or properties that are used outside of your ‘ship’ object need unit tests.
  x Ships should have a hit() function that increases the number of ‘hits’ in your ship.
  - isSunk() should be a function that calculates whether a ship is considered sunk based on its length and the number of hits it has received.
*/

describe('ship', () => {
  it('it should have 0 hits initially', () => {
    const ship = new Ship();
    const shipId = 0;

    expect(ship.getShipHealth(shipId)).toBe(5);
  })

  it('should decrease hits when hit with id is called', () => {
    const ship = new Ship();
    const carrier = ship.createShip({ name: 'Carrier', hits: 5, sunk: false});
    const shipId = 0;

    ship.hit(shipId);

    expect(ship.getShipHealth(shipId)).toBe(4);
  })

  it('should not become negative health value', () => {
    const ship = new Ship();
    const carrier = ship.createShip({ name: 'Carrier', hits: 5, sunk: false });
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
      { name: 'Carrier', hits: 5, sunk: false },
      { name: 'Battleship', hits: 4, sunk: false },
      { name: 'Cruiser', hits: 3, sunk: false },
      { name: 'Submarine', hits: 3, sunk: false },
      { name: 'Destroyer', hits: 2, sunk: false }
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