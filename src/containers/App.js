import React, { Component } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Question from '../components/Question'
import * as Actions from '../actions'

class App extends Component {
  render () {
    return (
      <Question />
    )
  }
}

export default connect(
  // map state to props
  (state) => ({ ...state }),
  // map dispatch to props,
  (dispatch) => ({ actions: bindActionCreators(Actions, dispatch) })
)(App)
