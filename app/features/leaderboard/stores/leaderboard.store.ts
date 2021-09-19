import {
  LeaderboardService,
  leaderboardServiceSingleton,
} from "@features/leaderboard/services/leaderboard.service"

export class LeaderboardStore {
  private playerName = ""

  constructor(
    private readonly leaderboardService: LeaderboardService = leaderboardServiceSingleton,
  ) {}

  setPlayerName(name: string): void {
    this.playerName = name
  }

  async saveScore(score: number) {
    await this.leaderboardService.publicResult({
      score,
      name: this.playerName,
    })
  }
}

export const leaderboardStoreSingleton = new LeaderboardStore()
