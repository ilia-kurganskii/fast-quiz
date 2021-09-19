import {action, makeObservable, runInAction} from "mobx"

import {
  QuestionsService,
  questionsServiceSingleton,
} from "@features/game/services/questions/questions.service"
import {Question} from "@features/game/types/question.types"

export class QuestionsStore {
  private questionsMap = new Map<string, Question>()

  constructor(private readonly questionsService: QuestionsService = questionsServiceSingleton) {
    makeObservable(this)
  }

  @action
  async downloadQuestions() {
    const questions = await this.questionsService.loadQuestions()

    runInAction(() => {
      this.questionsMap.clear()
      questions.forEach(question => {
        this.questionsMap.set(question.id, question)
      })
    })
  }

  getQuestionById(id: string): Question | undefined {
    return this.questionsMap.get(id)
  }

  getQuestionsIds(): string[] {
    return Array.from(this.questionsMap.keys())
  }

  isRightAnswer(payload: {questionId: string; answer: string}): boolean {
    const {answer, questionId} = payload
    const question = this.getQuestionById(questionId)
    if (question) {
      return question.rightAnswer === answer
    }
    throw new Error(`Question with id '${questionId}' not found`)
  }
}

export const questionsStoreSingleton = new QuestionsStore()
