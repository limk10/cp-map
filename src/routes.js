import React from "react";
import { TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AppLoading from "expo-app-loading";

import {
  useFonts,
  Montserrat_600SemiBold
} from "@expo-google-fonts/montserrat";

const Stack = createStackNavigator();

import HomeScreen from "~/screens/Home";
import MapScreen from "~/screens/Map";

import { colors } from "~/styles";

const theme = {
  colors: {
    background: "white"
  }
};

const Routes = () => {
  let [fontsLoaded] = useFonts({
    Montserrat_600SemiBold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const getHeaderTitleStyle = props => {
    return {
      title: props?.title,
      headerTitleStyle: {
        fontFamily: "Montserrat_600SemiBold",
        color: colors.text
      },
      headerBackTitle: " "
    };
  };

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={getHeaderTitleStyle({ title: "CPlant Map" })}
          component={HomeScreen}
        />
        <Stack.Screen
          options={getHeaderTitleStyle({ title: "Locais" })}
          name="Map"
          component={MapScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
