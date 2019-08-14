import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Icon } from 'native-base'

import colors from '../config/colors'
import Text from './Text'

export default ({ style, text, small = false, hasIcon = false, icon = '', filled = true, backgroundColor = colors.green, color = '#fff', onPress = () => { return null }, disabled = false }) => {	
	const styles = {
		button: {
			paddingHorizontal: small ? 30 : 60,
			paddingVertical: small ? 5 : 10,
			backgroundColor: filled ? (disabled ? colors.grey : backgroundColor) : 'transparent',
			borderRadius: 100,
			borderWidth: 1,
			borderColor: disabled ? colors.grey : backgroundColor,
			borderStyle: 'solid',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			flexDirection: 'row',
			fontFamily: 'Poppins',
			...style,
		},
		text: {
			color: filled ? '#fff' : colors.green,
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
		<TouchableOpacity disabled={disabled} style={styles.button} onPress={onPress}>
			<Text style={styles.text}>{text}</Text>
			{hasIcon && <Icon color={color} android={`md-${icon}`} ios={`ios-${icon}`} style={styles.icon} />}
		</TouchableOpacity>
	)
}
