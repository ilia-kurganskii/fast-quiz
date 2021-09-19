import {NavigationContainer} from "@react-navigation/native"
import * as React from "react"

import {AppNavigator} from "@features/app/navigation/app.navigation"

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  )
}
