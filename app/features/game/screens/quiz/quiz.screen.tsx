import {observer} from "mobx-react"
import React from "react"
import {Text, View} from "react-native"

import {Button} from "@features/common/components"
import {Timer} from "@features/game/components/timer/timer"
import {useQuizController} from "@features/game/screens/quiz/quiz.controller"

function QuizScreenComponent() {
  const {
    timerText,
    timerProgress,
    onPressLeftAnswer,
    onPressRightAnswer,
    score,
    questionTitle,
    leftAnswer,
    rightAnswer,
  } = useQuizController()
  return (
    <View>
      <Timer progress={timerProgress} text={timerText} />

      <Text>{score}</Text>
      <Text>{questionTitle}</Text>
      <Button color="primary" title={leftAnswer ?? ""} onPress={onPressLeftAnswer} />
      <Button color="primary" title={rightAnswer ?? ""} onPress={onPressRightAnswer} />
    </View>
  )
}

export const QuizScreen = observer(QuizScreenComponent)
