import React from 'react'
import { connect } from 'react-redux'
import { Camera } from 'expo'
import { View, Text } from 'react-native'
import MealList from '../components/MealList'
import Button from '../components/Button'
import AddNewMealForm from '../components/AddNewMealForm'
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
        <AddNewMealForm 
          addNewMeal={this.addNewMeal}
        />
      </View>
    )
  }
}

const mapDispatchToProps = {
  addMeal: addMeal
}


export default connect (null, mapDispatchToProps)(AddMealScreen)