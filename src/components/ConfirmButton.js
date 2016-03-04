import React, {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

import * as colors from '../constants/colors'

export default ({ enabled, onPress }) => (
  <View style={styles.buttonContainer}>
    <TouchableOpacity
      style={[styles.button, (enabled ? styles.buttonEnabled : null)]}
      onPress={enabled ? onPress : null}>
      <Text style={styles.buttonText}>{"Confirm Answer"}</Text>
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
    fontWeight: 'bold'
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
