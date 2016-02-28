import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import React, {
  Component,
  View,
  Text
} from 'react-native'

import Question from '../components/Question'
import * as Actions from '../actions'

class App extends Component {
  constructor(props) {
    super(props)
    props.actions.loadQuestions()
  }

  render () {
    return (
      <View style={{ marginTop: 65, flex: 1 }}>
        <Question {...this.props.questions[0]}/>
      </View>
    )
  }
}

export default connect(
  // map state to props
  (state) => ({ ...state }),
  // map dispatch to props,
  (dispatch) => ({ actions: bindActionCreators(Actions, dispatch) })
)(App)
