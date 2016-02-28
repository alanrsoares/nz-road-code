import React, {
  AppRegistry,
  NavigatorIOS
} from 'react-native'
import { Provider } from 'react-redux'

import App from './src/containers/App'
import configure from './src/store'

const store = configure()

const theRoadCode = () => () => (
  <Provider store={store}>
    <NavigatorIOS
        style={{ flex: 1 }}
        initialRoute={{
          title: 'Road Code',
          component: App,
        }}/>
  </Provider>
)

AppRegistry.registerComponent('theRoadCode', theRoadCode)
