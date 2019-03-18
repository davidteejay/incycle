import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, Modal, ScrollView } from 'react-native'
import { Icon, List, ListItem } from 'native-base'

import styles from '../styles'
import colors from '../../../../config/colors'

export default class Form2 extends Component {
	constructor(props){
		super(props)

		this.state = {
			modalVisible: false,
			show: '',
			index: 1
		}
	}

	handleInput(key, value) {
		this.props.getInput({
			key, value
		})
	}

	componentDidMount(){
		this.props.getStates()
	}

	setModalVisible(show, index){
		if (index === 1){
			if (show === 'lga' && this.props.selectedState.length < 1) alert('Select a state first') 
			else this.setState({
				modalVisible: true,
				show,
				index
			})
		} else if (index === 2){
			if (show === 'lga' && this.props.selectedState2.length < 1) alert('Select a state first') 
			else this.setState({
				modalVisible: true,
				show,
				index
			})
		}		
	}

	render() {
		return (
			<View style={styles.content}>
				<View style={styles.inputCover}>
					<Text style={{ ...styles.label, fontSize: 32 }}>Home Address</Text>
					<View style={styles.split}>
						<TouchableOpacity style={{ ...styles.input, ...styles.splitCover }} onPress={this.setModalVisible.bind(this, 'state', 1)}>
							<Text style={styles.splitText}>
								{this.props.selectedState.length < 1 ? "Select State" : this.props.selectedState}
							</Text>								
							<Icon android="md-arrow-dropdown" ios="ios-arrow-dropdown" style={styles.splitIcon} />
						</TouchableOpacity>
						<TouchableOpacity disabled={this.props.selectedState === ''} style={{ ...styles.input, ...styles.splitCover }} onPress={this.setModalVisible.bind(this, 'lga', 1)}>
							<Text style={styles.splitText}>
								{this.props.selectedLga.length < 1 ? "Select LGA" : this.props.selectedLga}
							</Text>
							<Icon android="md-arrow-dropdown" ios="ios-arrow-dropdown" style={styles.splitIcon} />
						</TouchableOpacity>
					</View>
					<Text style={{ ...styles.label, marginTop: 20 }}>House Number, Street and Area</Text>
					<TextInput
						style={styles.input}
						placeholder="E.g. No 4, Onikan street"
						placeholderTextColor={colors.grey}
						returnKeyType="next"
						// onSubmitEditing={() => this.numberInput.focus()}
						keyboardType="default"
						ref={address => (this.addressInput = address)}
						autoCorrect={false} underlineColorAndroid="transparent"
						onChangeText={this.handleInput.bind(this, "address")}
						value={this.props.address}
					/>
				</View>
				<View style={{ ...styles.inputCover, marginTop: 30 }}>
					<Text style={{ ...styles.label, fontSize: 32 }}>Collection Address</Text>
					<View style={styles.split}>
						<TouchableOpacity style={{ ...styles.input, ...styles.splitCover }} onPress={this.setModalVisible.bind(this, 'state', 2)}>
							<Text style={styles.splitText}>
								{this.props.selectedState2.length < 1 ? "Select State" : this.props.selectedState2}
							</Text>								
							<Icon android="md-arrow-dropdown" ios="ios-arrow-dropdown" style={styles.splitIcon} />
						</TouchableOpacity>
						<TouchableOpacity disabled={this.props.selectedState2 === ''} style={{ ...styles.input, ...styles.splitCover }} onPress={this.setModalVisible.bind(this, 'lga', 2)}>
							<Text style={styles.splitText}>
								{this.props.selectedLga2.length < 1 ? "Select LGA" : this.props.selectedLga2}
							</Text>
							<Icon android="md-arrow-dropdown" ios="ios-arrow-dropdown" style={styles.splitIcon} />
						</TouchableOpacity>
					</View>
					<Text style={{ ...styles.label, marginTop: 20 }}>House Number, Street and Area</Text>
					<TextInput
						style={styles.input}
						placeholder="E.g. No 4, Onikan street"
						placeholderTextColor={colors.grey}
						returnKeyType="next"
						// onSubmitEditing={() => this.numberInput.focus()}
						keyboardType="default"
						ref={address => (this.colAddressInput = address)}
						autoCorrect={false} underlineColorAndroid="transparent"
						onChangeText={this.handleInput.bind(this, "colAddress")}
						value={this.props.colAddress}
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
										this.state.index === 1 ? this.props.selectState(state) : this.props.selectState2(state)
									}}>
										<Text>{state}</Text>
									</ListItem>
								}) : this.props.lgas.map((lga, i) => {
									return <ListItem key={i} onPress={() => {
										this.setState({ modalVisible: false })
										this.state.index === 1 ? this.props.selectLga(lga.name) : this.props.selectLga2(lga.name)
									}}>
										<Text>{lga.name}</Text>
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
