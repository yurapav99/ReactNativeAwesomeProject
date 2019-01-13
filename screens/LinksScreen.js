import React from 'react';
import { ScrollView, StyleSheet,View,Text,Platform } from 'react-native';
import {MyImage} from '../components/MyImage'
import { MonoText } from '../components/StyledText';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  render() {
    return (
      <View style={styles.container}>

     <View style={styles.UserInfoContainer}>        
         <Text style={styles. developmentModeText}>Yura Pavliuk</Text>
          </View>
      


      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
           <View style={styles.welcomeContainer}> 
         
            <MyImage/>
            <Text style={styles. developmentModeText}>Yura Pavliuk</Text>
             </View>
         
      </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  welcomeContainer: {
   
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  developmentModeText: {
   
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
    fontSize: 28,
    backgroundColor: '#fbfbfb',
    fontFamily: 'Cochin',
   
  },
  UserInfoContainer: {
position:"relative",
 alignItems:"center",
    top: 0,
    left: 0,
    opacity: 0.5,  
    backgroundColor: 'rgba(96,100,109, 0.01)'
    }
});
