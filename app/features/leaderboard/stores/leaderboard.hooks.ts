import {leaderboardStoreSingleton} from "@features/leaderboard/stores/leaderboard.store"

export function useLeaderboardStore() {
  return leaderboardStoreSingleton
}
