export class LobbyStore {
  private playerName = ""

  setPlayerName(name: string): void {
    this.playerName = name
  }
}

export const lobbyStoreSingleton = new LobbyStore()
