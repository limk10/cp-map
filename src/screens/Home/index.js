import React from "react";
import PropTypes from "prop-types";
import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import {
  useFonts,
  Montserrat_600SemiBold,
  Montserrat_800ExtraBold,
  Montserrat_500Medium
} from "@expo-google-fonts/montserrat";

import AppLoading from "expo-app-loading";

import styles from "./styles";

import _homeIllustration from "~/assets/img/g10.png";

const windowHeight = Dimensions.get("window").height;

const Home = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_800ExtraBold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image
          source={_homeIllustration}
          resizeMode="cover"
          style={{
            width: "100%",
            height: windowHeight / 2.5
          }}
        />
      </View>
      <Text style={[styles.title, { fontFamily: "Montserrat_800ExtraBold" }]}>
        {`Olá~\nPesquise\nDescubra\nAprecie ;)`}
      </Text>
      <Text
        style={[styles.description, { fontFamily: "Montserrat_500Medium" }]}
      >
        {`Encontre locais desejados. Encontre as melhores lugares para ir com o nosso App.`}
      </Text>
      <View style={styles.containerButton}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Map")}
        >
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

Home.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default Home;
