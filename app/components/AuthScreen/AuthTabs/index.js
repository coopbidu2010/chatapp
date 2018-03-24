import { TabNavigator } from 'react-navigation'
import {Image} from 'react-native'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
import RePassForm from './RePassForm/repass.js'
const routeConfigs = {
  Login: {
    screen: LoginForm,
  },
  SignUp: {
    screen: SignUpForm,
  },
  RePass: {
    screen: RePassForm,
  }
}
const tabBarOptions = {
  tabBarOptions: {
    style: {
        backgroundColor: 'white',
        height : 50,
      },
      activeTintColor: 'rgba(52, 152, 219,1.0)',
      inactiveTintColor: 'black',
      labelStyle: {
        fontSize: 12,
        margin: 0
      },
      showIcon: true,
      pressColor:'#823453',
      pressOpacity:0.8,
      upperCaseLabel: false,
      indicatorStyle: {
        height: 0
      }
  },
  tabBarPosition: 'bottom'
}

export default TabNavigator(routeConfigs, tabBarOptions)
