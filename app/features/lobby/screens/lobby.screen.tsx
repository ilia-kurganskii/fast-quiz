import {observer} from "mobx-react"
import React from "react"
import {KeyboardAvoidingView, View} from "react-native"

import {Button, Input} from "@features/common/components"
import {useLobbyController} from "@features/lobby/screens/lobby.controller"
import {lobbyStyles} from "@features/lobby/screens/lobby.styles"

function LobbyScreenComponent() {
  const {name, setName, onPressNext} = useLobbyController()
  return (
    <KeyboardAvoidingView behavior="padding" style={lobbyStyles.container}>
      <View style={lobbyStyles.wrapper}>
        <Input
          maxLength={40}
          placeholder="Your Name"
          style={lobbyStyles.input}
          value={name}
          onChangeText={setName}
        />
        <Button color="primary" style={lobbyStyles.button} title="Next" onPress={onPressNext} />
      </View>
    </KeyboardAvoidingView>
  )
}

export const LobbyScreen = observer(LobbyScreenComponent)
