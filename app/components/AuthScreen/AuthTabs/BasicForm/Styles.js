import { StyleSheet, Dimensions } from 'react-native'
const {width, height}=Dimensions.get('window')
export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent:'center',
    marginBottom:150,
    marginTop: -700
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
  buttonTitle: {
    fontFamily: 'Avenir',
      color: '#fff',
      fontWeight: '400'
  },
  img:{
    marginTop: -1200,
    height : 100,
    width: 100
  },
  picture:{
		width: null,
		height: null,
		resizeMode: 'cover',
  }
})
