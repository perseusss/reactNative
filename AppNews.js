import React, {Component} from 'react';
import {StyleSheet, Text, View,TextInput, Button} from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import NewsItem from './NewsItem';
// import App from './App';

class AppNews extends Component{
    render(){
        return(
          <View style = {styless.AllText}>

           {this.props.news.map(news =>
            <NewsItem title={news.title}
                      description={news.description}  />                         
                                          )}
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
        shadowColor:'#000',
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