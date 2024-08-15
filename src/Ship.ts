type ship = {
  name: string;
  size: number;
};

export class Ship {
  private hits: number
  private ships: ship[];

  constructor() {
    this.hits = 0
    this.ships = [
      {name: 'Carrier',  size: 5},
      {name: 'Battleship', size: 4},
      {name: 'Cruiser', size: 3},
      {name: 'Submarine', size: 3},
      {name: 'Destroyer', size: 2}
    ];
  }

  hit(shipId) {
    if (this.ships[shipId].size > 0) {
      this.ships[shipId].size -= 1;
    } else {
      return;
    }
  }

  createShip(ship: ship) {
    this.ships.push(ship)
  }

  getShipHealth(id) {
    return this.ships[id].size
  }

  getShips() {
    console.log("get ships:", this.ships)
    return this.ships
  }
}