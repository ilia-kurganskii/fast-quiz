import React, {forwardRef, useCallback} from "react"
import {TextInput, TextInputProps, View} from "react-native"

import {useProxyCallback} from "@features/common/helpers/use-proxy-callback"

import {COLORS} from "../../constants/colors"
import {getInputStyle, inputStyles} from "./input.styles"

export interface InputProps extends TextInputProps {
  hasError?: boolean
  leftIcon?: React.FunctionComponent
  rightIcon?: React.FunctionComponent
}

// eslint-disable-next-line react/display-name
const InputComponent = forwardRef<TextInput, InputProps>((props, forwardRef) => {
  const {
    hasError,
    rightIcon: RightIcon,
    onBlur,
    onFocus,
    leftIcon: LeftIcon,
    style,
    ...rest
  } = props
  const [focused, setFocused] = React.useState(false)
  const focus = useCallback(() => setFocused(true), [setFocused])
  const blur = useCallback(() => setFocused(false), [setFocused])

  const handleFocus = useProxyCallback(focus, onFocus, [])
  const handleBlur = useProxyCallback(blur, onBlur, [])

  const inputStyle = getInputStyle({
    focused,
    hasError,
    hasLeftIcon: !!LeftIcon,
    hasRightIcon: !!RightIcon,
  })

  return (
    <View style={[inputStyles.container, style]}>
      {LeftIcon && <LeftIcon />}
      <TextInput
        {...rest}
        placeholderTextColor={COLORS.INK.LIGHTER}
        ref={forwardRef}
        style={inputStyle}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />

      {RightIcon && <RightIcon />}
    </View>
  )
})

export const Input = React.memo(InputComponent)
