import {
  GAME_TIMEOUT_MS,
  MAX_STREAK,
  SCORE_FOR_RIGHT_ANSWER,
} from "@features/game/constatants/game.constants"
import {
  GameStateGameOver,
  GameStateInProgress,
  GameStateType,
} from "@features/game/types/game.types"

export function createStateForNewGame(payload: {
  questionsIds: string[]
  date: Date
}): GameStateInProgress {
  const {questionsIds, date} = payload
  return {
    type: GameStateType.IN_PROGRESS,
    answers: [],
    // shuffle array
    questionIdsQueue: questionsIds.sort(() => 0.5 - Math.random()),
    questionIndex: 0,
    startTime: date.getTime(),
  }
}

export function processTimer(
  state: GameStateInProgress,
  date: Date,
): GameStateInProgress | GameStateGameOver {
  const time = date.getTime()
  if (time - state.startTime > GAME_TIMEOUT_MS) {
    return {
      ...state,
      type: GameStateType.GAME_OVER,
    }
  }
  return state
}

export function updateStateAfterAnswer(
  state: GameStateInProgress,
  payload: {isRight: boolean},
): GameStateInProgress | GameStateGameOver {
  const newState: GameStateInProgress = {
    ...state,
    questionIndex: state.questionIndex + 1,
    answers: [...state.answers, payload.isRight],
  }
  if (newState.questionIndex === newState.questionIdsQueue.length - 1) {
    return {
      ...newState,
      type: GameStateType.GAME_OVER,
    }
  }
  return newState
}

export function calculateScore(answers: boolean[]): number {
  let currentStreak = 0
  let result = 0
  answers.forEach(isRight => {
    if (isRight) {
      currentStreak = Math.min(currentStreak + 1, MAX_STREAK)
      result += currentStreak * SCORE_FOR_RIGHT_ANSWER
    } else {
      currentStreak = 0
    }
  })
  return result
}
