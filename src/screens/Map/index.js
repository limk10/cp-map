import React, { useState } from "react";
import MapView from "react-native-maps";
import { View, Dimensions, ScrollView } from "react-native";

import styles from "./styles";

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
        <MapView initialRegion={initialRegion} style={styles.map} />
      </ScrollView>
    </View>
  );
};

export default Map;
