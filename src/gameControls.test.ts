import { GameControls } from "./GameControls";

describe('game', () => {
  it('should add two players', () => {
    const player1 = { name: "John" };
    const player2 = { name: "Jane" };
    
    GameControls.addPlayer(player1);
    GameControls.addPlayer(player2);

    const result = [player1.name, player2.name];

    expect(GameControls.getPlayers().map(player => player.name)).toEqual(result);
    expect(GameControls.getPlayers().length).toBe(2);
  });
});