import { Text, StyleSheet, View } from "react-native";
import MapboxGL from "@react-native-mapbox-gl/maps";
import { useEffect } from "react";

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  container: {
    height: 300,
    width: 300,
    backgroundColor: "tomato",
  },
  map: {
    flex: 1,
  },
});
export function Home() {
  useEffect(() => {
    MapboxGL.locationManager.start();
    return () => {
      MapboxGL.locationManager.stop();
    };
  }, []);

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapboxGL.MapView
          styleURL={styleURL.styleURL}
          style={styles.map}
        ></MapboxGL.MapView>
      </View>
    </View>
  );
}
