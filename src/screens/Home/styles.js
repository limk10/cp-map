import { StyleSheet } from "react-native";

const useStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 25,
    marginTop: 35,
    marginBottom: 15
  },
  containerImage: {
    borderRadius: 50
  },
  apresentationText: {
    marginTop: 20,
    fontSize: 30,
    color: "#17282F"
  },
  containerButton: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F03D5F",
    borderRadius: 10,
    width: "40%",
    height: 55
  },
  textButton: {
    fontSize: 17,
    color: "#f0f0f0"
  }
});

export default useStyles;
