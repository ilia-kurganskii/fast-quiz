import {useNavigation} from "@react-navigation/native"
import {useCallback, useEffect, useRef, useState} from "react"

import {AppNavigation, SCREEN_NAMES} from "@features/app/navigation/app.navigation"
import {GAME_TIMEOUT_MS} from "@features/game/constatants/game.constants"
import {useGameStore} from "@features/game/stores/game/game.hook"
import {useLeaderboardStore} from "@features/leaderboard/stores/leaderboard.hooks"

export function useQuizController() {
  const intervalRef = useRef<NodeJS.Timer>()
  const gameStore = useGameStore()
  const navigation = useNavigation<AppNavigation>()
  const leaderboardStore = useLeaderboardStore()
  const [timer, setTimer] = useState(0)
  const [leftAnswer, setLeftAnswer] = useState("")
  const [rightAnswer, setRightAnswer] = useState("")

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      gameStore.processTime()
      setTimer(gameStore.getRestTime(new Date()))
    }, 100)
    return () => {
      intervalRef.current && clearInterval(intervalRef.current)
    }
  }, [])

  const question = gameStore.question
  const score = gameStore.score
  const isGameOver = gameStore.isGameOver

  const saveScore = async () => {
    await leaderboardStore.saveScore(score)
    navigation.navigate(SCREEN_NAMES.LEADERBOARD)
  }

  useEffect(() => {
    if (isGameOver) {
      saveScore()
    }
  }, [isGameOver])

  useEffect(() => {
    if (question) {
      const isSwipe = Math.random() > 0.5
      setLeftAnswer(isSwipe ? question.rightAnswer : question.wrongAnswer)
      setRightAnswer(isSwipe ? question.wrongAnswer : question.rightAnswer)
    }
  }, [question?.id])

  const questionTitle = question?.questionTitle

  const onPressLeftAnswer = useCallback(() => {
    if (leftAnswer) {
      gameStore.answer(leftAnswer)
    }
  }, [leftAnswer])

  const onPressRightAnswer = useCallback(() => {
    if (rightAnswer) {
      gameStore.answer(rightAnswer)
    }
  }, [rightAnswer])

  const timerProgress = (timer / GAME_TIMEOUT_MS) * 100
  const timerText = Math.round(timer / 1000)

  return {
    question,
    questionTitle,
    leftAnswer,
    rightAnswer,
    score,
    onPressLeftAnswer,
    onPressRightAnswer,
    timerProgress,
    timerText,
  }
}
