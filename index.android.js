import React, {
  AppRegistry,
  NavigatorAndroid
} from 'react-native'
import { Provider } from 'react-redux'

import App from './src/containers/App'
import configure from './src/store'

const store = configure()

const theRoadCode = () => () => (
  <Provider store={store}>
    <NavigatorAndroid
        style={{ flex: 1 }}
        initialRoute={{
          title: 'The Road Code',
          component: App,
        }}/>
  </Provider>
)

AppRegistry.registerComponent('theRoadCode', theRoadCode)
