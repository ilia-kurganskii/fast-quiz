import {useNavigation} from "@react-navigation/native"
import {useCallback} from "react"

import {AppNavigation, SCREEN_NAMES} from "@features/app/navigation/app.navigation"
import {useGameStore} from "@features/game/stores/game/game.hook"

export function useOnboardingController() {
  const navigation = useNavigation<AppNavigation>()
  const gameStore = useGameStore()
  const onPressComplete = useCallback(() => {
    gameStore.startGame()
    navigation.navigate(SCREEN_NAMES.GAME_QUIZ)
  }, [])
  return {onPressComplete}
}
