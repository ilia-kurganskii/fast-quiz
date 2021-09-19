import {TextStyle, ViewStyle} from "react-native"

import {ButtonColor} from "@features/common/components/button/button.types"

import {COLORS} from "../../constants/colors"
import {Typography} from "../../styles/typography"

const BUTTON_COLORS = {
  primary: {
    default: {
      border: COLORS.PRIMARY.BASE,
      background: COLORS.PRIMARY.BASE,
      text: COLORS.WHITE,
    },
    pressed: {
      border: COLORS.PRIMARY.DARK,
      background: COLORS.PRIMARY.DARK,
      text: COLORS.WHITE,
    },
    disabled: {
      border: COLORS.SKY.LIGHT,
      background: COLORS.SKY.LIGHT,
      text: COLORS.SKY.DARK,
    },
  },
  secondary: {
    default: {
      border: COLORS.PRIMARY.LIGHTEST,
      background: COLORS.PRIMARY.LIGHTEST,
      text: COLORS.PRIMARY.BASE,
    },
    pressed: {
      border: COLORS.PRIMARY.LIGHTER,
      background: COLORS.PRIMARY.LIGHTER,
      text: COLORS.PRIMARY.BASE,
    },
    disabled: {
      border: COLORS.SKY.LIGHT,
      background: COLORS.SKY.LIGHT,
      text: COLORS.SKY.DARK,
    },
  },
  outline: {
    default: {
      border: COLORS.PRIMARY.BASE,
      background: COLORS.TRANSPARENT,
      text: COLORS.PRIMARY.BASE,
    },
    pressed: {
      border: COLORS.PRIMARY.DARK,
      background: COLORS.TRANSPARENT,
      text: COLORS.PRIMARY.DARK,
    },
    disabled: {
      border: COLORS.SKY.BASE,
      background: COLORS.SKY.BASE,
      text: COLORS.SKY.BASE,
    },
  },
  transparent: {
    default: {
      border: COLORS.TRANSPARENT,
      background: COLORS.TRANSPARENT,
      text: COLORS.PRIMARY.BASE,
    },
    pressed: {
      border: COLORS.TRANSPARENT,
      background: COLORS.TRANSPARENT,
      text: COLORS.PRIMARY.DARK,
    },
    disabled: {
      border: COLORS.TRANSPARENT,
      background: COLORS.TRANSPARENT,
      text: COLORS.SKY.BASE,
    },
  },
}

export const getStylesForButton = (payload: {
  color: ButtonColor
  style?: ViewStyle
  disabled?: boolean | null
  isButtonPressed: boolean
}): ViewStyle => {
  const {color, isButtonPressed, disabled, style} = payload
  const colors =
    BUTTON_COLORS[color][disabled ? "disabled" : isButtonPressed ? "pressed" : "default"]

  return {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 48,
    padding: 16,
    borderWidth: 1,
    backgroundColor: colors.background,
    borderColor: colors.border,
    ...style,
  }
}

export const getStylesForButtonText = (payload: {
  color: ButtonColor
  disabled?: boolean | null
  isButtonPressed: boolean
}): TextStyle => {
  const {color, isButtonPressed, disabled} = payload
  const colors =
    BUTTON_COLORS[color][disabled ? "disabled" : isButtonPressed ? "pressed" : "default"]

  return {
    ...Typography.Regular.None.Bold,
    color: colors.text,
  }
}
