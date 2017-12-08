import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

export default Button = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={{margin: 10}}>
      <View style={{backgroundColor: '#62bec1', padding: 10, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: '#FFF'}}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  )
}


