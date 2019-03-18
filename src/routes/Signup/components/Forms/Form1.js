import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'

import styles from '../styles'
import colors from '../../../../config/colors'

export default class Form1 extends Component {
	handleInput(key, value){
		this.props.getInput({
			key, value
		})
	}

	render(){
		return (
			<View style={styles.content}>
				<Text style={styles.heading}>
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
						value={this.props.name}
					/>
				</View>
				<View style={styles.inputCover}>
					<Text style={styles.label}>Your Phone Number</Text>
					<TextInput
						style={styles.input}
						placeholder="E.g. 09000000000" placeholderTextColor={colors.grey}
						returnKeyType="done"
						keyboardType="numeric"
						ref={number => (this.numberInput = number)}
						autoCorrect={false} underlineColorAndroid="transparent"
						onChangeText={this.handleInput.bind(this, "phone")}
						value={this.props.phone}
					/>
				</View>
			</View>
		)
	}
}
