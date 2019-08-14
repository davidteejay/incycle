import colors from '../../../config/colors'
import { Dimensions } from 'react-native'

export default {
	container: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height - 20,
		backgroundColor: '#fff'
	},
	content: {
		width: '100%',
		height: '100%',
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'center',
		padding: 40
	},
	topText: {
		color: colors.black,
		fontSize: 22
	},
	heading: {
		fontSize: 72,
		lineHeight: 100,
		color: colors.black,
		marginVertical: 30
	},
	phone: {
		marginVertical: 20,
		borderColor: colors.green,
		borderWidth: 2,
		borderStyle: 'solid',
		borderRadius: 5,
		padding: 15,
		color: colors.green,
		backgroundColor: '#2fba6a38',
		fontSize: 22
	},
	inputCover: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		marginVertical: 10
	},
	input: {
		fontSize: 22,
		fontFamily: 'Poppins',
		height: 50,
		width: 35,
		textAlign: 'center',
		marginHorizontal: 5,
		borderColor: colors.grey,
		color: '#000',
		borderWidth: 1,
		borderRadius: 3,
		// elevation: 1
	},
	bottomText: {
		width: '75%',
		color: colors.darkGrey,
		fontSize: 22,
		textAlign: 'center',
		alignSelf: 'center',
		marginVertical: 15
	},
	footer: {
		width: '100%',
		paddingVertical: 20,
		display: 'flex',
		alignItems: 'center'
	}
}
