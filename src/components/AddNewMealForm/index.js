import React from 'react'
import { TextInput, View, Image, Alert } from 'react-native'
import Button from '../Button'
import Camera from '../Camera'

export default class AddNewMealForm extends React.Component {
  state = {
    mealName: '',
    mealPhoto: null,
    cameraOpen: false,
    cameraProcessing: false
  }

  toggleCamera = () => {
    this.setState({cameraOpen: !this.state.cameraOpen})
  }

  handleAddMeal = () => {
    const { mealName, mealPhoto } = this.state
    if (mealName === '' || mealPhoto == null) {
      Alert.alert('Error', 'Name and photo can not be empty')
      return
    }
    this.props.addNewMeal({
      mealName,
      mealPhoto,
    })
  }

  takePhoto = async () => {
    this.setState({cameraProcessing: true})
    const photo = await this.camera.takePictureAsync({quality: 0});
    this.setState({
      mealPhoto: photo.uri,
      cameraProcessing: false,
      cameraOpen: false,
    })
  }

  render () {
    if (this.state.cameraOpen) {
      return (
        <Camera
          innerRef={ref => { this.camera = ref }}
          onTakePhoto={this.takePhoto}
          disabled={this.state.cameraProcessing}
        />
      )
    }
    return (
      <View style={{backgroundColor: '#FFF', flex: 1}}>
        <View>
          <TextInput
            placeholder="Type Meal Name"
            style={{padding: 20}}
            value={this.state.mealName}
            onChangeText={mealName => this.setState({mealName})}
          />
          {this.state.mealPhoto && <Image source={{uri: this.state.mealPhoto}} style={{width: '100%', height: 200}} resizeMode={'contain'} />}
        </View>
        <Button title={'Add photo to this meal'} onPress={this.toggleCamera} />
        <Button title={'Add new meal'} onPress={this.handleAddMeal} />
      </View>
    )
  }
}


