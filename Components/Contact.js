import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign'

function Contact() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.starred}>
            <AntDesign name="star" size={30} color="#efefef"/>
          
        </View>
        <Text style={styles.Text}>Starred</Text>
      </View>
    </View>
  );
}

export default Contact;

const styles = StyleSheet.create({
  container: {},
  Text: {
      color:"white",
      paddingLeft:15,
      fontSize:18
  },
  starred: {
      backgroundColor:"#333333",
      width: 55,
      height: 55,
      justifyContent: "center",
      alignItems:"center",
      borderRadius:40

  },
  row:{
      flexDirection:"row",
      marginTop:20,
      alignItems:"center"
  }
});
