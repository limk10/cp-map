import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const useStyles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    alignSelf: "center",
    width: Dimensions.get("window").width - 50,
    height: Dimensions.get("window").height - 250,
    marginTop: "5%",
    borderRadius: 30
  }
});

export default useStyles;
