import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
// import {Image} from 'react-native';
import AppNews from './AppNews';


 export class App extends Component{

  render(){
        var news = [
      {
          title  : "FORD MUSTANG ",
          description :"Daha benzersiz, daha yüksek performansa sahip ve daha yenilikçi Yeni Mustang deneyimine hazır olun. Çünkü efsane şimdi bir başka."
      },
      {
        title : "LAMBORGHINI URUS",
        description:"Lamborghini Urus is the first Super Sport Utility Vehicle in the world to merge the soul of a super sports car with the functionality of an SUV. Powered by a 4.0-liter twin-turbo V8 engine producing 650 CV and 850 Nm of torque, Urus accelerates from 0 to 62 mph in 3.6 seconds and reaches a top speed of 190 mph. The design, performance, driving dynamics and driving emotion flow effortlessly into this visionary approach to Lamborghini DNA."
      },
      {
        title : "PORSCHE",
        description:"Bu alıntı, Porsche'yi Porsche yapan her şeyin kalbine ulaşır. Bir marka olarak, bir firma olarak ve bir otomobil üreticisi olarak. 65 yıldan uzun süredir, bize yol gösteren yıldızımız oldu. Çalışmalarımızın ve araçlarımızın karakterini belirleyen tüm değerleri kapsar. Bu nedenle, bunu en iyi açıklayabilecek kişinin, Porsche adını taşıyan ilk spor otomobilin yaratıcısından başkası olamayacağına şaşırmaya gerek yok: Ferdinand Anton Ernst – veya kısaca, Ferry Porsche."
      }
      
      ];
      const newArr = news.map(newItem => newItem.title);
      const secondArr = news.map(secondItem => secondItem.description);
   
      
      return(
        
        <View style = {styles.container}>
          <AppNews

          title = {newArr}
          description = {secondArr}


          />
        </View>
      )
    
     
     
    
  }
  }
  export default App;
  


  const styles = StyleSheet.create({
    
    container:{
      flex : 1,
      flexDirection: 'column',
      paddingTop: 90,
      paddingLeft:20,
    },
    headerTxt:{
      paddingLeft:130,
    },
    paragraph:{
      paddingTop:20,
      paddingLeft:30,
    },
    contentWrapper:{
      padding:20,
      flexDirection:'column',
      justifyContent:'center'
     }
    
  })