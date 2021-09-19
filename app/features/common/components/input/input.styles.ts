import {StyleProp, StyleSheet, ViewStyle} from "react-native"

import {COLORS} from "@features/common/constants/colors"
import {Typography} from "@features/common/styles/typography"

export const inputStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  input: {
    ...Typography.Regular.None.Regular,
    alignItems: "center",
    borderRadius: 8,
    height: "100%",
    lineHeight: undefined,
    width: "100%",
  },
})

export const getInputStyle = (payload: {
  focused?: boolean
  hasError?: boolean
  hasLeftIcon?: boolean
  hasRightIcon?: boolean
}): StyleProp<ViewStyle> => {
  const {focused, hasError, hasLeftIcon, hasRightIcon} = payload
  const hasBoldBorder = focused || hasError

  const inputStyle: ViewStyle & {
    paddingLeft: number
    paddingRight: number
    paddingVertical: number
  } = {
    paddingLeft: 16 as number,
    paddingRight: 16 as number,
    paddingVertical: 16,
    borderWidth: 1,
  }

  if (hasLeftIcon) {
    inputStyle.paddingLeft = 48
  }

  if (hasRightIcon) {
    inputStyle.paddingRight = 48
  }

  if (hasBoldBorder) {
    inputStyle.borderWidth = 2
    inputStyle.paddingLeft = inputStyle.paddingLeft - 1
    inputStyle.paddingRight = inputStyle.paddingRight - 1
    inputStyle.paddingVertical = inputStyle.paddingVertical - 1
  }

  if (hasError) {
    inputStyle.borderColor = COLORS.RED.BASE
  } else if (focused) {
    inputStyle.borderColor = COLORS.PRIMARY.BASE
  }

  return [inputStyles.input, inputStyle]
}
