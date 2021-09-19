export enum GameStateType {
  NONE,
  IN_PROGRESS,
  GAME_OVER,
}
export interface GameStateNone {
  type: GameStateType.NONE
}

export interface GameStateInProgress {
  type: GameStateType.IN_PROGRESS
  questionIndex: number
  questionIdsQueue: string[]
  answers: boolean[]
  startTime: number
}

export interface GameStateGameOver {
  type: GameStateType.GAME_OVER
  questionIdsQueue: string[]
  answers: boolean[]
}

export type GameState = GameStateNone | GameStateInProgress | GameStateGameOver
