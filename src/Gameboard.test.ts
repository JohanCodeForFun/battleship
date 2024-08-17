// Create a Gameboard class/factory.
// Note that we have not yet created any User Interface. We should know our code is coming together by running the tests. You shouldn’t be relying on console.log or DOM methods to make sure your code is doing what you expect it to.
// Gameboards should be able to place ships at specific coordinates by calling the ship factory or class.
// Gameboards should have a receiveAttack function that takes a pair of coordinates, determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot.
// Gameboards should keep track of missed attacks so they can display them properly.
// Gameboards should be able to report whether or not all of their ships have been sunk.

import { Gameboard } from './Gameboard.ts';
import { Ship } from './Ship.ts';

describe('test gameboard', () => {
  it("should handle faulty coordinates by calling the ship class", () => {
    const ship = new Ship();

    const x = 12
    const y = -1
    const r = 90
    const name = "Carrier"

    expect(()=> {
      Gameboard.placeShip(x, y, r, name)
    }).toThrow("value y is outside of range, -1");
  });

  it.skip("should be able to place ships at specific coordinates by calling the ship factory or class", () => {
    const ship = new Ship();

    const x = 0
    const y = 0
    const r = 90
    const name = "Carrier"

    Gameboard.placeShip(x, y, r, name)

    expect(Gameboard.getShips(new Gameboard)).toEqual("hllo");


  })
  it("should have a receiveAttack function that takes a pair of coordinates, determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot", () => {})
  it("should keep track of missed attacks so they can display them properly", () => {})
  it("should be able to report whether or not all of their ships have been sunk", () => {})
})