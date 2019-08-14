import { Dimensions } from 'react-native'
import colors from '../../../config/colors'

export default {
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  body: {
    width: Dimensions.get('screen').width,
  },
  historyItem: {
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderBottomColor: colors.grey,
    borderBottomWidth: 1,
    borderStyle: 'solid'
  },
  iconContainer: {
    flex: .15,
    alignItems: 'center'
  },
  textContainer: {
    flex: .85,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingRight: 15
  },
  titleCover: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  text: {
    color: '#000',
    fontSize: 15
  }
}
