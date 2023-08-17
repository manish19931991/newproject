import { View, Text, Button, Image, Alert } from 'react-native'
import React from 'react'
import DocumentPicker from "react-native-document-picker"
import { useState } from 'react'
import storage from '@react-native-firebase/storage';

const Imageupload = () => {
  const [imagedata, setimagedata] = useState(null);
  const [fullimagepath, setfullimagepath] = useState('');
  const [imagedownload, setimagedownload] = useState('');
  const Pickimage = async () => {
    try {
      const response = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.images],
        copyTo: 'cachesDirectory',
      });
      console.log(response);
      setimagedata(response);
    } catch (err) {
      console.log(err);

    }
  };
  const Uploadimage = async () => {
    try {
      const response = storage().ref('/profile/${imagedata.name}');
      const put = await response.putFile(imagedata.fileCopyUri);

      setfullimagepath(put.metadata.fullPath);
      const url = await response.getDownloadURL();
      setimagedownload(url);
      alert("image upload sucessfully")
    } catch (err) {
      console.log(err);

    }
  };
  const Deleteimage = async () => {
    try {
      const response = await storage().ref(fullimagepath).delete();
      console.log(response);
    } catch (err) {
      console.log(err);

    }
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>

      {imagedata ? <Image source={{ uri: imagedata.uri }} style={{ height: 220, width: 220, marginBottom: 20 }} /> : <Text>No Image Found</Text>}
      <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-around" }}>
        <Button title='select image' onPress={() => Pickimage()} />
        <Button title='Upload image' onPress={() => Uploadimage()} />
        <Button title='Delete image' onPress={() => Deleteimage()} color="red" />
      </View>
      <View style={{ marginTop: 30 }}>
        <Text>url = {imagedownload.length > 0 ? imagedownload : "not found"}</Text>
      </View>
    </View>
  );
}

export default Imageupload