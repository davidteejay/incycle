import React, { Component } from 'react'
import { View, ScrollView, Image, TextInput, Modal } from 'react-native'

import Header from '../../../components/Header'
import Text from '../../../components/Text'
import Button from '../../../components/Button'
import Preloader from '../../../components/Preloader'

import styles from './styles';
import colors from '../../../config/colors'

export default class Home extends Component {
	constructor(props){
		super(props)

		this.state = {
			visible: false,
			supply: 0
		}

		this.handleSupply = this.handleSupply.bind(this)
	}

	handleInput(key, value){
		this.props.getInput({
			key, value
		})
	}

	toggleModal = visible => {
		this.setState({ visible })
	}

	handleSupply(){
		let { supply } = this.state
		const { newSupply } = this.props
		supply += parseInt(newSupply)
		this.setState({ supply })

		this.toggleModal(true)
	}

	render(){
		const { newSupply, homeLoading } = this.props
		const { supply } = this.state

		return <View style={styles.container}>
			<Header
				TitleComponent={
					<View style={styles.titleContainer}>
						<View style={styles.title} numberOfLines={1}>
							<Text style={styles.titleText}>
								April Target: 1 Ton of Metal at N200k
							</Text>
						</View>
					</View>
				}
			/>
			<ScrollView style={styles.body}>
				<View style={styles.padding}>
					<View style={styles.walletCover}>
						<View style={styles.walletRow}>
							<Text isBold numberOfLines={1} style={styles.walletText}>
								My wallet
							</Text>
							<Image
								source={require('../../../assets/wallet.png')}
								style={{ height: 50, width: 50 }}
							/>
						</View>
						<View style={styles.walletRow}>
							<Text numberOfLines={1} style={styles.walletText}>
								Paid
							</Text>
							<Text numberOfLines={1} isBold style={{ ...styles.walletAmount, color: colors.green}}>
								N50,000
							</Text>
						</View>
						<View style={styles.walletRow}>
							<Text numberOfLines={1} style={styles.walletText}>
								To withdraw
							</Text>
							<Text numberOfLines={1} isBold style={{ ...styles.walletAmount, color: colors.red }}>
								N23,234
							</Text>
						</View>
					</View>
				</View>
				<Text style={styles.subText}>
					This week Target
				</Text>
				<View style={styles.meterCover}>
					<View style={{
						...styles.meterSide,
						alignItems: 'flex-end'
					}}>
						<Text numberOfLines={1} style={styles.meterSideText}>
							Apr 15
						</Text>
						<Image
							source={require('../../../assets/wall-clock.png')}
							style={{ height: 30, width: 30 }}
						/>
						<Text numberOfLines={1} style={styles.meterSideText}>
							Apr 08
						</Text>
					</View>
					<View style={styles.meter}>
						<View style={styles.block} />
						<View style={{ ...styles.level, height: supply === 0 ? 0 : `${(supply / 250) * 100}%`, maxHeight: 200 }}/>
						<Text numberOfLines={1} isBold style={styles.meterText}>{supply}kg</Text>
					</View>
					<View style={{
						...styles.meterSide,
						alignItems: 'flex-start'
					}}>
						<Text numberOfLines={1} style={styles.meterSideText}>
							250kg
						</Text>
						<Image
							source={require('../../../assets/scale.png')}
							style={{ height: 30, width: 17 }}
						/>
						<Text numberOfLines={1} style={styles.meterSideText}>
							0kg
						</Text>
					</View>
				</View>
				<View style={styles.inputCover}>
					<Text style={{
						...styles.subText,
						paddingVertical: 0,
						backgroundColor: 'transparent'
					}}>
						New Supply
					</Text>
					<TextInput
						value={newSupply}
						onChangeText={this.handleInput.bind(this, 'newSupply')}
						placeholder="e.g. 15"
						placeholderTextColor={colors.grey}
						ref={input => this.supplyInput = input}
						returnKeyType="go"
						onSubmitEditing={() => this.handleSupply}
						keyboardType="number-pad"
						style={styles.supplyInput}
					/>
					<Button
						small
						hasIcon
						icon="arrow-forward"
						onPress={this.handleSupply}
						style={styles.supplyButton}
						text="Submit"
					/>
				</View>
			</ScrollView>
			<Modal
				visible={this.state.visible}
				onRequestClose={() => this.toggleModal(false)}
				animationType="fade"
				transparent
			>
				<View style={styles.modalCover}>
					<View style={styles.modal}>
						<Image
							source={require('../../../assets/scale.png')}
							style={{ height: 50, width: 50 * (17 / 30) }}
						/>
						<Text isBold style={styles.modalTitle}>New Supply</Text>
						<Text style={styles.modalText}>{newSupply}kg has been added to your supply</Text>
						<Button
							small
							filled={false}
							onPress={() => this.toggleModal(false)}
							text="Dismiss"
						/>
					</View>
				</View>
			</Modal>
			<Preloader modalVisible={homeLoading} />
		</View>
	}
}
