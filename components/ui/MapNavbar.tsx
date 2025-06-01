import { View, Text, Pressable, ActivityIndicator, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import { IconSymbol } from '@/components/ui/IconSymbol';

const MapNavbar = ({
  location,
  mapRef,
  setShowReportModal
}: {
  location: Location.LocationObject | null,
  mapRef: any,
  setShowReportModal: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const handleRecenter = () => {
    if (mapRef?.current) {
      mapRef.current.animateCamera(
        {
          center: {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          },
          zoom: 18,
        },
        { duration: 1000 }
      );
    }
  }
  const navOptions = [
    { name: 'info' },
    { name: 'recenter', function: handleRecenter },
    { name: 'report', color: '#f00900', function: (() => setShowReportModal(true)) }
  ];
  if (!location) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      {navOptions.map((option) => {
        return (
          <Pressable
            onPress={option?.function}
            key={option.name}
            style={({pressed}) => [
              {
                backgroundColor: pressed ? '#666' : '#333'
              },
              styles.pressable
            ]}
          >
            <IconSymbol 
              name={`${option.name}.fill`}
              color={option?.color ?? '#f0f0f0'}
              size={32}
            />
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
    borderRadius: 24,
    zIndex: 99,
    right: 0,
    bottom: 0,
    marginRight: 12,
    marginBottom: 12,
  },
  pressable: {
    width: 64,
    height: 64,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 24
  }
})

export default MapNavbar;
