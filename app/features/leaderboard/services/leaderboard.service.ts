import database from "@react-native-firebase/database"

import {LeaderboardUser} from "@features/leaderboard/types/leaderboard.types"

export class LeaderboardService {
  async publicResult(user: LeaderboardUser) {
    await database().ref("leaderboard").push(user)
  }
}

export const leaderboardServiceSingleton = new LeaderboardService()
