import React, { useState, useEffect } from "react";
import { View, TextInput, StyleSheet, Text, Alert,SafeAreaView, TouchableOpacity } from "react-native";
import StartMeeting from "../Components/StartMeeting";
import { io } from "socket.io-client";
import { Camera } from "expo-camera";
import FontAwesome from "react-native-vector-icons/FontAwesome";

let socket;
const menuicons =[
  {
    id:1,
    name:"microphone",
    title:"Mute"
  },
  {
    id:2,
    name:"video-camera",
    title:"Stop camera"
  },
  {
    id:3,
    name:"upload",
    title:"Share Content"
  },
  {
    id:4,
    name:"group",
    title:"Participants"
  }
];

function MeetingRoom() {
  const [name, setname] = useState("");
  const [roomid, setroom] = useState("");
  const [activeuser, setactive] = useState("");
  const [startcamera, setcamera] = useState(false);

  const __startcamera = async () => {
    const { status } = await Camera.requestPermissionsAsync();
    if (status === "granted") {
      setcamera(true);
    } else {
      Alert.alert("Access Denied");
    }
  };
  const joinroom = () => {
    __startcamera();
    socket.emit("join-room", { roomid: roomid, username: name });
  };

  useEffect(() => {
    socket = io("http://b6ea-103-98-63-241.ngrok.io");

    socket.on("connection", () => console.log("connected"));

    socket.on("all-users", (user) => {
      console.log("active users");
      console.log(user);
      setactive(user);
    });
  }, []);

  return (
    <View style={styles.container}>
      {startcamera ? (
        <SafeAreaView>
          <Camera
          type={"front"}
          style={{ width: "100%", height: "600"}}
        >
          </Camera>
          <View style={styles.menu}>
          {menuicons.map((icons,index) =>
          
            <TouchableOpacity style={styles.menutile}>
              <FontAwesome name={icons.name} size={24} color={"#efefef"}/>
              <Text style={styles.menutext}>{icons.title}</Text>
            </TouchableOpacity>
            
          )}
          </View>
        </SafeAreaView>
        
      ) : (
        <StartMeeting
          name={name}
          setname={setname}
          roomid={roomid}
          setroom={setroom}
          joinroom={joinroom}
        />
      )}
    </View>
  );
}

export default MeetingRoom;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1c",
    flex: 1,
  },
  menu:{
    flexDirection:"row",
    justifyContent:"space-around",
  },
  menutext:{
    color: "white",
  },
  menutile:{
    justifyContent:"center",
    alignItems:"center",
    height: 50,
    marginTop: 15,
  }
});
