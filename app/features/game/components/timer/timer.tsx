// @flow

import * as React from "react"
import {Text, View, ViewStyle} from "react-native"
import Svg, {Defs, G, LinearGradient, Path, Stop} from "react-native-svg"

import {COLORS} from "@features/common/constants/colors"
import {timerStyles} from "@features/game/components/timer/timer.styles"

type TimerProps = {
  style?: ViewStyle
  progress: number
  text: string | number
}

const PATH_LENGTH = 271.2

function TimerComponent(props: TimerProps) {
  const {style, progress = 0, text, ...rest} = props

  return (
    <View style={[timerStyles.container, style]} {...rest}>
      <Svg height={108} viewBox="0 0 108 108" width={108}>
        <Defs>
          <LinearGradient id="green" x1="50%" x2="50%" y1="-22.187%" y2="112.324%">
            <Stop offset="0%" stopColor={COLORS.SKY.LIGHT} />
            <Stop offset="100%" stopColor={COLORS.SKY.LIGHT} />
          </LinearGradient>
          <LinearGradient id="blue" x1="50%" x2="50%" y1="0%" y2="100%">
            <Stop offset="0%" stopColor={COLORS.PRIMARY.BASE} />
            <Stop offset="100%" stopColor={COLORS.PRIMARY.BASE} />
          </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd" transform="translate(6 6)">
          <Path
            d="M61.067 1.8A48.036 48.036 0 0 0 48 0C21.49 0 0 21.49 0 48s21.49 48 48 48 48-21.49 48-48a47.787 47.787 0 0 0-9.506-28.68"
            stroke="url(#green)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="5"
          />
          {progress ? (
            <>
              <Path
                d="M61.067 1.8A48.036 48.036 0 0 0 48 0C21.49 0 0 21.49 0 48s21.49 48 48 48 48-21.49 48-48a47.787 47.787 0 0 0-9.506-28.68"
                stroke={COLORS.PRIMARY.LIGHTER}
                strokeDasharray={PATH_LENGTH}
                strokeDashoffset={PATH_LENGTH * (1 + progress / 100)}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="5"
              />
              <Path
                d="M61.067 1.8A48.036 48.036 0 0 0 48 0C21.49 0 0 21.49 0 48s21.49 48 48 48 48-21.49 48-48a47.787 47.787 0 0 0-9.506-28.68"
                stroke="url(#blue)"
                strokeDasharray={PATH_LENGTH}
                strokeDashoffset={PATH_LENGTH * (1 + progress / 100)}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
              />
            </>
          ) : null}
        </G>
      </Svg>
      <Text style={timerStyles.text}>{text}</Text>
    </View>
  )
}

export const Timer = React.memo(TimerComponent)
