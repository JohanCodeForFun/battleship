type Player = {
  name: string;
}

export class GameControls {
  static players: Player[] = [];

  constructor() {}

  static addPlayer(player: Player) {
    GameControls.players.push(player)
  }

  static getPlayers() {
    return GameControls.players;
  }
}