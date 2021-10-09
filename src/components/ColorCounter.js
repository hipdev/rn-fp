import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  const [colors, setColors] = useState([])
  return (
    <View>
      <Text>{color}</Text>
      <Button onPress={() => onIncrease()} title={`Increase ${color}`} />
      <Button onPress={() => onDecrease()} title={`Decrease ${color}`} />
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

export default ColorCounter
