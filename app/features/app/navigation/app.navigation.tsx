import {createStackNavigator, StackNavigationProp} from "@react-navigation/stack"
import React from "react"

import {OnboardingScreen} from "@features/game/screens/onboarding/onboarding.screen"
import {QuizScreen} from "@features/game/screens/quiz/quiz.screen"
import {LeaderboardScreen} from "@features/leaderboard/screens/leaderboard.screen"
import {LobbyScreen} from "@features/lobby/screens/lobby.screen"

export enum SCREEN_NAMES {
  LOBBY = "LOBBY",
  GAME_ONBOARDING = "GAME_ONBOARDING",
  GAME_QUIZ = "GAME_QUIZ",
  LEADERBOARD = "LEADERBOARD",
}

type AppStackParamList = {
  [SCREEN_NAMES.GAME_ONBOARDING]: undefined
  [SCREEN_NAMES.GAME_QUIZ]: undefined
  [SCREEN_NAMES.LOBBY]: undefined
  [SCREEN_NAMES.LEADERBOARD]: undefined
}

export type AppNavigation = StackNavigationProp<AppStackParamList>

const AppStack = createStackNavigator<AppStackParamList>()

export function AppNavigator() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen component={LobbyScreen} name={SCREEN_NAMES.LOBBY} />
      <AppStack.Screen component={OnboardingScreen} name={SCREEN_NAMES.GAME_ONBOARDING} />
      <AppStack.Screen component={QuizScreen} name={SCREEN_NAMES.GAME_QUIZ} />
      <AppStack.Screen component={LeaderboardScreen} name={SCREEN_NAMES.LEADERBOARD} />
    </AppStack.Navigator>
  )
}
