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

  hit() {
    this.hits += 1;
  }

  getHits() {
    return this.hits
  }

  createShip(ship: ship) {
    this.ships.push(ship)
  }

  getShips() {
    return this.ships
  }
}