import React from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'
import { addMeal } from '../redux/mealsRedux'
import { openHomeScreen } from '../lib/NavigationHelpers'

class AddMealScreen extends React.Component {

  addNewMeal = ({mealName, mealPhoto}) => {
    this.props.addMeal({mealName, mealPhoto})
    openHomeScreen(this.props.navigation)
  }

  render () {
    return (
      <View style={{flex: 1}}>
      </View>
    )
  }
}

const mapDispatchToProps = {
  addMeal: addMeal
}


export default connect (null, mapDispatchToProps)(AddMealScreen)