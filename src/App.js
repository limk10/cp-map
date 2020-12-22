import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import "react-native-gesture-handler";

import Routes from "~/routes";
import Home from "~/screens/Home";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar backgroundColor="#000" translucent={false} /> */}
      <Routes />
      {/* <Home /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
