import React, { useState } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'

const TextScreen = () => {
  const [name, setName] = useState('')

  return (
    <View>
      <Text style={styles.text}>Enter name</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        value={name}
        onChangeText={(newValue) => setName(newValue)}
        autoCorrect={false}
      />
      <Text style={styles.text}>My name is {name}</Text>
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
