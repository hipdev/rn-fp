import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const ColorScreen = () => {
  const [counter, setCounter] = useState(0)
  return (
    <View>
      <Button title="Add a color" onPress={() => setCounter(counter + 1)} />
      <View style={{ height: 100, width: 100, backgroundColor: randomRgb() }} />
    </View>
  )
}

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256)
  const green = Math.floor(Math.random() * 256)
  const blue = Math.floor(Math.random() * 256)

  return `rgb(${red},${green}, ${blue})`
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
})

export default ColorScreen
