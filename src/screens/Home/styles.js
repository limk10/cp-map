import { StyleSheet } from "react-native";
import { colors } from "~/styles";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const useStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 25,
    marginTop: "5%",
    marginBottom: 15,
    backgroundColor: "white"
  },
  containerImage: {
    borderRadius: 50,
    overflow: "hidden"
  },
  title: {
    marginTop: 20,
    fontSize: hp("3.5%"),
    color: colors.text
  },
  description: {
    maxWidth: "75%",
    marginTop: 20,
    fontSize: hp("2.5%"),
    color: colors.text
  },
  containerButton: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end"
  }
});

export default useStyles;
