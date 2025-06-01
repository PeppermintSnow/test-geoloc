import { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const HomeScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: 'white', fontSize: 32, fontWeight: 'bold'}}>Landing Page</Text>
    </View>
  );
}

export default HomeScreen;

// const styles = StyleSheet.create;
