import React, {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native'

const rowStyle = ({ selectedAnswer, key }) =>
  (selectedAnswer === key) && styles.rowContainerSelected

export default ({ selectedAnswer, onSelectAnswer, answerKey, answerText }) => (
  <TouchableHighlight
    key={answerKey}
    underlayColor='#EEEEEE'
    onPress={onSelectAnswer}>
    <View>
      <View style={[styles.rowContainer, rowStyle({ key: answerKey, selectedAnswer })]}>
        <View style={styles.answerKeyContainer}>
          <Text style={styles.answerKey}>{answerKey}</Text>
        </View>
        <View style={styles.answerContainer}>
          <Text style={styles.answer}>{answerText}</Text>
        </View>
      </View>
      <View style={styles.separator}/>
    </View>
  </TouchableHighlight>
)

const styles = StyleSheet.create({
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
  }
})