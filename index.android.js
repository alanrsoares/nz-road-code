import React, { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'

import App from './src/containers/App'
import configure from './src/store'

const store = configure()

const theRoadCode = () => () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent('theRoadCode', theRoadCode)
