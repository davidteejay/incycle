import React from 'react'
import { View } from 'react-native'
import { List, ListItem } from 'native-base'

import Text from '../../components/Text'
import Header from '../../components/Header'

export default Settings = () => {
  return <View style={styles.container}>
    <Header title="Settings"/>
    <View style={styles.content}>
      <List>
        <ListItem noIndent>
          <Text style={styles.text}>Change Number</Text>
        </ListItem>
        <ListItem noIndent>
          <Text style={styles.text}>Change Pin</Text>
        </ListItem>
      </List>
    </View>
  </View>
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    flex: 1
  },
  text: {
    color: '#000',
    fontSize: 17
  }
}
