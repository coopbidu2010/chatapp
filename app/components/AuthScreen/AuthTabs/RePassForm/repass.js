import React, {Component} from 'react';
import {View, Alert, Text, TouchableOpacity, alert, TextInput, StyleSheet, Dimensions, Image} from 'react-native';
const {width, height}=Dimensions.get('window')
import firebase from 'firebase';
export default class repass extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../../../../images/repass.png')}
        style={[styles.imgicon,{tintColor: tintColor}]}
      />
    )
  }
  constructor(props) {
    super(props);
    this.state={
      email: ""
    }
  }
  submitme(){
    firebase.auth().sendPasswordResetEmail(this.state.email).then(function(user){
      Alert.alert('Thành Công','Hãy kiểm tra email',
      [
        {text: 'ok', onPress: () => console.log('Cancel Pressed')}
      ])
    }).catch(function(e){
      //alert('a');
      Alert.alert('Nhắc Nhỡ', 'Phải nhập Email',
      [
        {text: 'ok', onPress: () => console.log('Cancel Pressed')}
      ])
    })
  }
  render(){
    return(
      <View style={styles.wel}>
      <View style={styles.container}>
        <Text style={{alignSelf:'center',fontFamily:'Avenir', fontSize: 20, marginTop:-100}}>RePass</Text>
        <TextInput style={styles.textInput}
          onChangeText={(email)=>this.setState({email})}
          placeholder={"Nhập email"}
          underlineColorAndroid={'transparent'}
        />
        <TouchableOpacity style={styles.button}
          onPress={this.submitme.bind(this)}
        >
          <Text>Đổi password</Text>
        </TouchableOpacity>
      </View>
      </View>
    )
  }
}
const styles=StyleSheet.create({
  wel:{
    flex:1,
    backgroundColor:'#8A2BE2'
  },
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent:'center',
    marginBottom:150,
  },
  textInput: {
      height: 50,
     backgroundColor: '#fff',
     marginBottom : 10,
     borderRadius: 20,
     paddingLeft: 30,
     marginRight : 20,
     marginLeft : 20,
     borderColor: 'blue',
     borderWidth: 1,
  },
  button: {
    backgroundColor: 'rgba(52, 152, 219,1.0)',
    height: 50,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight : 50,
      marginLeft : 50,
  },
  imgicon:{
    width:26,
    height: 26
  }
})
