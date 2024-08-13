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

  it('should have five ships for one player', () => {
    const ship = new Ship();

    const carrier = ship.createShip({name: 'Carrier',  size: 5});
    const battleship = ship.createShip({name: 'Battleship', size: 4});
    const cruiser = ship.createShip({name: 'Cruiser', size: 3});
    const submarine = ship.createShip({name: 'Submarine', size: 3});
    const destroyer = ship.createShip({name: 'Destroyter', size: 2});

    expect(ship.getShips().length).toBe(5);
  })

  it('it should have correct ship names', () => {
    const ship = new Ship();

    const shipsList = [
      {name: 'Carrier',  size: 5},
      {name: 'Battleship', size: 4},
      {name: 'Cruiser', size: 3},
      {name: 'Submarine', size: 3},
      {name: 'Destroyter', size: 2}
    ]

    const carrier = ship.createShip({name: 'Carrier',  size: 5});
    const battleship = ship.createShip({name: 'Battleship', size: 4});
    const cruiser = ship.createShip({name: 'Cruiser', size: 3});
    const submarine = ship.createShip({name: 'Submarine', size: 3});
    const destroyer = ship.createShip({name: 'Destroyter', size: 2});

    expect(ship.getShips()).toEqual(shipsList);
  })
})