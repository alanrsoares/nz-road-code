import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import React, {
  Component,
  View,
  Text
} from 'react-native'

import Question from '../components/Question'
import * as Actions from '../actions'

const App = ({ questions }) => (
  <View style={{ marginTop: 65, flex: 1 }}>
    <Question {...questions[0]} />
  </View>
)

export default connect(
  // map state to props
  (state) => ({ ...state }),
  // map dispatch to props,
  (dispatch) => ({ actions: bindActionCreators(Actions, dispatch) })
)(App)
