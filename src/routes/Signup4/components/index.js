import React, { Component } from 'react'
import { View, ScrollView, TouchableOpacity, BackHandler, Platform, Alert, Modal, TextInput } from 'react-native'
import { Icon, List, ListItem } from 'native-base'
import { Actions } from 'react-native-router-flux'

import colors from '../../../config/colors'
import Button from '../../../components/Button'
import Text from '../../../components/Text'
import StatusBar from '../../../components/StatusBar'
import Preloader from '../../../components/Preloader'
import styles from './styles'

export default class Signup extends Component {
	constructor(props){
		super(props)

		this.state = {
			modalVisible: false,
			show: ''
		}
	}

	handleInput(key, value) {
		this.props.getInput({
			key, value
		})
	}

	componentDidMount() {
		this.props.getStates()
	}

	setModalVisible(show) {
		if (show === 'lga' && this.props.selectedState3.length < 1) alert('Select a state first')
		else this.setState({
			modalVisible: true,
			show
		})
	}

	render(){
		const { guarantorName, guarantorNumber, guarantorAddress, selectedLga3, selectedState3 } = this.props
		return (
			<ScrollView contentContainerStyle={styles.container}>
				<View style={styles.container}>
					<View style={styles.header}>
						<TouchableOpacity onPress={() => Actions.pop()}>
							<Icon ios='ios-arrow-back' android='md-arrow-back' style={styles.headerIcon}/>
						</TouchableOpacity>
					</View>
					<View style={styles.content}>
				<Text style={{ ...styles.label, fontSize: 32 }}>Guarantor's Details</Text>
				<View style={styles.inputCover}>
					<Text style={styles.label}>Guarantor's Name</Text>
					<TextInput
						style={styles.input}
						placeholder="E.g. Adekunle Michael" placeholderTextColor={colors.grey}
						returnKeyType="next"
						onSubmitEditing={() => this.gNumberInput.focus()}
						keyboardType="default"
						ref={name => (this.gNameInput = name)}
						autoCorrect={false} underlineColorAndroid="transparent"
						onChangeText={this.handleInput.bind(this, "guarantorName")}
						value={guarantorName}
					/>
				</View>
				<View style={styles.inputCover}>
					<Text style={styles.label}>Guarantor's Phone Number</Text>
					<TextInput
						style={styles.input}
						placeholder="E.g. 09000000000" placeholderTextColor={colors.grey}
						returnKeyType="done"
						keyboardType="numeric"
						ref={number => (this.gNumberInput = number)}
						autoCorrect={false} underlineColorAndroid="transparent"
						onChangeText={this.handleInput.bind(this, "guarantorNumber")}
						value={guarantorNumber}
					/>
				</View>
				<View style={styles.inputCover}>
					<Text style={{ ...styles.label, fontSize: 32 }}>Guarantor's Address</Text>
					<View style={styles.split}>
						<TouchableOpacity style={{ ...styles.input, ...styles.splitCover }} onPress={this.setModalVisible.bind(this, 'state',)}>
							<Text style={styles.splitText}>
								{selectedState3.length < 1 ? "Select State" : selectedState3}
							</Text>
							<Icon android="md-arrow-dropdown" ios="ios-arrow-dropdown" style={styles.splitIcon} />
						</TouchableOpacity>
						<TouchableOpacity disabled={this.props.selectedState3 === ''} style={{ ...styles.input, ...styles.splitCover }} onPress={this.setModalVisible.bind(this, 'lga')}>
							<Text style={styles.splitText}>
								{selectedLga3.length < 1 ? "Select LGA" : selectedLga3}
							</Text>
							<Icon android="md-arrow-dropdown" ios="ios-arrow-dropdown" style={styles.splitIcon} />
						</TouchableOpacity>
					</View>
					<Text style={{ ...styles.label, marginTop: 20 }}>House Number, Street and Area</Text>
					<TextInput
						style={styles.input}
						placeholder="E.g. No 4, Onikan street"
						placeholderTextColor={colors.grey}
						returnKeyType="done"
						// onSubmitEditing={() => this.numberInput.focus()}
						keyboardType="default"
						ref={address => (this.gAddressInput = address)}
						autoCorrect={false} underlineColorAndroid="transparent"
						onChangeText={this.handleInput.bind(this, "guarantorAddress")}
						value={guarantorAddress}
					/>
				</View>
				<Modal
					animationType="fade"
					transparent={true}
					visible={this.state.modalVisible}
					onRequestClose={() => this.setState({ modalVisible: false })}
				>
					<View style={styles.modalCover}>
						<ScrollView style={styles.modal}>
							<List noIndent>
								{this.state.show === 'state' ? this.props.states.map((state, i) => {
									return <ListItem key={i} onPress={() => {
										this.setState({ modalVisible: false })
										this.props.selectState3(state)
									}}>
										<Text>{state}</Text>
									</ListItem>
								}) : this.props.lgas.map((lga, i) => {
									return <ListItem key={i} onPress={() => {
										this.setState({ modalVisible: false })
										this.props.selectLga3(lga.name)
									}}>
										<Text>{lga.name}</Text>
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
							<View style={{ ...styles.dot, ...styles.dotActive }}/>
							<View style={{ ...styles.dot, ...styles.dotActive }}/>
						</View>
						<Button disabled={guarantorName === '' || guarantorNumber.length !== 11 || guarantorAddress === '' || selectedLga3 === '' || selectedState3 === ''} style={{ marginTop: 20 }} text="Submit" icon='arrow-forward' backgroundColor={colors.green} onPress={() => Actions.CreatePin()}/>
					</View>
				</View>
			</ScrollView>
		)
	}
}
