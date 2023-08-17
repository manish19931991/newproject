import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import firestore from '@react-native-firebase/firestore';
import { FirebaseDatabaseTypes } from '@react-native-firebase/database';
import { useEffect, useState } from 'react'
import auth from '@react-native-firebase/auth';
import { useNavigation, StackActions } from '@react-navigation/native';
const Login = () => {
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const navigation = useNavigation()
    // const [mydata, setmydata] = useState(null)
    // useEffect(() => {
    //   getdatabase();
    //   // firestore().collection("testing").doc(

    //   //   "CIjr2eMRC8LK9v0ZtQxS" )
    // }, []
    // );
    const handleLogin = async () => {
        try {
            if (Email.length > 0 && Password.length > 0) {
                //   console.log("Email=>",Email);
                //   console.log("Password=>",Password);
                const User = await auth().signInWithEmailAndPassword(Email, Password);
                console.log(User);
                if (User.user.emailVerified) {
                    alert("You Are Verified")
                    navigation.dispatch(StackActions.replace("Home"));
                } else {
                    alert("Please Verify Your Email Checkout Inbox")
                   await auth().currentUser.sendEmailVerification()
                   await auth().signOut();
                }
                //   console.log(isUserLogin);
                //   
                //   navigation.navigate("Home",{
                //     Email:isUserLogin.user.email, 
                //     uid:isUserLogin.user.uid, 
                //     });
            } else {
                alert("Please Enter All data")
            }
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <View>
            <View style={{ flexDirection: "row", marginTop: 90, alignSelf: "center" }}>
                <Text style={{ fontSize: 17, fontWeight: "bold" }}>Login</Text>
            </View>
            <View style={{ marginTop: 5, marginHorizontal: 19 }}>
                <View style={{ marginBottom: 5, marginTop: 12 }}>
                    <Text style={{ fontWeight: "600" }}>Login ID*</Text>
                </View>
                <View>
                    <TextInput style={{
                        borderRadius: 4,
                        borderColor: '#d9d9d9',
                        borderWidth: 2,
                        height: 45,
                    }} value={Email}
                        onChangeText={type => {
                            setEmail(type);
                            // tide(type);
                        }}

                        placeholder="Email"
                        placeholderTextColor="black"
                        keyboardType="email-address"
                    // onSubmitEditing={() => enter()}
                    />

                </View>
            </View>
            <View style={{ marginTop: 1, marginHorizontal: 19 }}>
                <View style={{ marginBottom: 5, marginTop: 12 }}>
                    <Text style={{ fontWeight: "600" }}>PASSWORD*</Text>
                </View>
                <View>
                    <TextInput style={{
                        borderRadius: 4,
                        borderColor: '#d9d9d9',
                        borderWidth: 2,
                        height: 45,
                    }} value={Password}
                        onChangeText={mahi => {
                            setPassword(mahi);

                        }}
                        secureTextEntry={true}
                        placeholder="Password"
                        placeholderTextColor="black"
                    />
                </View>
                <View style={{ marginTop: 30, alignSelf: "center", }}>
                    <TouchableOpacity style={{
                        backgroundColor: '#006666',
                        width: 320,
                        height: 50,
                        borderRadius: 5,
                    }} onPress={() => handleLogin()}>
                        <Text style={{
                            paddingTop: 14,
                            fontSize: 15,
                            color: 'white',
                            alignSelf: "center",
                            fontWeight: "bold"
                        }}>
                            Login
                        </Text>
                    </TouchableOpacity>


                </View>
                <View style={{ marginTop: 30, alignSelf: "center", }}>
                    <TouchableOpacity style={{
                        // backgroundColor: '#006666',
                        // width: 320,
                        // height: 50,
                        // borderRadius: 5,

                    }} onPress={() => navigation.navigate('Signup')}>
                        <Text style={{
                            paddingTop: 14,
                            fontSize: 19,
                            color: 'blue',
                            alignSelf: "center",
                            fontWeight: "bold"
                        }}>
                            New User Signup ?
                        </Text>
                    </TouchableOpacity>


                </View>
                <View style={{ marginTop: 30, alignSelf: "center", }}>
                    <TouchableOpacity style={{
                        // backgroundColor: '#006666',
                        // width: 320,
                        // height: 50,
                        // borderRadius: 5,

                    }} onPress={() => navigation.navigate('Mobileverify')}>
                        <Text style={{
                            paddingTop: 14,
                            fontSize: 19,
                            color: 'blue',
                            alignSelf: "center",
                            fontWeight: "bold"
                        }}>
                            Mobile Otp Verification ?
                        </Text>
                    </TouchableOpacity>


                </View>
            </View>
            <Text></Text>
        </View>
    )
}

export default Login