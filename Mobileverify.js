import { View, Text, TextInput, Button, Alert } from 'react-native'
import React from 'react'
import { useState } from 'react'
import auth from '@react-native-firebase/auth';


const Mobileverify = () => {
  const [mobileno, setmobileno] = useState("")
  const [otp, setotp] = useState("")
  const [confirmdata, setconfirmdata] = useState("")

  const sendotp = async () => {
    try {
      const mobile = "+91" + mobileno;
      const response = await auth().signInWithPhoneNumber(mobile);
      setconfirmdata(response);
      console.log(response);
      alert("otp is sent please verify it....");
    } catch (err) {
      console.log(err);

    }
  };
  const submitotp = async () => {
    try {
      const response = await confirmdata.confirm(otp);
      console.log(response);
      alert("Your Number is verified");  
    } catch (err) {
      console.log(err);

    }
  };

  return (
    <View>

      <View style={{ marginTop: 150, marginHorizontal: 19 }}>

        <View>
          <TextInput style={{
            borderRadius: 4,
            borderColor: '#d9d9d9',
            borderWidth: 2,
            height: 45,
          }}

            placeholder="Enter Your Mobile Number"
            onChangeText={(Value) => setmobileno(Value)}
            placeholderTextColor="black"
            keyboardType="email-address"
          />
        </View>
        <View style={{ marginTop: 5, marginHorizontal: 75 }}>
          <Button title='send otp' onPress={() => sendotp()} />
        </View>
      </View>
      <View style={{ marginTop: 50, marginHorizontal: 19 }}>

        <View>
          <TextInput style={{
            borderRadius: 4,
            borderColor: '#d9d9d9',
            borderWidth: 2,
            height: 45,
          }}

            placeholder="Enter Your OTP"
            onChangeText={(Value) => setotp(Value)}
            placeholderTextColor="black"
            keyboardType="email-address"
          />
        </View>
        <View style={{ marginTop: 5, marginHorizontal: 75 }}>
          <Button title='submit' onPress={() => submitotp()} />
        </View>
      </View>

    </View>
  )
}

export default Mobileverify 