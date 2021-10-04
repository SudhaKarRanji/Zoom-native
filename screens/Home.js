import React from 'react'
import { SafeAreaView, View ,StyleSheet} from 'react-native'


import Header from '../Components/Header'
import MenuButtons from '../Components/MenuButtons'
import Search from '../Components/Search'
import Contact from '../Components/Contact'

function Home() {
    return (
        <View style={styles.container}>
            <SafeAreaView style={{height: '100%'}}>
            <Header/>
            <Search/>
            <MenuButtons/>
            <Contact/>
            </SafeAreaView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#1c1c1c"
    }
}) 