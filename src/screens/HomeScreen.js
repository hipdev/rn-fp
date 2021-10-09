import React from 'react'
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  Touchable,
} from 'react-native'

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button
        onPress={() => console.log('hola')}
        title="Go to componentes demo"
      />
      <TouchableOpacity onPress={() => console.log('list pressed')}>
        <Text>Go to list demo</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 80,
  },
})

export default HomeScreen
