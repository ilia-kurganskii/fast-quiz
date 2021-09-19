import {GameStateNone, GameStateType} from "@features/game/types/game.types"

export const SCORE_FOR_RIGHT_ANSWER = 10
export const MAX_STREAK = 5
export const GAME_TIMEOUT_MS = 60 * 1000

export const GAME_STATE_NONE: GameStateNone = {
  type: GameStateType.NONE,
}
