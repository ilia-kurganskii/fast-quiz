import database from "@react-native-firebase/database"
import csvtojson from "csvtojson"

import {Question} from "@features/game/types/question.types"

export class QuestionsService {
  async loadQuestions(): Promise<Question[]> {
    const url = await database().ref("questions-url").once("value")
    return await fetch(url.val())
      .then(data => data.text())
      .then(text => csvtojson().fromString(text))
  }
}

export const questionsServiceSingleton = new QuestionsService()
