import React, { Component } from 'react'
import { View, Text, TextInput, Modal, ScrollView, TouchableOpacity } from 'react-native'
import { List, ListItem, Icon } from 'native-base'

import styles from '../styles'
import colors from '../../../../config/colors'

export default class Form3 extends Component {
	constructor(props) {
		super(props)

		this.state = {
			modalVisible: false,
		}
	}

	handleInput(key, value) {
		this.props.getInput({
			key, value
		})
	}

	componentDidMount() {
		this.props.getBanks()
	}

	setModalVisible(modalVisible) {
		this.setState({
			modalVisible
		})
	}

	render() {
		return (
			<View style={styles.content}>
				<View style={styles.inputCover}>
					<Text style={{ ...styles.label, fontSize: 32 }}>Bank Account Details</Text>
					<TouchableOpacity style={{ ...styles.input, ...styles.splitCover }} onPress={this.setModalVisible.bind(this, true)}>
						<Text numberOfLines={1} style={styles.splitText}>
							{this.props.selectedBank.length < 1 ? "Select Bank" : this.props.selectedBank}
						</Text>
						<Icon android="md-arrow-dropdown" ios="ios-arrow-dropdown" style={styles.splitIcon} />
					</TouchableOpacity>
				</View>
				<View style={styles.inputCover}>
					<Text style={styles.label}>Account Name</Text>
					<TextInput
						style={styles.input}
						placeholder="E.g. Adekunle Michael" placeholderTextColor={colors.grey}
						returnKeyType="next"
						keyboardType="default"
						onSubmitEditing={() => this.accNumInput.focus()}
						ref={number => (this.accNameInput = number)}
						autoCorrect={false} underlineColorAndroid="transparent"
						onChangeText={this.handleInput.bind(this, "accountName")}
						value={this.props.accountName}
					/>
				</View>
				<View style={styles.inputCover}>
					<Text style={styles.label}>Account Number</Text>
					<TextInput
						style={styles.input}
						placeholder="E.g. 234567890" placeholderTextColor={colors.grey}
						returnKeyType="next"
						keyboardType="numeric"
						onSubmitEditing={() => this.wifePhone.focus()}
						ref={number => (this.accNumInput = number)}
						autoCorrect={false} underlineColorAndroid="transparent"
						onChangeText={this.handleInput.bind(this, "accountNumber")}
						value={this.props.accountNumber}
					/>
				</View>
				<View style={styles.inputCover}>
					<Text style={{ ...styles.label, marginTop: 30 }}>Wife / Husband's Phone Number</Text>
					<TextInput
						style={styles.input}
						placeholder="E.g. 09000000000" placeholderTextColor={colors.grey}
						returnKeyType="done"
						keyboardType="numeric"
						ref={number => (this.wifePhone = number)}
						autoCorrect={false} underlineColorAndroid="transparent"
						onChangeText={this.handleInput.bind(this, "spouseNumber")}
						value={this.props.spouseNumber}
					/>
				</View>
				<Modal
					animationType="fade"
					transparent={true}
					visible={this.state.modalVisible}
					onRequestClose={this.setModalVisible.bind(this, false)}
				>
					<View style={styles.modalCover}>
						<ScrollView style={styles.modal}>
							<List noIndent>
								{this.props.banks.map((bank, i) => {
									return <ListItem key={i} onPress={() => {
										this.setState({ modalVisible: false })
										this.props.selectBank(bank)
									}}>
										<Text>{bank}</Text>
									</ListItem>
								})}
							</List>
						</ScrollView>
					</View>
				</Modal>
			</View>
		)
	}
}
