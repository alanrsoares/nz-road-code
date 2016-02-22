import React, {
  View,
  Text,
  Image
} from 'react-native'

const renderAnswer = (key, answer) => (
  <View key={key} style={{ padding: 5 }}>
    <Text>
      <Text style={{ fontWeight: 'bold', color: '#363' }}>{key}</Text>: {answer}
    </Text>
  </View>
)

const renderAnswers = (answers: object = {}) =>
  Object.keys(answers)
        .map((key) => renderAnswer(key, answers[key]))

export default ({ image, question, answers }) => (
  <View>
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-start', marginTop: 20 }}>
      <Image
        style={{ height: 200, width: 200 }}
        source={{ uri: image }}/>
      <View style={{ padding: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>
          {question}
        </Text>
      </View>
    </View>
    <View style={{ alignItems: 'flex-start', justifyContent: 'flex-start', marginTop: 10 }}>
      {renderAnswers(answers)}
    </View>
  </View>
)
