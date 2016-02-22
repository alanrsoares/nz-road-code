import React, {
  View,
  Text
} from 'react-native'

const renderAnswers = (answers = {}) =>
  Object.keys(answers).map(key => (
    <View key={key}>
      <Text>
        {key}) {answers[key]}
      </Text>
    </View>
  ))

export default ({ question = {}}) => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-start', marginTop: 50 }}>
    <Text>{question.Question}</Text>
    <View style={{flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start', marginTop: 10 }}>
      {renderAnswers(question.Answers)}
    </View>
  </View>
)
