import React from 'react'
import { View,Text,StyleSheet} from 'react-native'
import  Fontisto from 'react-native-vector-icons/Fontisto'


function Search() {
    return (
      <View style={styles.container}>
          <Fontisto name="search" size={20} color="#858585"/>
          <Text style={styles.textbar}>Search compo</Text>
      </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#333333",
        flexDirection:"row",
        paddingHorizontal:15,
        height: 50,
        alignItems:'center',
        borderRadius:20
    },
    textbar:{
        color: "#858585",
        paddingLeft:10,
        fontSize:15
    }
})
