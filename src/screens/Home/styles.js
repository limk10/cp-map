import { StyleSheet } from "react-native";
import { colors } from "~/styles";

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
    fontSize: 30,
    color: colors.text
  },
  description: {
    maxWidth: "75%",
    marginTop: 20,
    fontSize: 18,
    color: colors.text
  },
  containerButton: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    borderBottomWidth: 4,
    borderBottomColor: colors.secondary,
    borderRadius: 10,
    width: "40%",
    height: 45
  },
  textButton: {
    fontSize: 17,
    color: "#f0f0f0"
  }
});

export default useStyles;
