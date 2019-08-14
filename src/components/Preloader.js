import React from "react"
import { View, ActivityIndicator, Modal, Platform } from "react-native"

import colors from "../config/colors"

export default ({
	modalVisible = false,
	onRequestClose = () => { return null },
	backgroundColor = '#ffffff',
	color = colors.green,
	transparent = false
}) => {
	const styles = {
		spinnerStyle: {
			backgroundColor: transparent ? `${backgroundColor}44` : backgroundColor,
			flex: 1,
			justifyContent: "center",
			alignItems: "center"
		}
	}

	return (
		<Modal
			animationType="fade"
			transparent={true}
			visible={modalVisible}
			onRequestClose={onRequestClose}
		>
			<View style={styles.spinnerStyle}>
				<ActivityIndicator color={color} size={Platform.OS === 'android' ? 60 : "large"} />
			</View>
		</Modal>
	)
}
