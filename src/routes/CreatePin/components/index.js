import React, { Component } from 'react'
import { View, TextInput, ScrollView } from 'react-native'

import colors from '../../../config/colors'
import Button from '../../../components/Button'
import Preloader from "../../../components/Preloader";
import Text from '../../../components/Text'

import styles from './styles'

export default class CreatePin extends Component {
	handleInput(key, value) {
		if (value !== ''){
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

	render(){
		const { pin1, pin2, pin3, pin4 } = this.props

		return (
			<ScrollView style={styles.container}>
				<View style={styles.content}>
					<Text style={{ ...styles.topText, color: colors.green }}>
						Congrats, {this.props.name.split(" ")[0]}!{'\n'}
						Now, let's create your quick login
					</Text>
					<Text isBold style={styles.heading}>
						Let's{'\n'}
						Begin
					</Text>
					<Text style={styles.topText}>Your Phone Number</Text>
					<Text style={styles.phone}>{this.props.phone}</Text>
					<Text style={styles.topText}>Create your 4-pin password</Text>
					<View style={styles.inputCover}>
						<TextInput
							value={pin1}
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
						/>
						<TextInput
							value={pin2}
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
						/>
						<TextInput
							value={pin3}
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
						/>
						<TextInput
							value={pin4}
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
						/>
					</View>
					<Text style={styles.bottomText}>
						Note: Your phone number and 4-pin password will be your signin details from now on
					</Text>
					<View style={styles.footer}>
						<Button text="Submit" onPress={() => this.props.signup()}/>
					</View>
				</View>
				<Preloader modalVisible={this.props.createLoading}/>
			</ScrollView>
		)
	}
}
