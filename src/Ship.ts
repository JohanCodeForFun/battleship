export class Ship {
  private hits: number
  private ships: number

  constructor() {
    this.hits = 0
    this.ships = 5;
  }

  hit() {
    this.hits += 1;
  }

  getHits() {
    return this.hits
  }

  getShips() {
    return this.ships
  }
}