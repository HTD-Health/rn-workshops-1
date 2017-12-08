import React from 'react'
import { View, Text, Image } from 'react-native'

export const MealItem = ({ item }) => {
  return (
    <View style={{paddingBottom: 10, borderBottomColor: '#a0a0a0', borderBottomWidth: 1}}>
      <Text style={{fontSize: 20, paddingVertical: 10, textAlign: 'center'}}>{item.mealName}</Text>
      <Image source={{uri: item.mealPhoto}} style={{width: '100%', height: 200}} resizeMode={'contain'} />
    </View>
  )
}