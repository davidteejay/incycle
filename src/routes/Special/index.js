import React from 'react'
import { View, Image, Linking } from 'react-native'

import Text from '../../components/Text'
import Button from '../../components/Button'
import Header from '../../components/Header'

export default Special = () => {
  const number = '+2348000000001'
  return <View style={styles.container}>
    <Header title="Special Supply" />
    <View style={styles.content}>
      <Text style={styles.text1}>Do you have a supply of more than 2 tons of metals?</Text>
      <Image
        source={require('../../assets/special.png')}
        style={{ height: 150, width: 75 }}
      />
      <Text isBold style={styles.mainText}>Let's Talk</Text>
      <Image
        source={require('../../assets/phone.png')}
        style={{ height: 30, width: 30 }}
      />
      <Text style={styles.text1}>{number}</Text>
      <Button
        filled
        text="Call inCycle"
        onPress={() => Linking.openURL(`tel:${number}`)}
      />
    </View>
  </View>
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    padding: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  text1: {
    color: '#000',
    marginVertical: 15,
    fontSize: 20
  },
  mainText: {
    color: '#000',
    fontSize: 60,
    marginVertical: 15
  }
}
