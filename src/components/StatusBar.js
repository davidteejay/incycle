import React from 'react'
import { Platform, View } from 'react-native'

import colors from '../config/colors'

export default ({ backgroundColor = colors.green }) => {
	return (
		<View>
			{Platform.OS === 'android' && (
				<View style={{ height: 24, backgroundColor: backgroundColor }}></View>
			)}
		</View>
	)
}
