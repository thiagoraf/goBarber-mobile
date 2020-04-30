import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      /*headerStyle : {
            backgroundColor: "#000"
        },*/
      headerShown: false,
      cardStyle: { backgroundColor: "#312e38" },
    }}
  >
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="SignUn" component={SignUp} />
  </Auth.Navigator>
);

export default AuthRoutes;
