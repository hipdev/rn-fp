import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ImageDetail from '../components/ImageDetail'

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        imageSource={require('../../assets/images/forest.jpg')}
        score={1}
      />
      <ImageDetail
        title="Beach"
        imageSource={require('../../assets/images/beach.jpg')}
        score={2}
      />
      <ImageDetail
        title="Mountain"
        imageSource={require('../../assets/images/mountain.jpg')}
        score={3}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
})

export default ImageScreen
