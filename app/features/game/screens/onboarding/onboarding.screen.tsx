import {observer} from "mobx-react"
import React from "react"
import {View} from "react-native"

import {Button} from "@features/common/components"
import {useOnboardingController} from "@features/game/screens/onboarding/onboarding.controller"

function OnboardingScreenComponent() {
  const {onPressComplete} = useOnboardingController()
  return (
    <View>
      <Button color="primary" title="Next" onPress={onPressComplete} />
    </View>
  )
}

export const OnboardingScreen = observer(OnboardingScreenComponent)
