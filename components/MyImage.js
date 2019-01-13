import React from 'react';
import { Image,StyleSheet } from 'react-native';

export class MyImage extends React.Component { 
    render() {

      return (
    <Image source={require('../assets/images/yura.jpg')} style={styles.image}/>
   
      );
    }
  }

  const styles = StyleSheet.create({
    image: { 
      flex: 1,  
      height: 580 ,
      resizeMode: 'contain' ,
        
    },
  }
    );
  