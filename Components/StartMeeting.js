import React from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

function StartMeeting({name,roomid,setname,setroom,joinroom}) {
    // const [name, setname] = useState("");
    // const [roomid, setroom] = useState("");

  return (
    <View>
      <View style={styles.meetingcontainer}>
        <View style={styles.info}>
          <TextInput
            style={styles.textinput}
            value={name}
            placeholder="Enter Your Name"
            placeholderTextColor="#747674"
            onChangeText={(text) => setname(text)}
          />
        </View>
        <View style={styles.info}>
          <TextInput
            style={styles.textinput}
            value={roomid}
            placeholder="Enter Room ID"
            placeholderTextColor="#747674"
            onChangeText={(text) => setroom(text)}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity style={styles.startmeet} onPress={() => joinroom}>
            <Text style={{ color: "white", fontWeight: "900" }}>
              Start Meeting
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default StartMeeting;

const styles = StyleSheet.create({
    info: {
        width: "100%",
        height: 50,
        backgroundColor: "#373538",
        borderRadius: 10,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "#484648",
        padding: 12,
        justifyContent: "center",
        marginTop:20
      },
      textinput: {
        color: "white",
        fontSize: 18,
      },
      meetingcontainer: {},
      startmeet:{
          width: 350,
          height: 50,
          marginTop:20,
          justifyContent:"center",
          alignItems:"center",
          backgroundColor:"#0470DC",
          borderRadius:20
      }
})
