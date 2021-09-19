/**
 * @format
 */
import "react-native-gesture-handler"
// eslint-disable-next-line import/order
import {AppRegistry} from "react-native"

import {name as appName} from "./app.json"
import App from "./app/features/app/app"

AppRegistry.registerComponent(appName, () => App)
