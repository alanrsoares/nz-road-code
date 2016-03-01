import React, {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native'

import { toRows } from '../lib/utils'

const rowStyle = ({ selectedAnswer, key }) =>
  (selectedAnswer === key) && styles.rowContainerSelected

const renderAnswer = (selectedAnswer, onSelectAnswer) => ({ key, value }) => (
  <TouchableHighlight
    key={key}
    underlayColor='#EEEEEE'
    onPress={() => onSelectAnswer({ index: 0, answer: key })}>
    <View>
      <View style={[styles.rowContainer, rowStyle({ key, selectedAnswer })]}>
        <View style={styles.answerKeyContainer}>
          <Text style={styles.answerKey}>{key}</Text>
        </View>
        <View style={styles.answerContainer}>
          <Text style={styles.answer}>{value}</Text>
        </View>
      </View>
      <View style={styles.separator}/>
    </View>
  </TouchableHighlight>
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
  separator: {
    height: 1,
    backgroundColor: '#DDDDDD'
  },
  rowContainer: {
    padding: 5,
    flexDirection: 'row'
  },
  rowContainerSelected: {
    backgroundColor: '#DDDDDD'
  },
  answerKeyContainer: {
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginRight: 5
  },
  answerKey: {
    fontWeight: 'bold',
    marginHorizontal: 8,
    marginVertical: 5,
    color: 'white',
    alignSelf: 'center'
  },
  answerContainer: {
    flex: 1
  },
  answer: {
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
