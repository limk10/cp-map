import React from "react";
import PropTypes from "prop-types";
import { View, Text, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import {
  useFonts,
  Montserrat_600SemiBold,
  Montserrat_800ExtraBold,
  Montserrat_500Medium
} from "@expo-google-fonts/montserrat";

import AppLoading from "expo-app-loading";

import styles from "./styles";

import _homeIllustration from "~/assets/img/g10.png";

import GenericButton from "~/components/GenericButton";

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
          resizeMode="contain"
          style={{
            width: "100%",
            height: hp("38%")
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
        <GenericButton
          action={() => navigation.navigate("Map")}
          width="40%"
          title="Explorar..."
        />
      </View>
    </View>
  );
};

Home.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default Home;
