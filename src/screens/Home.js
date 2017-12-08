import React from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'
import { openAddMealScreen } from '../lib/NavigationHelpers'

class Home extends React.Component {
  render () {
    return (
      <View style={{flex: 1}}>
       
      </View>
    )
  }
}

const mapStateToProps = state => ({
  meals: state.meals
})

export default connect(mapStateToProps)(Home)