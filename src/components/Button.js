import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { Icon } from 'native-base'

import colors from '../config/colors'

export default ({ style, text, hasIcon = false, icon = '', filled = true, backgroundColor = colors.green, color = '#fff', onPress = () => { return null } }) => {	
	const styles = {
		button: {
			...style,
			paddingHorizontal: 40,
			paddingVertical: 10,
			backgroundColor: filled ? backgroundColor : 'transparent',
			borderRadius: 100,
			borderWidth: 1,
			borderColor: backgroundColor,
			borderStyle: 'solid',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			flexDirection: 'row'
		},
		text: {
			color,
			fontSize: 22
		},
		icon: {
			fontSize: 22,
			color,
			marginLeft: 20,
			fontWeight: '300'
		}
	}

	return (
		<TouchableOpacity style={styles.button} onPress={onPress}>
			<Text style={styles.text}>{text}</Text>
			{hasIcon && <Icon color={color} android={`md-${icon}`} ios={`ios-${icon}`} style={styles.icon} />}
		</TouchableOpacity>
	)
}
