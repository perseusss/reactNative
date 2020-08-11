import React, {Component} from 'react';
import {StyleSheet, Text, View,TextInput, Button} from 'react-native';

class NewsItem extends Component{
    render(){
        return(
            <View>
                <Text>
                    <Text style = {styless.headers}> {this.props.title}</Text>
                    <View style={styless.contentWrapper}></View>
                    <Text>  {this.props.description}</Text>
                    <View style={styless.spaceBetween}></View>

                </Text>

            </View>
        )
    }
}
export default NewsItem;
const styless = StyleSheet.create({
    AllText:{
        
    }, headers:{
        fontSize:18,
        fontFamily:'arial'

    },
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
          
          padding:30,
          flexDirection:'column',
          justifyContent:'center'
         }
       
  })