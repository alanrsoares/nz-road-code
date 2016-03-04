import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import React, {
  View,
  Text,
  StyleSheet
} from 'react-native'

import Question from '../components/Question'
import * as Actions from '../actions'

const keysLength = xs => Object.keys(xs).length

const App = ({ questions, position, actions }) => {
  return (
    <View style={{ marginTop: 65, flex: 1 }}>
      <Text style={styles.subHeader}>
        {position + 1}/{keysLength(questions)}
      </Text>
      <Question {...questions[position]}
        position={position}
        onConfirmAnswer={actions.confirmAnswer}
        onSelectAnswer={actions.selectAnswer}
      />
    </View>
  )
}

export default connect(
  // map state to props
  (state) => ({ ...state }),
  // map dispatch to props,
  (dispatch) => ({ actions: bindActionCreators(Actions, dispatch) })
)(App)


const styles = StyleSheet.create({
  subHeader: {
    alignSelf: 'center',
    padding: 5
  }
})
