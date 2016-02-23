import React, {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

const renderAnswer = (key, answer) => (
  <TouchableOpacity key={key} style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start', padding: 5 }}>
    <Text>
      <Text style={{ fontWeight: 'bold', color: '#363' }}>{key}</Text>: {answer}
    </Text>
  </TouchableOpacity>
)

const renderAnswers = (answers = {}) =>
  Object.keys(answers)
        .map((key) => renderAnswer(key, answers[key]))

export default ({ image, question, answers }) => (
  <View style={styles.topContainer}>
    <View style={styles.topContainer}>
      <Image
        style={{ height: 200, width: 200 }}
        source={image}
      />
    <View style={styles.questionContainer}>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
          {question}
        </Text>
      </View>
    </View>
    <View style={styles.answersContainer}>
      {renderAnswers(answers)}
    </View>
    <View style={styles.topContainer}>
      <TouchableOpacity style={styles.topContainer}>
        <Text>Submit Answer</Text>
      </TouchableOpacity>
    </View>
  </View>
)

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginHorizontal: 0,
    borderWidth: 1
  },
  questionContainer: {
    flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start',
    margin: 10,
    padding: 10,
    borderWidth: 1
  },
  answersContainer: {
    alignItems: 'stretch',
    marginTop: 10
  },
  submitButtonContainer: {
    flex: 1
  }
})
