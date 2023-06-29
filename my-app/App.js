import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import LoginScreen from "./assets/Screen/LoginScreen";
import AppNavigator from "./assets/router/AppNavigator";
import HomeScreen from "./assets/Screen/HomeScreen";
import RegisterScreen from "./assets/Screen/RegisterScreen";
import ArcadeList from "./assets/Screen/ArcadeList";
import InboxScreen from "./assets/Screen/InboxScreen";

const Tab = createBottomTabNavigator();

function App() {

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: "#FDF3E6" }}>
      <NavigationContainer style={{ flex: 1, backgroundColor: "#FDF3E6" }}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "Login") {
                iconName = focused
                  ? "information-circle"
                  : "information-circle-outline";
              } else if (route.name === "Register") {
                iconName = focused ? "person-add" : "person-add-outline";
              }

              return (
                <Ionicons
                  name={iconName}
                  size={24}
                  color={focused ? "blue" : "gray"}
                />
              );
            },
          })}
          tabOptions={{
            tabBarActiveTintColor: "red",
            tabBarInactiveTintColor: "gray",
            tabBarItemStyle: { display: "flex" },
            tabBarStyle: [{ display: "flex" }, null],
          }}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Login" component={LoginScreen} />
          <Tab.Screen name="Register" component={RegisterScreen} />
          <Tab.Screen name="ArcadeList" component={ArcadeList} />
          <Tab.Screen name="Inbox" component={InboxScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
