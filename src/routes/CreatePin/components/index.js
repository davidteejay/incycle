import React, { Component } from 'react'
import { View, Text, TextInput, ScrollView } from 'react-native'

import colors from '../../../config/colors'
import Button from '../../../components/Button'
import StatusBar from '../../../components/StatusBar'
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
		return (
			<View style={styles.container}>
				<StatusBar backgroundColor={colors.green}/>
				<ScrollView contentContainerStyle={styles.content}>
					<Text style={{ ...styles.topText, color: colors.green }}>
						Congrats, {this.props.name.split(" ")[0]}!{'\n'}
						Now, let's create your quick login
					</Text>
					<Text style={styles.heading}>
						Let's{'\n'}
						Begin
					</Text>
					<Text style={styles.topText}>Your Phone Number</Text>
					<Text style={styles.phone}>{this.props.phone}</Text>
					<Text style={styles.topText}>Create your 4-pin password</Text>
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
						/>
					</View>
					<Text style={styles.bottomText}>
						Note: Your phone number and 4-pin password will be your signin details from now on
					</Text>
					<View style={styles.footer}>
						<Button text="Sign In"/>
					</View>
				</ScrollView>
			</View>
		)
	}
}
