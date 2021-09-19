import {StyleSheet} from "react-native"

import {COLORS} from "@features/common/constants/colors"
import {Typography} from "@features/common/styles/typography"

export const timerStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  text: {
    ...Typography.Title_2,
    color: COLORS.PRIMARY.BASE,
    position: "absolute",
  },
})
