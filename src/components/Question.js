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
import ConfirmButton from './ConfirmButton'

export default class Question extends React.Component {
  constructor (props) {
    super(props)
    this.renderAnswer = this.renderAnswer.bind(this)
  }

  render () {
    const { answers, question, image, selectedAnswer, correctAnswer, onConfirmAnswer } = this.props

    return (
      <View style={{ flex: 1 }}>
        <Image style={styles.image} source={image} />
        <View style={styles.heading}>
          <Text style={styles.question}>
           {question}
          </Text>
        </View>
        <View>
          {toRows(answers).map(this.renderAnswer)}
        </View>
        <ConfirmButton
          enabled={selectedAnswer}
          onPress={ () => onConfirmAnswer({ isCorrect: selectedAnswer === correctAnswer}) }
        />
      </View>
    )
  }

  renderAnswer ({ key, value }, i) {
    const { selectedAnswer, onSelectAnswer, correctAnswer, position } = this.props

    return (
      <Answer
        key={i}
        onSelectAnswer={() => onSelectAnswer({ index: position, answer: key })}
        answerKey={key}
        answerText={value}
        isSelected={selectedAnswer === key}
        isCorrect={selectedAnswer === key && selectedAnswer === correctAnswer}
      />
    )
  }

  isCorrectAnswer () {
    const { selectedAnswer, onSelectAnswer, correctAnswer, position } = this.props
  }
}

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
