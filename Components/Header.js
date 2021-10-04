import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import EnTypo from 'react-native-vector-icons/Entypo'


function Header() {
    return (
        <View style={style.container}>
            <EnTypo name="notification" size={30} color="#efefef" />
            <Text style={style.heading}>Meet & Chat</Text>
            <EnTypo name="new-message" size={30} color="#efefef" />

            
        </View>
    )
}

export default Header
const style = StyleSheet.create({
    container:{
        backgroundColor: "#1c1c1d",
        flexDirection:'row',
        flexWrap:'nowrap',
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical:30,
        paddingHorizontal:20
      
    },
    heading: {
        color:"#efefef",
        fontSize: 20,
        fontWeight:'700',

    },

})
