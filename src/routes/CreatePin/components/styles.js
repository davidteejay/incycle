import colors from '../../../config/colors'

export default {
	container: {
		flex: 1,
		backgroundColor: '#fff'
	},
	content: {
		flex: 1,
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'center',
		padding: 40
	},
	topText: {
		color: colors.black,
		fontSize: 28
	},
	heading: {
		fontSize: 88,
		lineHeight: 90,
		fontWeight: '900',
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
		height: 50,
		width: 35,
		textAlign: 'center',
		marginHorizontal: 5,
		borderColor: colors.grey,
		color: '#000',
		borderWidth: 1,
		borderRadius: 3,
		elevation: 1
	},
	bottomText: {
		width: '75%',
		color: colors.grey,
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
