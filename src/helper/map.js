import { Platform, Alert } from "react-native";

const LATITUDE_DELTA = 0.01;
const LONGITUDE_DELTA = 0.01;

const getCurrentPosition = async () => {
  try {
    await navigator.geolocation.getCurrentPosition(
      position => {
        return {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA
        };
      },
      error => {
        //TODO: better design
        switch (error.code) {
          case 1:
            if (Platform.OS === "ios") {
              Alert.alert(
                "",
                "Para localizar sua localização, ative a permissão para o aplicativo em Configurações - Privacidade - Localização"
              );
            } else {
              Alert.alert(
                "",
                "Para localizar sua localização, ative a permissão para o aplicativo em Configurações - Aplicativos - ExampleApp - Localização"
              );
            }
            break;
          default:
            Alert.alert("", "Error al detectar tu locación");
        }
      }
    );
  } catch (e) {
    alert(e.message || "");
  }
};

export { getCurrentPosition };
