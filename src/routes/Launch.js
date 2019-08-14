import React, { Component } from 'react'
import { View, AsyncStorage } from 'react-native'
import { Actions } from 'react-native-router-flux'

export default class Launch extends Component {
	async componentWillMount(){
		await AsyncStorage.getItem('user')
			.then(user => {
				if (user) Actions.Main()
				else Actions.Auth()
			})
			.catch(() => Actions.Auth())
	}

	render(){
		return <View/>
	}
}
