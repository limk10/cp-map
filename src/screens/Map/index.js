import React, { useState, useEffect } from "react";
import MapView from "react-native-maps";
import { View, ScrollView } from "react-native";

import { getCurrentPosition } from "~/helper/map";

import GenericButton from "~/components/GenericButton";
import api from "~/services/api";

import styles from "./styles";

const Map = () => {
  const [initialRegion, setInitialRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  });

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const location = await getCurrentPosition();
    console.log(location);
    // const result = await api.get(
    //   "https://hooks.zapier.com/hooks/catch/472009/09rj5z/?"
    // );
    // console.log(result);
  };

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
