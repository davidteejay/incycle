import React, { Component } from 'react'
import { View, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'

import colors from '../../../config/colors'
import Button from '../../../components/Button'
import StatusBar from "../../../components/StatusBar";
import Text from '../../../components/Text'
import styles from './styles'

export default class Login extends Component {
	handleInput(key, value) {
		if (value !== '') {
			if (key === 'pin1') this.input2.focus()
			else if (key === 'pin2') this.input3.focus()
			else if (key === 'pin3') this.input4.focus()
		} else {
			if (key === 'pin2') this.input1.focus()
			else if (key === 'pin3') this.input2.focus()
			else if (key === 'pin4') this.input3.focus()
		}

		this.props.getInput({
			key,
			value
		})
	}

	render() {
		const { pin1, pin2, pin3, pin4, phone } = this.props;

		return (
			<ScrollView style={styles.container}>
				<View style={styles.content}>
					<Text isBold style={styles.heading}>
						Login to{'\n'}
						inCycle
					</Text>
					<Text style={styles.topText}>Your Phone Number</Text>
					<TextInput
						style={{ ...styles.input, width: '100%' }}
						returnKeyType="next"
						onSubmitEditing={() => this.input1.focus()}
						keyboardType="number-pad"
						ref={name => (this.phoneInput = name)}
						autoCorrect={false} underlineColorAndroid="transparent"
						onChangeText={this.handleInput.bind(this, "phone")}
						value={phone}
					/>
					<Text style={styles.topText}>Input your 4-pin password</Text>
					<View style={styles.inputCover}>
						<TextInput
							style={{ ...styles.input, marginLeft: 0 }}
							placeholder=""
							// placeholderTextColor="#1f3f66"
							returnKeyType="next"
							maxLength={1}
							onSubmitEditing={() => this.input2.focus()}
							keyboardType="numeric"
							autoCapitalize="none"
							ref={number => (this.input1 = number)}
							autoCorrect={false}
							underlineColorAndroid="transparent"
							onChangeText={this.handleInput.bind(this, "pin1")}
							value={pin1}
						/>
						<TextInput
							style={styles.input}
							placeholder=""
							// placeholderTextColor="#1f3f66"
							returnKeyType="next"
							maxLength={1}
							onSubmitEditing={() => this.input3.focus()}
							keyboardType="numeric"
							autoCapitalize="none"
							ref={number => (this.input2 = number)}
							autoCorrect={false}
							underlineColorAndroid="transparent"
							onChangeText={this.handleInput.bind(this, "pin2")}
							value={pin2}
						/>
						<TextInput
							style={styles.input}
							placeholder=""
							// placeholderTextColor="#1f3f66"
							maxLength={1}
							returnKeyType="next"
							onSubmitEditing={() => this.input4.focus()}
							keyboardType="numeric"
							autoCapitalize="none"
							ref={number => (this.input3 = number)}
							autoCorrect={false}
							underlineColorAndroid="transparent"
							onChangeText={this.handleInput.bind(this, "pin3")}
							value={pin3}
						/>
						<TextInput
							style={styles.input}
							placeholder=""
							// placeholderTextColor="#1f3f66"
							returnKeyType="next"
							maxLength={1}
							// onSubmitEditing={() => this.props.verifyMobile()}
							keyboardType="numeric"
							autoCapitalize="none"
							ref={number => (this.input4 = number)}
							autoCorrect={false}
							underlineColorAndroid="transparent"
							onChangeText={this.handleInput.bind(this, "pin4")}
							value={pin4}
						/>
					</View>
					<TouchableOpacity onPress={() => Actions.Signup1()}>
						<Text style={styles.bottomText}>
							Don't have an account? Sign Up!
						</Text>
					</TouchableOpacity>
					<View style={styles.footer}>
						<Button text="Sign In" onPress={() => this.props.login()} />
					</View>
				</View>
			</ScrollView>
		)
	}
}
