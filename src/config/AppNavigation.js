import { StackNavigator } from 'react-navigation'
import Home from '../screens/Home'
import AddMeal from '../screens/AddMeal'
export default StackNavigator({
  HomeScreen: {
    screen: Home
  },
  AddMealScreen: {
    screen: AddMeal
  }
}, {
  initialRouteName: 'HomeScreen'
})