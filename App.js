import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View,Button,Alert } from "react-native";
import Navigation from "./Navigation";

import Home from "./screens/Home";

export default function App() {
  return <Navigation />

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
