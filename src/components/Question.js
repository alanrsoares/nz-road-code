import React, {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

import { toRows } from '../lib/utils'
import Answer from './Answer'

const renderAnswer = (selectedAnswer, onSelectAnswer) => ({ key, value }, i) => (
  <Answer
    key={i}
    selectedAnswer={selectedAnswer}
    onSelectAnswer={() => onSelectAnswer({ index: 0, answer: key })}
    answerKey={key}
    answerText={value} />
)

export default ({ image, question, answers, selectedAnswer, onSelectAnswer }) => (
  <View style={{ flex: 1 }}>
    <Image style={styles.image} source={image} />
    <View style={styles.heading}>
      <Text style={styles.question}>
       {question}
      </Text>
    </View>
    <View>
      {toRows(answers).map(renderAnswer(selectedAnswer, onSelectAnswer))}
    </View>
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Submit Answer</Text>
      </TouchableOpacity>
    </View>
  </View>
)

const styles = StyleSheet.create({
  heading: {
    backgroundColor: '#F8F8F8'
  },
  image: {
    width: 400,
    height: 300
  },
  question: {
    fontSize: 18,
    margin: 5,
    color: '#656565'
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
})
