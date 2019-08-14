import React from 'react'
import { Text } from 'react-native'

const TextComponent = (props) => {
	return <Text {...props} style={{ ...props.style, fontFamily: props.isBold ? 'PoppinsBold' : 'Poppins' }}>{props.children}</Text>
}

export default TextComponent
