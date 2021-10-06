import React, { useState,useEffect } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import StartMeeting from "../Components/StartMeeting";
import { io } from "socket.io-client";

function MeetingRoom() {
  const [name, setname] = useState("");
  const [roomid, setroom] = useState("");

  const joinroom= () => {
    socket.emit('join-room',{ roomid: roomid, userName: name})

  }

useEffect(() => {
  const API_URL="http://localhost:3001"
  socket = io("http://localhost:3001");
  
  socket.on("connection", () => console.log("connected"))
},[])

  return (
    <View style={styles.container}>
      <StartMeeting
        name={name}
        setname={setname}
        roomid={roomid}
        setroom={setroom}
        joinroom={joinroom}
      />
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
