import React, { Fragment } from 'react'
import { StatusBar} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Navigation from './src/navigation/Navigation'
import { Provider } from 'react-redux'
import store from './src/redux/store'
import Toast from 'react-native-toast-message';
const Home = () => {
  return (
    <Fragment>

      <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="#419ff1" />
      <NavigationContainer>
      <Navigation />
      <Toast ref={(ref) => Toast.setRef(ref)} />
      </NavigationContainer>
      </Provider>
    </Fragment>
  )
}
export default Home

