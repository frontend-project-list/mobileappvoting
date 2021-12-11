import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screeens/Login'
import Home from '../screeens/Home';
import Header from '../components/common/Header';
import Candidates from '../screeens/Candidates';
import Register from '../screeens/Register';






const  {Navigator,Screen} = createStackNavigator();
const Navigation = (props) => {
  return (
   <Navigator screenOptions={{header:(props)=><Header {...props} />}}>
      <Screen name="Login" component={Login}  />
      <Screen  name="Home" component={Home} />
      <Screen  name="Candidates" component={Candidates} />
      <Screen  name="Register" component={Register} />
   </Navigator>
  )
}

export default Navigation
