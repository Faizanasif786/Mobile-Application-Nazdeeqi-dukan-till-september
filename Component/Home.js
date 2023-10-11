import React from 'react';
import { View, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import Promotion from './HomeCatagories/Promotion';
import Stores from './HomeCatagories/Stores';
import Products from './HomeCatagories/Products';
import HeaderTab from './HomeCatagories/HeaderTab';
import AvaibleArea from './HomeCatagories/AvaibleArea';
import ButtomTabs from './HomeCatagories/ButtomTabs';
import ViewCart from './HomeCatagories/ViewCart';

export default function Home() {
  return (
<>
<ScrollView>
    <SafeAreaView style={styles.container}>

      <View>
        <HeaderTab/>
        <AvaibleArea/>
        <Promotion />
        <Products/>
        <Stores/>
        </View>
  


    </SafeAreaView>
    </ScrollView>
    {/* <ViewCart/> */}
    <ButtomTabs/>
 
</>
  );
}

const styles = StyleSheet.create({
  container: {
 marginTop:"5%",

},
});
