import React, { Component } from 'react'
import { View, ScrollView, TouchableOpacity, BackHandler, Platform, Alert, TextInput, Modal } from 'react-native'
import { List, ListItem, Icon } from 'native-base'
import { Actions } from 'react-native-router-flux'

import colors from '../../../config/colors'
import Button from '../../../components/Button'
import Text from '../../../components/Text'
import StatusBar from '../../../components/StatusBar'
import Preloader from '../../../components/Preloader'
import styles from './styles'


export default class Signup extends Component {
	constructor(props) {
		super(props)

		this.state = {
			modalVisible: false
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

	render(){
		const { selectedBank, accountName, accountNumber, spouseNumber, bvn } = this.props
		return (
			<ScrollView contentContainerStyle={styles.container}>
				<View style={styles.container}>
					<View style={styles.header}>
						<TouchableOpacity onPress={() => Actions.pop()}>
							<Icon ios='ios-arrow-back' android='md-arrow-back' style={styles.headerIcon}/>
						</TouchableOpacity>
					</View>
					<View style={styles.content}>
						<View style={styles.inputCover}>
							<Text style={{ ...styles.label, fontSize: 32, marginBottom: 5 }}>Bank Account Details</Text>
							<View style={styles.inputCover}>
								<Text style={styles.label}>BVN</Text>
								<TextInput
									style={styles.input}
									placeholder="E.g. 234567890" placeholderTextColor={colors.grey}
									returnKeyType="next"
									keyboardType="numeric"
									onSubmitEditing={() => this.accNameInput.focus()}
									ref={number => (this.bvnInput = number)}
									autoCorrect={false} underlineColorAndroid="transparent"
									onChangeText={this.handleInput.bind(this, "bvn")}
									value={bvn}
								/>
							</View>
							<TouchableOpacity style={{ ...styles.input, ...styles.splitCover }} onPress={this.setModalVisible.bind(this, true)}>
								<Text numberOfLines={1} style={styles.splitText}>
									{selectedBank.length < 1 ? "Select Bank" : selectedBank}
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
								value={accountName}
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
								value={accountNumber}
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
								value={spouseNumber}
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
					<View style={styles.footer}>
						<View style={styles.dots}>
							<View style={{ ...styles.dot, ...styles.dotActive }}/>
							<View style={{ ...styles.dot, ...styles.dotActive }}/>
							<View style={{ ...styles.dot, ...styles.dotActive }} />
							<View style={styles.dot} />
						</View>
						<Button disabled={selectedBank === '' || accountNumber === '' || accountName === '' || spouseNumber.length !== 11} style={{ marginTop: 20 }} text="Next" hasIcon icon='arrow-forward' backgroundColor={colors.green} onPress={() => Actions.Signup4()}/>
					</View>
				</View>
			</ScrollView>
		)
	}
}
