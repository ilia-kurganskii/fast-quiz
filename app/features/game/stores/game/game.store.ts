import {action, computed, makeObservable, observable} from "mobx"

import {GAME_STATE_NONE, GAME_TIMEOUT_MS} from "@features/game/constatants/game.constants"
import {
  QuestionsStore,
  questionsStoreSingleton,
} from "@features/game/stores/questions/questions.store"
import {GameState, GameStateType} from "@features/game/types/game.types"
import {Question} from "@features/game/types/question.types"

import {
  calculateScore,
  createStateForNewGame,
  processTimer,
  updateStateAfterAnswer,
} from "./game.store.utils"

export class GameStore {
  constructor(private questionsStore: QuestionsStore = questionsStoreSingleton) {
    makeObservable(this)
  }

  @observable
  private state: GameState = GAME_STATE_NONE

  @computed
  get isGameOver() {
    return this.state.type === GameStateType.GAME_OVER
  }

  @computed
  get question(): Question | undefined {
    if (this.state.type === GameStateType.IN_PROGRESS) {
      const questionId = this.state.questionIdsQueue[this.state.questionIndex]
      return this.questionsStore.getQuestionById(questionId)
    }
  }

  @computed
  get score(): number {
    switch (this.state.type) {
      case GameStateType.NONE:
        return 0
      case GameStateType.IN_PROGRESS:
      case GameStateType.GAME_OVER:
        return calculateScore(this.state.answers)
    }
  }

  getRestTime(date: Date): number {
    if (this.state.type === GameStateType.IN_PROGRESS) {
      return Math.max(0, GAME_TIMEOUT_MS - (date.getTime() - this.state.startTime))
    }
    return 0
  }

  @action
  startGame(): void {
    this.state = createStateForNewGame({
      questionsIds: this.questionsStore.getQuestionsIds(),
      date: new Date(),
    })
  }

  @action
  processTime(): void {
    if (this.state.type === GameStateType.IN_PROGRESS) {
      this.state = processTimer(this.state, new Date())
    }
  }

  @action
  answer(answer: string): void {
    if (this.state.type === GameStateType.IN_PROGRESS) {
      const questionId = this.state.questionIdsQueue[this.state.questionIndex]
      const isRightAnswer = this.questionsStore.isRightAnswer({
        questionId,
        answer,
      })
      this.state = updateStateAfterAnswer(this.state, {isRight: isRightAnswer})
    }
  }
}

export const gameStoreSingleton = new GameStore()
