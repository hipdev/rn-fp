import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Child #1</Text>
      <Text style={styles.textStyle}>Child #2</Text>
      <Text style={styles.textStyle}>Child #3</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: 'row',
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
    justifyContent: 'space-around',
  },
  textStyle: {
    borderWidth: 3,
    borderColor: 'red',
  },
})

export default BoxScreen
