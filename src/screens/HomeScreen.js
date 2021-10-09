import React from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button
        onPress={() => console.log('hola')}
        title="Go to componentes demo"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 80,
  },
})

export default HomeScreen
