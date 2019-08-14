import React, { Component } from 'react'
import { View, TouchableOpacity, AsyncStorage, Image } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Icon } from 'native-base'

import Text from './Text'
import colors from '../config/colors'

export default class Menu extends Component {
	constructor(props) {
		super(props)

		this.state = {
			name: 'Chibuokem'
		}
	}

	async componentDidMount() {
		await AsyncStorage.getItem('user')
			.then(user => {
				if (user) this.setState({ name: JSON.parse(user).firstName })
			})
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={[styles.item, styles.header]}>
					<TouchableOpacity onPress={() => Actions.drawerClose()}>
						<Icon name="ios-close" fontSize={24} />
					</TouchableOpacity>
					<Text style={{ ...styles.itemText, ...styles.headerText }} numberOfLines={1}>
						{this.state.name}
					</Text>
				</View>
				<TouchableOpacity style={styles.item} onPress={() => Actions.Home()}>
					<Image style={{ height: 20 * (4 / 3), width: 20 }} source={require('../assets/label-right-arrow-outline.png')} />
					<Text style={styles.itemText}>Home</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.item} onPress={() => Actions.History()}>
					<Image style={{ height: 20 * (10 / 9), width: 20 }} source={require('../assets/set-alarm.png')} />
					<Text style={styles.itemText}>History</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.item} onPress={() => Actions.Settings()}>
					<Image style={{ height: 20, width: 20 }} source={require('../assets/settings-cogwheel-button.png')} />
					<Text style={styles.itemText}>Settings</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.item} onPress={() => Actions.Special()}>
					<Image style={{ height: 20 * (5 / 3), width: 20 }} source={require('../assets/crane.png')} />
					<Text style={styles.itemText}>Special Supply</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = {
	container: {
		flex: 1,
		backgroundColor: '#fff',
		padding: 30
	},
	item: {
		paddingVertical: 10,
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start',
		flexDirection: 'row'
	},
	header: {
		marginBottom: 30
	},
	itemText: {
		color: '#000',
		fontSize: 22,
		marginLeft: 15
	},
	headerText: {
		fontSize: 26
	}
}
