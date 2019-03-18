import React, { Component } from 'react'
import { View, ScrollView, TouchableOpacity } from 'react-native'
import { Icon } from 'native-base'

import colors from '../../../config/colors'
import Button from '../../../components/Button'
import StatusBar from '../../../components/StatusBar'
import styles from './styles'

import Form1 from './Forms/Form1'
import Form2 from './Forms/Form2'
import Form3 from './Forms/Form3'
import Form4 from './Forms/Form4'

export default class Signup extends Component {
	constructor(props){
		super(props)

		this.state = {
			currentForm: 1
		}
	}

	next(){
		let { currentForm } = this.state

		if (currentForm !== 4){
			currentForm++
			this.setState({ currentForm })
		} else this.props.signup()
	}

	back(){
		let { currentForm } = this.state

		// if (index === 1 && currentForm !== 4){
			currentForm--
			this.setState({ currentForm })
		// } else this.props.signup()
	}

	render(){
		return (
			<ScrollView contentContainerStyle={styles.container}>
				<StatusBar backgroundColor={colors.green}/>
				<View style={styles.container}>
					<View style={styles.header}>
						{this.state.currentForm > 1 && (
							<TouchableOpacity onPress={this.back.bind(this)}>
								<Icon ios='ios-arrow-back' android='md-arrow-back' style={styles.headerIcon}/>
							</TouchableOpacity>
						)}
					</View>
					{this.state.currentForm === 1 && <Form1
						// getInput={this.props.getInput}
						// name={this.props.name}
						// phone={this.props.phone}
						{ ...this.props }
					/>}
					{this.state.currentForm === 2 && <Form2
						// getInput={this.props.getInput}
						// getStates={this.props.getStates}
						// selectedState={this.props.selectedState}
						// selectedState2={this.props.selectedState2}
						// states={this.props.states}
						// selectState={this.props.selectState}
						// selectState2={this.props.selectState2}
						// lgas={this.props.lgas}
						// selectedLga={this.props.selectedLga}
						// selectedLga2={this.props.selectedLga2}
						// selectLga={this.props.selectLga}
						// selectLga2={this.props.selectLga2}
						// address={this.props.address}
						// colAddress={this.props.colAddress}
						{ ...this.props }
					/>}
					{this.state.currentForm === 3 && <Form3
						// getInput={this.props.getInput}
						// getBanks={this.props.getBanks}
						// banks={this.props.banks}
						// selectedBank={this.props.selectedBank}
						// selectBank={this.props.selectBank}
						// accountName={this.props.accountName}
						// accountNumber={this.props.accountNumber}
						// spouseNumber={this.props.spouseNumber}
						{ ...this.props }
					/>}
					{this.state.currentForm === 4 && <Form4
						// getInput={this.props.getInput}
						// getStates={this.props.getStates}
						// selectedState3={this.props.selectedState3}
						// states={this.props.states}
						// selectState3={this.props.selectState3}
						// lgas={this.props.lgas}
						// selectedLga3={this.props.selectedLga3}
						// selectLga3={this.props.selectLga3}
						// guarantorName={this.props.guarantorName}
						// guarantorName={this.props.guarantorPhone}
						// guarantorAddress={this.props.guarantorAddress}
						{ ...this.props }
					/>}
					<View style={styles.footer}>
						<View style={styles.dots}>
							<View style={this.state.currentForm > 0 ? { ...styles.dot, ...styles.dotActive } : styles.dot}/>
							<View style={this.state.currentForm > 1 ? { ...styles.dot, ...styles.dotActive } : styles.dot} />
							<View style={this.state.currentForm > 2 ? { ...styles.dot, ...styles.dotActive } : styles.dot} />
							<View style={this.state.currentForm > 3 ? { ...styles.dot, ...styles.dotActive } : styles.dot} />
						</View>
						<Button style={{ marginTop: 20 }} text={this.state.currentForm < 4 ? "Next" : "Submit"} hasIcon={this.state.currentForm < 4} icon='arrow-forward' backgroundColor={colors.green} onPress={this.next.bind(this)}/>
					</View>
				</View>
			</ScrollView>
		)
	}
}
