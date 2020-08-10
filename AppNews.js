import React, {Component} from 'react';
import {StyleSheet, Text, View,TextInput, Button} from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
// import App from './App';

class AppNews extends Component{
    render(){
        return(
          <View >
            
            <Text>{this.props.title}</Text>
            <View style={styless.contentWrapper}></View>
            <Text>{this.props.description}</Text>
            <View style={styless.spaceBetween}></View>

          </View>
        )
    }
}
export default AppNews;

const styless = StyleSheet.create({
 
    contentWrapper:{
      
      padding:1,
      flexDirection:'column',
      justifyContent:'center',
      shadowColor:'black',
      shadowOffset:{width: 1 , height:2},
      shadowOpacity:0.5,
      backgroundColor: 'black'
       },
       spaceBetween:{
        padding:20,
        flexDirection:'column',
        justifyContent:'center'
       }
     
})