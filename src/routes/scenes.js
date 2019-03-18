import React from 'react'
import { Actions, Scene } from 'react-native-router-flux'

import Launch from './Launch'
import HomeContainer from './Home/containers/HomeContainer'
import SignupContainer from './Signup/containers/SignupContainer'
import CreatePinContainer from './CreatePin/containers/CreatePinContainer'


export default Actions.create(
  <Scene>
    <Scene key="root" initial hideNavBar>
      <Scene key="Launch" component={Launch} title="Home" initial hideNavBar />
    </Scene>
    <Scene key="Auth" hideNavBar>
      <Scene key="Signup" component={SignupContainer} title="Signup" initial hideNavBar />
      <Scene key="CreatePin" component={CreatePinContainer} title="CreatePin" hideNavBar/>
    </Scene>
    <Scene key="Main" hideNavBar>
      <Scene key="Home" component={HomeContainer} title="Home" initial hideNavBar />
    </Scene>
  </Scene>
)
