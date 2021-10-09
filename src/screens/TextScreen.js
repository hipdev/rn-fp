import React from 'react'
import { Text, StyleSheet, View, Button, TextInput } from 'react-native'

const TextScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Text input</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
  },
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
    fontSize: 16,
  },
})

export default TextScreen
