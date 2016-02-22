import React, { Component } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Question from '../components/Question'
import * as Actions from '../actions'

class App extends Component {
  constructor(props) {
    super(props)

    props.actions.loadQuestions()
  }

  render () {
    if (!this.props.questions.length) {
      return (
        <Question />
      )
    }

    return (
      <Question question={this.props.questions[0]}/>
    )
  }
}

export default connect(
  // map state to props
  (state) => ({ ...state }),
  // map dispatch to props,
  (dispatch) => ({ actions: bindActionCreators(Actions, dispatch) })
)(App)
