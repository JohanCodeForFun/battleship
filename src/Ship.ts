export type ship = {
  name: string;
  sunk: boolean;
  hits: number;
};

export class Ship {
  private ships: ship[];

  constructor() {
    this.ships = [
      {name: 'Carrier',  hits: 5, sunk: false},
      {name: 'Battleship', hits: 4, sunk: false},
      {name: 'Cruiser', hits: 3, sunk: false},
      {name: 'Submarine', hits: 3, sunk: false},
      {name: 'Destroyer', hits: 2, sunk: false}
    ];
  }

  set ship(shipData) {
    let shipToUpdate = this.ships.find(ship => ship.name === shipData.name);

    shipToUpdate = {...shipData}
  }

  hit(shipId) {
    if (this.ships[shipId].hits > 0) {
      this.ships[shipId].hits -= 1;
    } else {
      this.ships[shipId].sunk = true;
    }
  }

  createShip(ship: ship) {
    this.ships.push(ship)
  }

  getShipHealth(id) {
    return this.ships[id].hits
  }

  getShips() {
    return this.ships
  }
}