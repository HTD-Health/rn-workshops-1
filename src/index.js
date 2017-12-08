import React from 'react'
import { Provider } from 'react-redux'

import createStore from './redux'
import Home from './screens/Home'
import AppNavigation from './config/AppNavigation'
const store = createStore()

const Main = () => (
  <Provider store={store}>
    <AppNavigation />
  </Provider>
)

export default Main