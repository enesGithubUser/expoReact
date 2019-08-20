import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class IplikSatinAl extends React.Component {
    render(){

      this.state = { text: '' };

      return (
                <View style={styles.container}>
                  <ScrollView>
                    <View style = {styles.navBar}>
                      <Text style={{fontWeight:"bold",textAlign:'right'}}>Tarih Sec</Text>
                    </View>
                    <View style = {styles.navBar}>
                      <Text style={{fontWeight:"bold",textAlign:'right'}}>Firma Sec</Text>
                    </View>
                    <View style = {styles.navBar}>
                      <Text style={{fontWeight:"bold",textAlign:'right'}}>İplik Numarası:          </Text>
                      <TextInput style={{height: 40, flex:1 , borderColor: 'gray', borderWidth: 1}} />
                    </View>
                    <View style = {styles.navBar}>
                      <Text style={{fontWeight:"bold",textAlign:'right'}}>İplik Cinsi</Text>
                    </View>
                    <View style = {styles.navBar}>
                      <Text style={{fontWeight:"bold",textAlign:'right'}}>Rengi</Text>
                    </View>
                    <View style = {styles.navBar}>
                      <Text style={{fontWeight:"bold",textAlign:'right'}}>Kilosu</Text>
                    </View>
                    <View style = {styles.navBar}>
                      <Text style={{fontWeight:"bold",textAlign:'right'}}>Adedi:         </Text>
                      <TextInput style={{height: 40, flex:1 , borderColor: 'gray', borderWidth: 1}} />
                    </View>
                          
                                
                </ScrollView>
              
            </View>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  navBar: {
    height: 80,
    marginTop: 24,
    backgroundColor: 'white',
    elevation: 3,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  logoItem: {
    width: 150,
    height: 50,
    borderRadius: 20,
  },
  rightNow: {
    flexDirection: 'row',
  },
  navItem: {
    marginLeft: 25,
  },
  body: {
    flex: 1,
    marginTop: 50,
    justifyContent: 'flex-start',
  },
  bodyBar: {
    marginTop: 20,
    height: 130,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bodyItem: {
    borderRadius: 20,
    width: 100,
    height: 100,
  },
  bodyTitleRightNow: {
    fontSize: 18,
    color: '#3c3c3c',
    paddingTop: 1,
    flexDirection: 'column'
  },
  tabTitle: {
    fontSize: 11,
    color: '#3c3c3c',
    paddingTop: 4,
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBar: {
    backgroundColor: 'white',
    height: 60,
    borderWidth: 0.5,
    borderColor: '#E5E5E5',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
})


export default IplikSatinAl