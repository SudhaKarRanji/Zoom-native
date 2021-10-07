import React, { useState, useEffect } from "react";
import { View, TextInput, StyleSheet, Text, Alert } from "react-native";
import StartMeeting from "../Components/StartMeeting";
import { io } from "socket.io-client";
import { Camera } from "expo-camera";

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
    socket = io("http://1a6c-103-98-63-241.ngrok.io");

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
        <Text>Start camera</Text>
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
});
