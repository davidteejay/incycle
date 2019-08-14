import { Dimensions } from 'react-native'
import colors from '../../../config/colors'

export default {
  container: {
    flex: 1,
    backgroundColor: colors.grey
  },
  titleContainer: {
    paddingHorizontal: 15,
    flex: .8
  },
  title: {
    backgroundColor: `${colors.green}55`,
    borderRadius: 10000,
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleText: {
    color: colors.green,
    fontSize: 15
  },
  body: {
    width: Dimensions.get('screen').width,
    // padding: 30
  },
  padding: {
    padding: 30,
    backgroundColor: '#fff',
  },
  walletCover: {
    borderRadius: 10,
    padding: 15,
    backgroundColor: colors.black,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 7,
  },
  walletRow: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: .33333,
    paddingVertical: 5
  },
  walletText: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 20
  },
  walletAmount: {
    padding: 10,
    backgroundColor: colors.black2,
    fontSize: 22,
    borderRadius: 7
  },
  subText: {
    textAlign: 'center',
    color: colors.darkGrey,
    fontSize: 24,
    paddingVertical: 15,
    backgroundColor: '#fff',
  },
  meterCover: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    backgroundColor: '#fff',
  },
  meter: {
    width: '40%',
    height: 200,
    borderRadius: 15,
    borderColor: colors.black2,
    borderWidth: 4,
    borderStyle: 'solid',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10
  },
  meterText: {
    color: colors.black2,
    fontSize: 26,
    elevation: 2
  },
  block: {
    position: 'absolute',
    height: 10,
    width: '70%',
    top: -5,
    left: '15%',
    backgroundColor: '#fff'
  },
  level: {
    position: 'absolute',
    width: '100%',
    left: 0,
    bottom: 0,
    backgroundColor: `${colors.greyBlue}55`,
    borderRadius: 7.5
  },
  meterSide: {
    height: 200,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  meterSideText: {
    fontSize: 22,
    color: colors.black2
  },
  inputCover: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  supplyInput: {
    width: '85%',
    height: 120,
    borderRadius: 5,
    backgroundColor: '#fff',
    lineHeight: 120,
    fontSize: 22,
    fontFamily: 'Poppins',
    textAlign: 'center',
    color: colors.black2,
    marginTop: 20,
    borderColor: `${colors.darkGrey}55`,
    borderWidth: 2,
    borderStyle: 'solid'
  },
  supplyButton: {
    marginTop: -25
  },
  modalCover: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, .5)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50
  },
  modal: {
    backgroundColor: '#fff',
    borderRadius: 15,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  modalTitle: {
    marginTop: 10,
    fontSize: 24,
    color: colors.green
  },
  modalText: {
    fontSize: 20,
    color: '#000',
    marginVertical: 10
  }
}
