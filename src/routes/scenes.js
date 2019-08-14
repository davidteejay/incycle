import React from 'react'
import { Actions, Scene, Router, Drawer } from 'react-native-router-flux'

import Launch from './Launch'
import Menu from '../components/Drawer'

import HomeContainer from './Home/containers/HomeContainer'
import HistoryContainer from './History/containers/HistoryContainer'
import Special from './Special/'
import Settings from './Settings/'

import Signup1Container from './Signup1/containers/Signup1Container'
import Signup2Container from './Signup2/containers/Signup2Container'
import Signup3Container from './Signup3/containers/Signup3Container'
import Signup4Container from './Signup4/containers/Signup4Container'
import CreatePinContainer from './CreatePin/containers/CreatePinContainer'
import LoginContainer from './Login/containers/LoginContainer'

const authRoutes = [
  { name: 'Signup1', key: 'Signup1', component: Signup1Container, title: 'Sign Up', hideNavBar: true, initial: true },
  { name: 'Signup2', key: 'Signup2', component: Signup2Container, title: 'Sign Up', hideNavBar: true },
  { name: 'Signup3', key: 'Signup3', component: Signup3Container, title: 'Sign Up', hideNavBar: true },
  { name: 'Signup4', key: 'Signup4', component: Signup4Container, title: 'Sign Up', hideNavBar: true },
  { name: 'CreatePin', key: 'CreatePin', component: CreatePinContainer, title: 'Create Pin', hideNavBar: true },
  { name: 'Login', key: 'Login', component: LoginContainer, title: 'Login', hideNavBar: true },
]

const mainRoutes = [
  { name: 'Home', key: 'Home', component: HomeContainer, title: 'Home', hideNavBar: true },
  { name: 'History', key: 'History', component: HistoryContainer, title: 'History', hideNavBar: true, initial: true },
  { name: 'Special', key: 'Special', component: Special, title: 'Special Supply', hideNavBar: true },
  { name: 'Settings', key: 'Settings', component: Settings, title: 'Settings', hideNavBar: true },
]

export default Actions.create(
  <Router>
    <Scene key="root" initial hideNavBar>
      <Scene key="Launch" component={Launch} initial hideNavBar />
    </Scene>
    <Scene key="Auth" hideNavBar>
      {authRoutes.map(route => {
        return <Scene { ...route } />
      })}
    </Scene>
    <Drawer key="Main" hideNavBar drawerWidth={300} contentComponent={Menu}>
      {mainRoutes.map(route => {
        return <Scene { ...route } />
      })}
    </Drawer>
  </Router>
)
