import {questionsStoreSingleton} from "@features/game/stores/questions/questions.store"

export function useQuestionsStore() {
  return questionsStoreSingleton
}
