import React, { Component } from 'react'
import { View, ScrollView, Image } from 'react-native'

import Header from '../../../components/Header'
import Text from '../../../components/Text'

import styles from './styles';
import colors from '../../../config/colors'

import scale from '../../../assets/scale.png'
import check from '../../../assets/check.png'
import funds from '../../../assets/funds.png'

export default class History extends Component {
  constructor(props) {
    super(props)

    this.state = {
      
    }
  }

  render() {
    const history = [
      {
        type: 'Field Validation',
        date: '07 Apr 11:12am',
        description: '248.6kg of metal was confirmed',
        icon: check
      },
      {
        type: 'New Supply',
        date: '05 Apr 09:26am',
        description: '50.3kg of metal was supplied',
        icon: scale
      },
      {
        type: 'New Funding',
        date: '04 Apr 11:12am',
        description: '50k was sent to your account for 250kg',
        icon: funds
      },
    ]
    return <View style={styles.container}>
      <Header title="History" />
      <ScrollView style={styles.body}>
        {history.map((item, i) => (
          <View key={i} style={styles.historyItem}>
            <View style={styles.iconContainer}>
              <Image
                source={item.icon}
              />
            </View>
            <View style={styles.textContainer}>
              <View style={styles.titleCover}>
                <Text isBold style={{ ...styles.text, color: colors.green }}>{item.type}</Text>
                <Text style={{ ...styles.text, color: colors.darkGrey }}>{item.date}</Text>
              </View>
              <Text style={{ ...styles.text, fontSize: 20 }}>{item.description}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  }
}
