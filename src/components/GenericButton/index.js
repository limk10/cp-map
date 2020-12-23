import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import {
  useFonts,
  Montserrat_600SemiBold
} from "@expo-google-fonts/montserrat";
import { colors } from "~/styles";

import AppLoading from "expo-app-loading";

const GenericButton = props => {
  const { title = "", action = () => {}, width = "40%", style = {} } = props;

  let [fontsLoaded] = useFonts({
    Montserrat_600SemiBold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <TouchableOpacity
      style={[styles.button, { width, ...style }]}
      onPress={action}
    >
      <Text
        style={[styles.textButton, { fontFamily: "Montserrat_600SemiBold" }]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    borderRadius: 10,
    height: 45
  },
  textButton: {
    fontSize: 17,
    color: "#f0f0f0"
  }
});

GenericButton.propTypes = {
  title: PropTypes.string.isRequired,
  action: PropTypes.any.isRequired,
  style: PropTypes.object,
  width: PropTypes.string.isRequired
};

export default GenericButton;
