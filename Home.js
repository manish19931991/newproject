

import { View, Text, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { useNavigation, StackActions } from '@react-navigation/native';




const Home = () => {
    const navigation = useNavigation()



    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            {/* <Text>home</Text> */}
            <Button title='Profile' onPress={() => navigation.navigate("Imageupload")}/>

            <Text>Email: {auth().currentUser.email}</Text>
            <Text>UID: {auth().currentUser.uid}</Text>
            <View style={{ marginTop: 30, alignSelf: "center", }}>
                <TouchableOpacity style={{
                    backgroundColor: '#006666',
                    width: 320,
                    height: 50,
                    borderRadius: 5,
                }} onPress={async () => {
                    await auth().signOut();
                    navigation.dispatch(StackActions.popToTop());
                }}
                >
                    <Text style={{
                        paddingTop: 14,
                        fontSize: 15,
                        color: 'white',
                        alignSelf: "center",
                        fontWeight: "bold"
                    }}>
                        Logout
                    </Text>
                </TouchableOpacity>


            </View>
        </View>
    )
}

export default Home