import React, {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ListView
} from 'react-native'

import { toRows } from '../lib/utils'

const dataSource = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1.guid !== r2.guid
})

const rowStyle = ({ selectedAnswer, key }) =>
  selectedAnswer === key ? styles.rowContainerSelected : styles.rowContainer

const renderAnswer = (selectedAnswer, onSelectAnswer) => ({ key, value }) => (
  <TouchableOpacity key={key} onPress={() => onSelectAnswer({ index: 0, answer: key })}>
    <View>
      <View style={rowStyle({ key, selectedAnswer })}>
        <Text>
          <Text style={styles.answer}>{key}</Text>: {value}
        </Text>
      </View>
      <View style={styles.separator} />
    </View>
  </TouchableOpacity>
)

export default ({ image, question, answers, selectedAnswer, onSelectAnswer }) => (
  <View style={{ flex: 1 }}>
    <Image
      style={styles.image}
      source={image}
    />
    <View style={styles.heading}>
      <Text style={styles.title}>
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
  separator: {
    height: 1,
    backgroundColor: '#DDDDDD'
  },
  rowContainer: {
    padding: 10
  },
  rowContainerSelected: {
    padding: 10,
    backgroundColor: '#DDDDDD'
  },
  image: {
    width: 400,
    height: 300
  },
  answer: {
    fontWeight: 'bold',
    margin: 5,
    color: '#48BBEC'
  },
  title: {
    fontSize: 20,
    margin: 5,
    color: '#656565'
  },
  description: {
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
