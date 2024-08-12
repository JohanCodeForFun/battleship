export class Ship {
  private hits: number

  constructor() {
    this.hits = 0
  }

  hit() {
    this.hits += 1;
  }

  getHits() {
    return this.hits
  }
}