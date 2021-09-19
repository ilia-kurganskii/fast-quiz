// we always make sure 'react-native' gets included first
import "react-native"

import "./mock-react-native-navigation"

declare global {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  let __TEST__
}
