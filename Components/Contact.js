import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

const menuitem = [
  {
    type: "starred",
    name: "Starred",
  },
  {
    type: "contact",
    name: "Sudhakar",
    photo: require("../assets/s.jpg"),
  },
  {
    type: "contact",
    name: "Thamizh Selvan",
    photo: require("../assets/t.jpg"),
  },
  {
    type: "contact",
    name: "Prasanth",
    photo: require("../assets/r.jpg"),
  },
  {
    type: "contact",
    name: "Amma",
    photo: require("../assets/s.jpg"),
  },
  {
    type: "contact",
    name: "Jawa",
    photo: require("../assets/icon.png"),
  },
];
function Contact() {
  return (
    <View style={styles.container}>
      {menuitem.map((item, index) => (
        <View key={index} style={styles.row}>
          {menuitem.type == "starred" ? (
            <View style={item.type}>
              <AntDesign name="star" size={30} color="#efefef" />
            </View>
          ) : (
            <Image source={item.photo} style={styles.image} />
          )}

          <Text style={styles.Text}>{item.name}</Text>
        </View>
      ))}
    </View>
  );
}

export default Contact;

const styles = StyleSheet.create({
  container: {},
  Text: {
    color: "white",
    paddingLeft: 15,
    fontSize: 18,
  },
  starred: {
    backgroundColor: "#333333",
    width: 55,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
  },
  row: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 20,
  },
});
