import React from 'react';
import { Image,StyleSheet } from 'react-native';

export class MyImage extends React.Component {
    render() {
      // return< Image source={require('../assets/images/yura.jpg')} style={{resizeMode="contain"}} />;
    //    return <Text {...this.props} style={[this.props.style, { fontFamily: 'space-mono' }]} />;
    let pic = {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
      };
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
      alignItems: 'flex-start'  ,
    },
  }
    );
  