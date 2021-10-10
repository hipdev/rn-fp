import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Im the box screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
  },
  textStyle: {
    fontSize: 30,
    marginVertical: 20,
    marginHorizontal: 20,
  },
})

export default BoxScreen
