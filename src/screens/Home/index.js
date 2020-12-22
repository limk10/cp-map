import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import {
  useFonts,
  Montserrat_600SemiBold,
  Montserrat_700Bold
} from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";
import styles from "./styles";

import homeIllustration from "~/assets/img/illustration-home.png";

const Home = () => {
  let [fontsLoaded] = useFonts({
    Montserrat_700Bold,
    Montserrat_600SemiBold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image
          source={homeIllustration}
          resizeMode="contain"
          style={{ width: "100%", height: 300 }}
        />
      </View>
      <Text
        style={[styles.apresentationText, { fontFamily: "Montserrat_700Bold" }]}
      >
        {`Olá~\nPesquise\nDescubra\nAprecie ;)`}
      </Text>
      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text
            style={[
              styles.textButton,
              { fontFamily: "Montserrat_600SemiBold" }
            ]}
          >
            Explore...
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
