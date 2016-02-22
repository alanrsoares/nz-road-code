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
      <View style={{ flex: 1, alignItems: 'center', marginTop: 20 }}>
        <View>
          <Text>The Road Code</Text>
        </View>
        <View>
          <Question {...this.props.questions[0]}/>
        </View>
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
