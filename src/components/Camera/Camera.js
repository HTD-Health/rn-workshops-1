import React from 'react'
import { View } from 'react-native'
import Button from '../Button'
import { Camera } from 'expo'

export default CameraComponent = (props) => {
  return (
    <Camera ref={ref => { props.innerRef(ref)}} style={{height: '100%', width: '100%'}}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end', marginBottom: 20}}>
        <Button title="Take a shot" onPress={props.onTakePhoto} disabled={props.disabled} />
      </View>
    </Camera>
  )
}