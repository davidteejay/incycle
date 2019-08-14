import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Icon } from 'native-base'
import { Actions } from 'react-native-router-flux'

import Text from './Text'
import colors from '../config/colors'

export default Header = ({ 
  title = '',
  TitleComponent = null,
  RightComponent = <View style={{ flex: .1 }} />
}) => {
  const styles = {
    header: {
      backgroundColor: '#fff',
      padding: 15,
      borderBottomColor: colors.grey,
      borderBottomWidth: 1,
      borderStyle: 'solid',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: 'row'
    },
    title: {
      fontSize: 22,
      color: '#000',
      marginLeft: 15,
      flex: .8
    }
  }

  return <View style={styles.header}>
    <TouchableOpacity onPress={() => Actions.drawerOpen()} style={{ flex: .1 }}>
      <Icon name="ios-menu" color="#000" style={{ color: '#000' }} />
    </TouchableOpacity>
    {TitleComponent ? TitleComponent : <Text style={styles.title}>
      {title}
    </Text>}
    {RightComponent}
  </View>
}
