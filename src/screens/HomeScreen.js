import React from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

const HomeScreen = ({ navigation: { navigate } }) => {
  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button
        onPress={() => navigate('Components')}
        title="Go to componentes demo"
      />
      <Button title="Go to list demo" onPress={() => navigate('List')} />
      <Button title="Go to image screen" onPress={() => navigate('Image')} />
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 80,
  },
})

export default HomeScreen
