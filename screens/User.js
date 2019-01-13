import React from 'react';
import { ScrollView, StyleSheet,View,Text,Platform } from 'react-native';
import {MyImage} from '../components/MyImage'


export default class User extends React.Component {
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
           <View style={ styles.welcomeContainer}>    
            <MyImage/>       
             </View>
            
            
             <View style={styles.welcomeStartContainer}>    
             <Text style={styles.ModeText}>Eager for knowlenge. Good listener and fast learner. Quite adaptive. Like to work in a team. Hardworker. 
              Want to learn about IT industry and became proffesional software dev.</Text>    
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
  welcomeStartContainer: {
   flex:1,
    alignItems: 'flex-start',
    marginBottom: 20,
    backgroundColor: '#fbfbfb',
 
  },
  developmentModeText: {
   
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
    fontSize: 28,
    backgroundColor: '#fbfbfb',
    fontFamily: 'Cochin',
   
  },
  ModeText: {
   flex:1,
    fontSize: 18,  
    marginTop: 10,   
    alignItems:"flex-start",
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
