import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import "react-native-gesture-handler";

import Routes from "~/routes";
import Map from "~/screens/Map";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Routes />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
