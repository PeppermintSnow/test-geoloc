import { useState, useEffect, useRef } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import MapNavbar from '@/components/ui/MapNavbar';
import ReportModal from '@/components/ui/ReportModal';

const MapScreen = () => {
  const [showReportModal, setShowReportModal] = useState(false);
  const [locationPermission, setLocationPermission] = useState(null);
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const mapRef = useRef(null)
  useEffect(() => {
    const getCurrentLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        return;
      }

      newLocation = await Location.getCurrentPositionAsync({});
      setLocation(newLocation);
      setLocationPermission(true);
    }
    
    getCurrentLocation();
  }, []);


  if (locationPermission === null) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (locationPermission === false) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 64}}>:(</Text>
        <Text>Location permission is required</Text>
      </View>
    )
  }

  return (
    <View style={{flex: 1}}>
      <MapNavbar
        location={location}
        mapRef={mapRef}
        setShowReportModal={setShowReportModal}
      />
      <ReportModal
        visible={showReportModal}
        setVisible={setShowReportModal}
      />
      <MapView
        ref={mapRef}
        style={{flex: 1, width: '100%', height: '100%'}}
        showUserLocation={true}
        showsMyLocationButton={true}
        loadingEnabled={true}
        region={{
          latitude: location?.coords.latitude,
          longitude: location?.coords.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
        }}
      >
        <Marker 
          coordinate={{
            latitude: location?.coords.latitude,
            longitude: location?.coords.longitude
          }}
        />
      </MapView>
    </View>
  );
}

export default MapScreen;

// const styles = StyleSheet.create;
