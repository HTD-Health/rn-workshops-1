import React from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'
import MealList from '../components/MealList'
import Button from '../components/Button'
import { openAddMealScreen } from '../lib/NavigationHelpers'

class Home extends React.Component {
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

export default connect(mapStateToProps)(Home)