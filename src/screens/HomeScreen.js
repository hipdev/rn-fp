import React from 'react'
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  Touchable,
} from 'react-native'

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button
        onPress={() => props.navigation.navigate('Components')}
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
