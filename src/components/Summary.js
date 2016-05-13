import React, {
  Text
} from 'react-native'

const Summary = ({ wrongAnswers, position, questionsLength }) => (
  <Text style={styles.subHeader}>
    <Text style={{ color: '#f00' }}>Wrong Answers: {wrongAnswers}</Text>
    { ' - ' }
    Progress: {position + 1}/{questionsLength}
  </Text>
)

export default Summary

const styles = {
  subHeader: {
    alignSelf: 'center',
    padding: 5
  }
}
