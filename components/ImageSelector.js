import React from 'react'
import { StyleSheet,Button, Image, Text, View, Alert } from 'react-native'
import Colors from '../constants/Colors'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions';

const ImageSelector = () => {

    const verifyPermissions = () => {
        Permissions.askAsync(Permissions.CAMERA);
        if(result.status!=='Granted'){
            Alert.alert(
                'Insuffieicent Permissions',
                'You need to grant camera permissions to use this app',
                [{text: 'Okay'}]
            )
            return false;
        }
        return true;
    }

    const takeImageHandler = async () => {
        const hasPermmison = await verifyPermissions();
        if(!hasPermmison)
            return;
        ImagePicker.launchCameraAsync();
    }

    return (
        <View>
            <Text>No image picked yer</Text>
            <Image />
            <Button title="Take image" 
                color={Colors.primary}
                onPress={takeImageHandler}
            />
        </View>
    )
}

export default ImageSelector

const styles = StyleSheet.create({
    imagePicker: {},
    imagePreivew:{
        width:'100%',
        height: 200,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ccc'
    },
    image:{
        width:'100%',
        height:'100%',
    }
})
