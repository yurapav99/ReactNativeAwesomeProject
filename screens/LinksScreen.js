import React from 'react';
import { ScrollView, StyleSheet,View,Text } from 'react-native';
import {MyImage} from '../components/MyImage'

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
           <View style={styles.welcomeContainer}> 
            <Text style={styles. developmentModeText}>Yura Pavliuk</Text>
            <MyImage/>
             </View>
         
      </ScrollView>
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
    fontSize: 14,
   
  },
});
