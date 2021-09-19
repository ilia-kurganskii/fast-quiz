import {useNavigation} from "@react-navigation/native"
import {useCallback, useEffect, useState} from "react"

import {AppNavigation, SCREEN_NAMES} from "@features/app/navigation/app.navigation"
import {useQuestionsStore} from "@features/game/stores/questions/questions.hook"
import {useLeaderboardStore} from "@features/leaderboard/stores/leaderboard.hooks"

export function useLobbyController() {
  const navigation = useNavigation<AppNavigation>()
  const questionsStore = useQuestionsStore()
  const leaderboardStore = useLeaderboardStore()
  const [name, setName] = useState("")

  useEffect(() => {
    questionsStore.downloadQuestions()
  }, [])

  const onPressNext = useCallback(() => {
    leaderboardStore.setPlayerName(name)
    navigation.navigate(SCREEN_NAMES.GAME_ONBOARDING)
  }, [name, navigation])

  return {
    onPressNext,
    name,
    setName,
  }
}
