import React, { Component } from 'react'
import { View, ScrollView, TouchableOpacity, BackHandler, Platform, Alert, TextInput } from 'react-native'
import { Icon } from 'native-base'
import { Actions } from 'react-native-router-flux'

import colors from '../../../config/colors'
import Button from '../../../components/Button'
import Text from '../../../components/Text'
import Preloader from '../../../components/Preloader'
import styles from './styles'

export default class Signup extends Component {
	constructor(props) {
		super(props)

		this.state = {}

		this.back = this.back.bind(this)
	}

	componentDidMount() {
		if (Platform.OS == "android") BackHandler.addEventListener('hardwareBackPress', this.back);
	}

	componentWillUnmount() {
		if (Platform.OS == "android") BackHandler.removeEventListener('hardwareBackPress', this.back);
	}

	handleInput(key, value) {
		this.props.getInput({
			key, value
		})
	}

	back() {
		Alert.alert(
			'',
			'Are you sure you want to exit the application',
			[{
				text: 'No',
				style: 'default',
			}, {
				text: 'Yes',
				style: 'destructive',
				onPress: () => BackHandler.exitApp()
			}]
		)

		return true
	}

	render() {
		const { name, phone, loading, checkPhone } = this.props

		return (
			<ScrollView contentContainerStyle={styles.container}>
				<View style={styles.container}>
					<View style={styles.content}>
						<Text style={styles.heading} isBold>
							Hi{'\n'}Vendor
						</Text>
						<Text style={styles.subheading}>
							Let's begin with your registration
						</Text>
						<View style={styles.inputCover}>
							<Text style={styles.label}>Your Name</Text>
							<TextInput
								style={styles.input}
								placeholder="E.g. Adekunle Michael" placeholderTextColor={colors.grey}
								returnKeyType="next"
								onSubmitEditing={() => this.numberInput.focus()}
								keyboardType="default"
								ref={name => (this.nameInput = name)}
								autoCorrect={false} underlineColorAndroid="transparent"
								onChangeText={this.handleInput.bind(this, "name")}
								value={name}
							/>
						</View>
						<View style={styles.inputCover}>
							<Text style={styles.label}>Your Phone Number</Text>
							<TextInput
								style={styles.input}
								placeholder="E.g. 09000000000" placeholderTextColor={colors.grey}
								returnKeyType="go"
								keyboardType="numeric"
								ref={number => (this.numberInput = number)}
								autoCorrect={false} underlineColorAndroid="transparent"
								onChangeText={this.handleInput.bind(this, "phone")}
								value={phone}
								onSubmitEditing={checkPhone}
							/>
						</View>
					</View>
					<TouchableOpacity onPress={() => Actions.Login()}>
						<Text style={styles.bottomText}>
							Already have an account? Sign In!
						</Text>
					</TouchableOpacity>
					<View style={styles.footer}>
						<View style={styles.dots}>
							<View style={{ ...styles.dot, ...styles.dotActive }} />
							<View style={styles.dot} />
							<View style={styles.dot} />
							<View style={styles.dot} />
						</View>
						<Button
							style={{ marginTop: 20 }}
							text="Next"
							disabled={name === '' || phone.length !== 11 || !phone.match(/^[+]*[0-9]*$/)}
							hasIcon
							icon='arrow-forward'
							backgroundColor={colors.green}
							onPress={checkPhone}
						/>
					</View>
				</View>
				<Preloader modalVisible={loading} transparent/>
			</ScrollView>
		)
	}
}
