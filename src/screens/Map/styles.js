import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const useStyles = StyleSheet.create({
  container: {
    marginBottom: 15
  },
  containerMap: {
    overflow: "hidden",
    alignSelf: "center",
    width: wp("90%"),
    height: hp("60%"),
    marginTop: "3%",
    borderRadius: 30,
    marginBottom: 15
  },
  map: {
    width: "100%",
    height: "100%"
  },
  containerButtons: {
    flex: 1,
    alignSelf: "center",
    width: wp("90%")
  },
  button: {
    marginVertical: 3
  }
});

export default useStyles;
