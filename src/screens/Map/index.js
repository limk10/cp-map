import React, { useState } from "react";
import MapView from "react-native-maps";
import { View, Dimensions, ScrollView } from "react-native";

import styles from "./styles";

import GenericButton from "~/components/GenericButton";

const Map = () => {
  const [initialRegion, setInitialRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  });

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.containerMap}>
          <MapView initialRegion={initialRegion} style={styles.map} />
        </View>
        <View style={styles.containerButtons}>
          <GenericButton
            style={styles.button}
            width="100%"
            title="Novo Marcador"
            action={() => {}}
          />
          <GenericButton
            style={styles.button}
            width="100%"
            title="Sincronizar"
            action={() => {}}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Map;
