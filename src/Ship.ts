type ship = {
  name: string;
  size: number;
};

export class Ship {
  private hits: number
  private ships: ship[]

  constructor() {
    this.hits = 0
    this.ships = [];
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
    return this.ships
  }
}