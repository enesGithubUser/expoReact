import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer} from 'react-navigation'

import Anasayfa from './src/components/Anasayfa'
import Iplik from './src/components/Iplik/Iplik'
import IplikSatinAl from './src/components/Iplik/IplikSatinAl'
import Dokuma from './src/components/Dokuma'
import Apre from './src/components/Apre'
import Stok from './src/components/Stok'
import Siparis from './src/components/Siparis'
import Urun from './src/components/Urun'
import Rapor from './src/components/Rapor'
import Metin from './src/components/Metin'
import Ayar from './src/components/Ayar'


const AppNavigator = createStackNavigator({
  Anasayfa: {screen : Anasayfa},
  Iplik: {screen : Iplik},
  IplikSatinAl: {screen : IplikSatinAl},
  Dokuma: {screen : Dokuma},
  Apre: {screen : Apre},
  Stok: {screen : Stok},
  Siparis: {screen : Siparis},
  Urun: {screen : Urun},
  Rapor: {screen : Rapor},
  Metin: {screen : Metin},
  Ayar: {screen : Ayar}
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
 })

export default createAppContainer(AppNavigator)