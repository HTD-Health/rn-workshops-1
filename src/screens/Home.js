import React from 'react'
import { connect } from 'react-redux'
import { View, Text, KeyboardAvoidingView } from 'react-native'
import MealList from '../components/MealList'
import Button from '../components/Button'
import AddNewMealForm from '../components/AddNewMealForm'
import { addMeal } from '../redux/mealsRedux'
import { openAddMealScreen } from '../lib/NavigationHelpers'
import { Camera } from 'expo'
class Home extends React.Component {
  addNewMeal = ({mealName, mealPhoto}) => {
    this.props.addMeal({
      mealName,
      mealPhoto
    })
  }

  render () {
    return (
      <View style={{flex: 1}}>
        <Button title="Add new meal" onPress={() => openAddMealScreen(this.props.navigation)} />
        <MealList meals={this.props.meals.meals}  />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  meals: state.meals
})

const mapDispatchToProps = {
  addMeal: addMeal
}


export default connect (mapStateToProps, mapDispatchToProps)(Home)