import React, {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

import { toRows } from '../lib/utils'
import * as colors from '../constants/colors'
import Answer from './Answer'

const renderAnswer = ({ selectedAnswer, onSelectAnswer, correctAnswer }) => ({ key, value }, i) => (
  <Answer
    key={i}
    onSelectAnswer={() => onSelectAnswer({ index: 0, answer: key })}
    answerKey={key}
    answerText={value}
    isSelected={selectedAnswer === key}
    isCorrect={selectedAnswer === key && selectedAnswer === correctAnswer} />
)

export default ({
  image,
  question,
  answers,
  correctAnswer,
  selectedAnswer,
  onSelectAnswer,
  onConfirmAnswer
}) => (
  <View style={{ flex: 1 }}>
    <Image style={styles.image} source={image} />
    <View style={styles.heading}>
      <Text style={styles.question}>
       {question}
      </Text>
    </View>
    <View>
      {toRows(answers).map(renderAnswer({ selectedAnswer, onSelectAnswer, correctAnswer }))}
    </View>
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={[styles.button]} onPress={onConfirmAnswer}>
        <Text style={styles.buttonText}>Submit Answer</Text>
      </TouchableOpacity>
    </View>
  </View>
)

const styles = StyleSheet.create({
  heading: {
    backgroundColor: colors.LIGHTER_GRAY
  },
  image: {
    width: 400,
    height: 300,
    alignSelf: 'center'
  },
  question: {
    fontSize: 18,
    margin: 5,
    color: colors.MUTED
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  buttonText: {
    fontSize: 18,
    color: colors.MUTED,
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: colors.LIGHT_GRAY,
    borderColor: colors.LIGHT_GRAY,
    borderWidth: 1,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonEnabled: {
    backgroundColor: colors.POSITIVE,
    borderColor: colors.POSITIVE,
  }
})
