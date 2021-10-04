import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const items = [
  {
    id: 1,
    name: "video-camera",
    title: "New Meeting",
    customcolor:"#FF751F",
  },
  {
    id: 2,
    name: "plus-square",
    title: "Join",
  },
  {
    id: 3,
    name: "calendar",
    title: "Schedule",
  },
  {
    id: 4,
    name: "upload",
    title: "share Screen",
  },
];

function MenuButtons() {
  return (
    <View style={style.container}>
      {items.map((item, index) => (
        <View key={index} style={style.buttoncontainer}>
          <TouchableOpacity 
          style={{
            ...style.button,
            backgroundColor: item.customcolor ? item.customcolor : "#0470DC"
          }}
          >
            <FontAwesome name={item.name} size={25} color={"#efefef"} />
          </TouchableOpacity>
          <Text style={style.menutext}>{item.title}</Text>
        </View>
      ))}
    </View>
  );
}

export default MenuButtons;

const style = StyleSheet.create({
  container: {
    marginTop: 25,
    paddingBottom: 15,
    borderBottomColor: "#1f1f1f",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttoncontainer: {
    alignItems: "center",
    flex: 1,
  },
  menutext: {
    color: "#efefef",
    fontSize: 12,
    paddingTop: 10,
    fontWeight: "700",
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
