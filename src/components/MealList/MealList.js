import React from 'react'
import { FlatList, View } from 'react-native'
import { MealItem } from './MealItem'

export default class MealList extends React.Component {
  keyExtractor = (item, index) => index;
  
  render () {
    return (
      <FlatList
        contentContainerStyle={{ flex: 1}}
        data={this.props.meals}
        style={{flex: 1}}
        renderItem={MealItem}
        keyExtractor={this.keyExtractor}
      />
    )
  }
}


