import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, TextInput, TouchableOpacity, Text, Image } from 'react-native'

import translations from '../../../../i18n'
import imgStart from '../../../../images/wallpaper.png'
import styles from './Styles'

class BasicFormComponent extends Component {

  constructor(props) {
    super(props);
    this.state = { email: '', password: '', };

    this.handleEmailChange = (email) => {
      this.setState({email: email})
    }

    this.handlePasswordChange = (password) => {
      this.setState({password: password})
    }

    this.handleButtonPress = () => {
      this.props.onButtonPress(this.state.email, this.state.password)
    }
  }

  render() {
    return (
      <View style={{flex:1}}>
        <Image  source={imgStart}/>
      <View style={{flex: 1}}>
        <View style={{alignSelf:'center',alignItems: 'center',flex: 3,justifyContent:'center',height: 80,width: 100}}>
              <Image
                source={require('../../../../images/logo.png')}
                style={styles.img}
              />
              <Text style={{alignSelf:'center',fontFamily:'Avenir',color: '#0047AB', fontSize: 20}}>Talk-Talk</Text>
        </View>
        <View style={styles.container}>
          <TextInput
            style={styles.textInput}
            placeholder={translations.t('email')}
            returnKeyType='next'
            keyboardType='email-address'
            autoCapitalize='none'
            onChangeText={this.handleEmailChange}
            value={this.state.email}
            underlineColorAndroid={'transparent'} />

          <TextInput
            style={styles.textInput}
            placeholder={translations.t('password')}
            secureTextEntry={true}
            returnKeyType='done'
            onChangeText={this.handlePasswordChange}
            value={this.state.password}
            underlineColorAndroid={'transparent'} />

          <TouchableOpacity
            style={styles.button}
            onPress={this.handleButtonPress}>

            <Text style={styles.buttonTitle}>{this.props.buttonTitle}</Text>

          </TouchableOpacity>
          </View>
      </View>
      </View>
    )
  }
}

BasicFormComponent.propTypes = {
  buttonTitle: PropTypes.string.isRequired,
  onButtonPress: PropTypes.func.isRequired,
}

export default BasicFormComponent
