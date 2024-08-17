import { ship } from "./Ship";

export class Gameboard {
  static getShips(gameboardInstance: Gameboard): ship[] {
    return gameboardInstance.shipsOnBoard;
  }
  public shipsOnBoard: ship[] = [{ name: "hello", hits: 12, sunk: false }];

  constructor() {}

  static placeShip(x: number, y: number, r: number, name: string) {

    if (x < 0 || x !== Number(x)) {
      throw new Error (`value x is outside of range, ${x}`)
    }
    if (y < 0 || y !== Number(y)) {
      throw new Error (`value y is outside of range, ${y}`)
    }

    return {x, y, r, name} 
  }

  getShips(): any {
    return [{ name: "test", hits: 5}]
  }
}