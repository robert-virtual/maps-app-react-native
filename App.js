import MapboxGL from "@react-native-mapbox-gl/maps";
import { Platform } from "react-native";
import { useState, useEffect } from "react";
import { Home } from "./src/Home";
import config from "./src/utils/config";

MapboxGL.setAccessToken(config.get("token"));
const [granted, setGranted] = useState(false);
const [android, setAndroid] = useState(Platform.OS == "android");
const [cargando, setCargando] = useState(true);
export default function App() {
  useEffect(() => {
    if (android) {
      MapboxGL.requestAndroidLocationPermissions().then((res) => {
        setGranted(res);
        setCargando(false);
      });
    }
  }, []);
  if (android && !granted) {
    if (cargando) {
      return <Text>cargando...</Text>;
    }
    return <Text>Debe dar permiso para ejecutar esta app</Text>;
  }
  return <Home />;
}
