import colors from '../../../config/colors'

export default {
	container: {
		flex: 1,
		backgroundColor: '#fff'
	},
	footer: {
		paddingVertical: 30,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	content: {
		padding: 30,
		flex: 1,
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'center'
	},
	heading: {
		fontSize: 88,
		lineHeight: 90,
		fontWeight: '900',
		color: colors.black
	},
	subheading: {
		color: colors.grey,
		fontSize: 26,
		marginVertical: 20
	},
	dots: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row'
	},
	dot: {
		backgroundColor: colors.grey,
		height: 10,
		width: 10,
		borderRadius: 5,
		margin: 5
	},
	dotActive: {
		backgroundColor: colors.black
	},
	header: {
		paddingVertical: 10,
		paddingHorizontal: 30
	},
	headerIcon: {
		color: colors.black,
		fontSize: 22
	},
	inputCover: {
		marginVertical: 15,
		width: '100%'
	},
	label: {
		color: colors.black,
		fontSize: 22,
		marginBottom: 15
	},
	input: {
		borderRadius: 5,
		backgroundColor: 'transparent',
		color: colors.black,
		borderWidth: 1,
		borderStyle: 'solid',
		borderColor: colors.black,
		padding: 15,
		width: '100%'
	},
	split: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'row',
		width: '100%'
	},
	splitText: {
		flex: .9,
		fontSize: 18,
		color: colors.black,
	},
	splitCover: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'row',
		width: '48%'
	},
	splitIcon: {
		fontSize: 18,
		color: colors.green,
		flex: .1
	},
	modalCover: {
		backgroundColor: "rgba(0, 0, 0, .3)",
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		padding: 40
	},
	modal: {
		backgroundColor: "#fff",
		width: "100%",
		borderRadius: 15
	},
}
